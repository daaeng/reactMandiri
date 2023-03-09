import React from 'react'

const Dropdown = (props) => {
    const {value, label} = props;
    return (
        <option value={value}>{label}</option>
    );
};

export default Dropdown;