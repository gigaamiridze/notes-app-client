import styled from 'styled-components';

const NoteHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  a {
    color: ${({ theme }) => theme.colors.main};
    font-size: 28px;
    height: 28px;

    svg {
      transform: translateX(-8px);
    }
  }
`;

export default NoteHeader;
