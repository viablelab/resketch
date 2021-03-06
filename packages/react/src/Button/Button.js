import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';

export default function Button(props) {
  const { className, look, size, ...rest } = props;

  return (
    <button
      className={cx(['button', look && `button--${look}`, className])}
      {...rest}
    />
  );
}

Button.displayName = 'Button';
Button.propTypes = {
  look: PropTypes.oneOf(['ghost', 'text']),
};
