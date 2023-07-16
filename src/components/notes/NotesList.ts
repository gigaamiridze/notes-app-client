import styled from 'styled-components';

const NotesList = styled.div`
  height: calc(88vh - 134px);
  margin-top: 16px;
  overflow-y: auto;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 3px;
  }
 
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.main}; 
    border-radius: 10px;
  }

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
