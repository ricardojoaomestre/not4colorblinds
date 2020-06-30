import React from 'react';

export default ({as, children, props}) => {
    const Tag = as || 'p';
    
    return <Tag {...props}>{children}</Tag>
}