import styled from 'styled-components';

const CardContainer = styled.div`
  width: 480px;
  height: 88vh;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  position: relative;

  #add-btn {
    position: absolute;
    bottom: 24px;
    right: 16px;
  }
`;

export default CardContainer;
