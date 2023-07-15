import styled from 'styled-components';

const NotesList = styled.div`
  margin: 16px 0;
  overflow-y: auto;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;

  a {
    &:last-child {
      div {
        border-bottom: 0;
        border-radius: 0 0 7px 7px;
      }
    }
  }
`;

export default NotesList;
