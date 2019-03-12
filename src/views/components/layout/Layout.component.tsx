import React from 'react';
import { ILayoutComponentProps } from './types';
import { LayoutStyles, ContentBox } from './styles';

const Layout: React.FC<ILayoutComponentProps> = ({
  children,
  alignItems,
  alignContent,
  justifyContent,
  direction
}) => {
  return (
    <LayoutStyles>
      <ContentBox
        alignItems={alignItems}
        justifyContent={justifyContent}
        alignContent={alignContent}
        direction={direction}
      >
        {children}
      </ContentBox>
    </LayoutStyles>
  );
};

export default Layout;
