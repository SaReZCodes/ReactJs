import React, { useEffect } from 'react';
import './Manager.css';

const Manager = (props) => {
    console.log('[manager.js] render ');
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = 'Red';
    }
    if (props.length <= 2) {
        assignedClasses.push('red'); // classes = ['red']
    }
    if (props.length <= 1) {
        assignedClasses.push('bold'); // classes = ['red', 'bold']
    }

    useEffect(() => {
        if (props.length < 3) {
            console.log('[manager.js] useEffect');
            alert('data changed');
        }
    }, [props.length]);


    return (
        <div className={'Manager'}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );

}


export default React.memo(Manager);