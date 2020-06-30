import React from 'react';
import {Paragraph} from '../Typography';
import cx from 'classnames';

export default ({value, className, ...props}) => {
    const style = cx('score-value', className, {
        'green': value >= 90,
        'yellow': value < 90 && value >= 50,
        'red': value < 50
    })
    return (
        value ?
        <Paragraph className="score-label">
            Score
            <Paragraph className={style} as="span">{value}</Paragraph>
        </Paragraph>
        : null
    )
}