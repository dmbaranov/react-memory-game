import React from 'react';
import { ILayoutComponentProps } from './types';
import { LayoutStyles } from './styles';

const Layout: React.FC<ILayoutComponentProps> = ({
  children,
  alignItems,
  justifyContent
}) => {
  return (
    <LayoutStyles alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </LayoutStyles>
  );
};

export default Layout;
