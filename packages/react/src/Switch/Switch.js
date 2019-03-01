import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';

export default function Switch(props) {
  const {
    checked,
    children,
    className,
    disabled,
    id,
    inputClassName,
    inputProps,
    labelClassName,
    labelProps,
    name,
    value,
    ...rest
  } = props;

  return (
    <label
      {...rest}
      className={cx('switch', disabled && 'switch--disabled', className)}
    >
      <input
        {...inputProps}
        type="checkbox"
        checked={checked}
        className={cx('switch__input', inputClassName)}
        disabled={disabled}
        id={id}
        name={name}
        value={value}
      />
      <span {...labelProps} className={cx('switch__label', labelClassName)}>
        {children}
      </span>
    </label>
  );
}

Switch.displayName = 'Switch';
Switch.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inputClassName: PropTypes.string,
  inputProps: PropTypes.object,
  labelClassName: PropTypes.string,
  labelProps: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.string,
};
Switch.defaultProps = {
  disabled: false,
  inputProps: {},
  labelProps: {},
};
