import { RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './assets';
import { router } from './routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}

export default App;
