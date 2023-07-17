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

  @media (max-width: 380px) {
    padding: 13px 16px;
  }

  h3, p, span {
    font-weight: 600;
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    margin-bottom: 10px;

    @media (max-width: 380px) {
      font-size: 16px;
    }
  }

  p, span {
    font-size: 14px;

    @media (max-width: 380px) {
      font-size: 13px;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.light};
    line-height: 17px;

    span {
      color: ${({ theme }) => theme.colors.gray};
      margin-right: 8px;
    }
  }
`;

export default NotesListItem;
