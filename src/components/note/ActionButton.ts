import styled, { css } from 'styled-components';

const ActionButton = styled.button`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.colors.main};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 18px;
  font-weight: 600;
  padding: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  @media (max-width: 380px) {
    font-size: 17px;
  }
`;

export default ActionButton;
