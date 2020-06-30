import React from 'react';
import Input from './Input';

export default React.forwardRef((props, ref) => <Input type="color" ref={ref} {...props} />);