import React from 'react';
import { ILayoutComponentProps } from './types';
import { LayoutStyles } from './styles';

const Layout: React.FC<ILayoutComponentProps> = ({
  children,
  alignItems,
  alignContent,
  justifyContent
}) => {
  return (
    <LayoutStyles
      alignItems={alignItems}
      justifyContent={justifyContent}
      alignContent={alignContent}
    >
      {children}
    </LayoutStyles>
  );
};

export default Layout;
