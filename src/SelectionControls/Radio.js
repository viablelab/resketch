import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function Radio(props) {
  const { children, className, id, ...rest } = props;

  return (
    <span className={cx('radio', className)}>
      <input {...rest} id={id} type="radio" />
      <label htmlFor={id}>{children}</label>
    </span>
  );
}

Radio.displayName = 'Radio';
Radio.propTypes = {
  children: PropTypes.node,
  checked: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
};
Radio.defaultProps = {
  checked: false,
};
