import React from 'react';

export default ({tag, children, ...props}) => {
    const Tag = tag;
    return <Tag {...props}>{children}</Tag>
}