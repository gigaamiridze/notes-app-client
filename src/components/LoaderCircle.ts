import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid ${({ theme }) => theme.colors.main};
  border-right: 3px solid transparent;
  animation: ${rotation} 0.8s linear infinite;
  position: absolute;
  top: 50%;
  left: 43%;
`;

export default LoaderCircle;
