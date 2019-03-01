import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function Input(props) {
  const { className, ...rest } = props;

  return <input type="text" className={cx('input', className)} {...rest} />;
}

Input.displayName = 'Input';
Input.propTypes = {
  className: PropTypes.string,
};
