import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function Radio(props) {
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
      className={cx('radio', disabled && 'radio--disabled', className)}
    >
      <input
        {...inputProps}
        type="radio"
        checked={checked}
        className={cx('radio__input', inputClassName)}
        disabled={disabled}
        id={id}
        name={name}
        value={value}
      />
      <span {...labelProps} className={cx('radio__label', labelClassName)}>
        {children}
      </span>
    </label>
  );
}

Radio.displayName = 'Radio';
Radio.propTypes = {
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
Radio.defaultProps = {
  disabled: false,
  inputProps: {},
  labelProps: {},
};
