import styled from 'styled-components';

const NotesTitle = styled.h3`
  color: ${({ theme }) => theme.colors.main};
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 380px) {
    font-size: 22px;
  }
`;

export default NotesTitle;
