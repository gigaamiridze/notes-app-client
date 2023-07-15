import styled, { css } from 'styled-components';

const NotesListItem = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid  ${theme.colors.border};
    transition: ${theme.transition};
  `}
  padding: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg};
  }

  h3, p, span {
    font-weight: 600;
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    margin-bottom: 10px;
  }

  p, span {
    font-size: 14px;
  }

  p {
    color: ${({ theme }) => theme.colors.light};

    span {
      color: ${({ theme }) => theme.colors.gray};
      margin-right: 8px;
    }
  }
`;

export default NotesListItem;
