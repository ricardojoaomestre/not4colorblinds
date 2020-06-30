import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(({id, label, ...props},ref) => <>{label && <label htmlFor={id}>{label}</label>}<input ref={ref} {...props} /></>)

Input.propTypes = {
    id: PropTypes.string.isRequired
};

export default Input;