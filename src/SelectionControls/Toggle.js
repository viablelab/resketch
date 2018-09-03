import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function Toggle(props) {
  const { className, id, toggled, ...rest } = props;

  return (
    <label className={cx('toggle', className)} htmlFor={id}>
      <input {...rest} checked={toggled} id={id} type="checkbox" />
      <span className="toggle-switch" />
    </label>
  );
}

Toggle.displayName = 'Toggle';
Toggle.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  toggled: PropTypes.bool,
};
Toggle.defaultProps = {
  toggled: false,
};
