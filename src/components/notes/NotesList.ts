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

    @media (max-width: 380px) {
      width: 2px;
    }
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

  @media (max-width: 768px) {
    height: calc(88vh - 132px);
  }

  @media (max-width: 380px) {
    height: calc(88vh - 122px);
    margin-top: 10px;
  }
`;

export default NotesList;
