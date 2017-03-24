import App from './app';
import ToursPage from './pages/tours';

export const paths = {
  ROOT: '/',
  TOURS: '/'
};


export const getRoutes = () => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [
      {
        indexRoute: {
          component: ToursPage
        }
      }
    ]
  };
};
