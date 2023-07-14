import { Outlet } from 'react-router-dom';
import { Header } from '../layouts';
import { CardContainer } from '../components';

function Root() {
  return (
    <CardContainer>
      <Header />
      <Outlet />
    </CardContainer>
  )
}

export default Root;
