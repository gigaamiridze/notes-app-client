import styled from 'styled-components';

const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 30px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 380px) {
    font-size: 26px;
  }
`;

export default HeaderTitle;
