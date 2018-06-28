import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CollapsibleContainer = styled.div`
  border-top: 1px solid silver;

  &:last-of-type {
    border-bottom: 1px solid silver;
  }
`;

const CollapsibleHeader = styled.button`
  background-color: transparent;
  border-style: none;
  border-width: 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &:focus {
    outline-style: none;
    outline-width: 0;
  }
`;

const CollapsibleHeaderTitle = styled.p`
  margin: 0;
`;

const CollapsibleHeaderIcon = styled.div`
  width: 6px;
  height: 6px;
  border-top: 2px solid steelblue;
  border-right: 2px solid steelblue;
  transform: ${props => (!props.isOpen ? 'rotate(45deg)' : 'rotate(135deg)')};
  transition: transform 195ms ease;

  ${CollapsibleHeader}:focus & {
    ${'' /* TODO Add outline on focus */};
  }
`;

const CollapsibleBody = styled.div`
  padding: 0.5rem;
`;

export default class Collapsible extends Component {
  constructor(props) {
    super(props);

    this.toggleOpen = () =>
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }));

    this.state = {
      isOpen: props.initiallyOpen,
    };
  }

  render() {
    const { children, title, ...rest } = this.props;
    const { isOpen } = this.state;

    return (
      <CollapsibleContainer {...rest}>
        <CollapsibleHeader onClick={this.toggleOpen}>
          <CollapsibleHeaderTitle>{title}</CollapsibleHeaderTitle>
          <CollapsibleHeaderIcon isOpen={isOpen} />
        </CollapsibleHeader>
        {isOpen && <CollapsibleBody>{children}</CollapsibleBody>}
      </CollapsibleContainer>
    );
  }
}

CollapsibleContainer.displayName = 'CollapsibleContainer';
CollapsibleHeader.displayName = 'CollapsibleHeader';
CollapsibleHeaderTitle.displayName = 'CollapsibleHeaderTitle';
CollapsibleHeaderIcon.displayName = 'CollapsibleHeaderIcon';
CollapsibleBody.displayName = 'CollapsibleBody';

Collapsible.displayName = 'Collapsible';
Collapsible.propTypes = {
  initiallyOpen: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
Collapsible.defaultProps = {
  initiallyOpen: false,
};
