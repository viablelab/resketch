import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function Radio(props) {
  const {
    children,
    className,
    disabled,
    id,
    inputProps,
    name,
    ...rest
  } = props;

  return (
    <div className={cx('radio', className)} {...rest}>
      <input
        {...inputProps}
        disabled={disabled}
        type="radio"
        id={id}
        name={name}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}

Radio.displayName = 'Radio';
Radio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  name: PropTypes.string.isRequired,
};
Radio.defaultProps = {
  disabled: false,
  inputProps: {},
};
