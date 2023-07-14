import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.lighter};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 7px 7px 0 0;
  padding: 16px;
`;

export default HeaderContainer;
