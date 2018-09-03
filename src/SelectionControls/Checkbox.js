import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function Checkbox(props) {
  const { children, className, id, ...rest } = props;

  return (
    <span className={cx('checkbox', className)}>
      <input {...rest} id={id} type="checkbox" />
      <label htmlFor={id}>{children}</label>
    </span>
  );
}

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  children: PropTypes.node,
  checked: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
};
Checkbox.defaultProps = {
  checked: false,
};
