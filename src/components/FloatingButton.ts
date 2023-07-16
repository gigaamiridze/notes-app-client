import styled from 'styled-components';

const FloatingButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.main};
  outline: none;
  border: none;
  border-radius: 50%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.bg};
  }
`;

export default FloatingButton;
