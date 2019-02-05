import * as React from 'react';

export function useStateForField(defaultValue) {
    const [getField, setField] = React.useState(defaultValue);

    const changeHandler = ({ target }) => {
        const { value } = target;
        setField(value);
    };

    return [getField, changeHandler, setField];
}