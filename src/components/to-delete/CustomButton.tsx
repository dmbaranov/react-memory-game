import React from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from '@material-ui/core/Button';

interface StyledButtonProps extends ButtonProps {
  customBackground: string;
}

const StyledButton = styled(({ customBackground, ...rest }) => (
  <Button {...rest} />
))`
  background: ${props => props.customBackground};
` as React.ComponentType<StyledButtonProps>;

// <StyledButton customBackground='red'>Hello</StyledButton>
