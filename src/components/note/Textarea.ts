import styled, { css } from 'styled-components';

const Textarea = styled.textarea`
  ${({ theme }) => css`
    color: ${theme.colors.light};
    font-family: ${theme.fonts.primary};
  `}
  font-size: 16px; 
  width: 100%;
  height: 70vh;
  background-color: transparent;
  border: none;
  resize: none;
  scrollbar-width: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.light};
  }

  &:active,
  &:focus {
    outline: none;
    border: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Textarea;
