import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function Checkbox(props) {
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
      className={cx('checkbox', disabled && 'checkbox--disabled', className)}
    >
      <input
        {...inputProps}
        type="checkbox"
        checked={checked}
        className={cx('checkbox__input', inputClassName)}
        disabled={disabled}
        id={id}
        name={name}
        value={value}
      />
      <span {...labelProps} className={cx('checkbox__label', labelClassName)}>
        {children}
      </span>
    </label>
  );
}

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
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
Checkbox.defaultProps = {
  disabled: false,
  inputProps: {},
  labelProps: {},
};
