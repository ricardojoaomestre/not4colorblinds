import React from 'react';

export default React.forwardRef(({children,...props}, ref) => <form ref={ref} {...props}>{children}</form>)

