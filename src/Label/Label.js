import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function Label(props) {
  const { className, emphasized, ...rest } = props;

  return (
    <label
      {...rest}
      className={cx('label', emphasized && 'label--emphasized', className)}
    />
  );
}

Label.displayName = 'Label';
Label.propTypes = {
  className: PropTypes.string,
  emphasized: PropTypes.bool,
};
Label.defaultProps = {
  emphasized: false,
};
