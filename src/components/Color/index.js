import React from 'react';
import PropTypes from 'prop-types';

const format = (num) => `${(num<100 ? (num<10 ? '00' : '0') : '')}${num}`;

const Color = React.memo(({children, isRGB, color, ...rest}) => {
    let c;
    if (isRGB) {
      c = `rgb(${format(color.r)},${format(color.g)},${format(color.b)})`;
    }
    else {
      c = color;
    }
    
    return <div style={{"backgroundColor": c}} {...rest}>{children}</div>
  });

Color.propTypes = {
    isRGB: PropTypes.bool,
    color: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
}

export default Color;