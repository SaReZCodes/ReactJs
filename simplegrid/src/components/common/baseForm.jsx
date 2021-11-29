import React, { Component } from "react";
import Joi from "@hapi/joi";
import Input from "./input";

export class BaseForm extends Component {
    state = {
        data: {},
        errors: {}
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) {
            errors[input.name] = errorMessage;
        } else {
            delete errors[input.name];
        }

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) {
            return;
        }

        this.doSubmit();
    }

    validate = () => {
        const { data: data } = this.state;
        const validationResult = Joi.object(this.schema).validate(data, {
            abortEarly: false
        });
        if (!validationResult.error) {
            return null;
        }

        const errors = {};
        for (let item of validationResult.error.details) {
            errors[item.path[0]] = item.message;
        }
        console.log(errors);
        return errors;
    }

    validateProperty = ({ name, value }) => {
        const userInputObject = { [name]: value };
        const propertySchema = Joi.object({ [name]: this.schema[name] });
        const { error } = propertySchema.validate(userInputObject, {
            abortEarly: true
        });
        return error ? error.details[0].message : null;
    };

    renderInput(name, label, type = "text") {
        const { data, errors } = this.state;
        return (
          <Input
            name={name}
            type={type}
            label={label}
            value={data[name]}
            onChange={this.handleChange}
            error={errors[name]}
          />
        );
      }
}