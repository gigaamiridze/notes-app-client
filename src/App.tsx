import { RouterProvider } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { GlobalStyles } from './assets';
import { router } from './routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Helmet>
        <link 
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&display=swap'
        />
      </Helmet>
    </>
  )
}

export default App;
