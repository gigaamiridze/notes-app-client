import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <header>Header</header>
      <Outlet />
    </>
  )
}

export default Root;
