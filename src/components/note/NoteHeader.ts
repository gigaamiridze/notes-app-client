import styled from 'styled-components';

const NoteHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  svg {
    fill: ${({ theme }) => theme.colors.main};
    transform: translateX(-8px);
    font-size: 28px;
    cursor: pointer;
  }
`;

export default NoteHeader;
