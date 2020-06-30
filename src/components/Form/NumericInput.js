import React from 'react';
import Input from './Input';

export default React.forwardRef((props, ref) => <div className="form-element"><Input ref={ref} type="number" {...props} /></div>);