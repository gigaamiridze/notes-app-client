import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Root, Notes, Note } from '../pages';
import { PageRoutes } from '../constants';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PageRoutes.ROOT} Component={Root}>
      <Route index Component={Notes} />
      <Route path={`${PageRoutes.NOTE}/:id`} Component={Note} />
    </Route>
  )
);
