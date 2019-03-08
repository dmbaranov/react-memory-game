import styled from 'styled-components';

export const TextLine: any = styled.div`
  width: 100%;
  padding: 10px 0;
  font-size: ${(props: any) => (props.large ? '40px' : '20px')};
  text-align: center;
`;
