import React, { Component } from "react";
import Joi from "@hapi/joi";
import { BaseForm } from "./common/baseForm";


export class LoginForm extends BaseForm {
    state = {
        data: {
            username: '',
            password: ''
        },
        errors: []
    }
    schema = {
        username: Joi.string()
            .alphanum()
            .min(5)
            .max(15)
            .messages({
                "string.empty": "نام کاربری وارد نشده است",
                "string.min": "حداقل تعداد حروف 5 کاراکتر می‌باشد",
                "string.max": "حداکثر تعداد حروف مجاز 15 کاراکتر می‌باشد",
                "string.alpha": "از حروف و عدد استفاده نمایید"
            }),

        password: Joi.string()
            .min(5)
            .max(12)
            .alphanum()
            .required()
            .messages({
                "string.empty": "رمز عبور وارد نشده است",
                "string.min": "حداقل تعداد حروف 5 کاراکتر می‌باشد",
                "string.max": "حداکثر تعداد حروف مجاز 15 کاراکتر می‌باشد",
                "string.alpha": "از حروف و عدد استفاده نمایید"
            }),
    }

    render() {
        const { data: account, errors } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("username", "Username")}
                {this.renderInput("password", "Password", "password")}
                <button className="btn btn-primary">Login</button>
            </form>
        );
    }

    doSubmit() {
        console.log(this.state.data);
    }
}

