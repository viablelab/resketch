import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function Select(props) {
  const {
    block,
    children,
    className,
    disabled,
    iconClassName,
    iconProps,
    inputClassName,
    inputProps,
    value,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={cx([
        'select',
        block && 'select--block',
        disabled && 'select--disabled',
        className,
      ])}
    >
      <select
        {...inputProps}
        className={cx('select__select-input', inputClassName)}
        disabled={disabled}
        value={value}
      >
        {children}
      </select>
      <svg
        {...iconProps}
        className={cx('select__icon', iconClassName)}
        viewBox="0 0 10 12"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5,12 L10,7 L0,7 L5,12 Z M5,0 L10,5 L0,5 L5,0 Z"
          id="Arrows"
          fillRule="nonzero"
        />
      </svg>
    </div>
  );
}

Select.displayName = 'Select';
Select.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  iconClassName: PropTypes.string,
  iconProps: PropTypes.object,
  inputClassName: PropTypes.string,
  inputProps: PropTypes.object,
  value: PropTypes.string,
};
Select.defaultProps = {
  block: false,
  disabled: false,
  iconProps: {},
  inputProps: {},
};
