//  import components here when created
import AboutPage from 'views/About/AboutPage';
import CommiteePage from 'views/Commitee/CommiteePage';

const routes = [
  {
    name: 'About/FAQs',
    path: '/about',
    component: AboutPage
  },
  {
    name: 'Committee',
    path: '/committee',
    component: CommiteePage
  },
  {
    name: 'Content',
    path: '/content',
    component: null
  },
  {
    name: 'Submit',
    path: '/submit',
    component: null,
  },
  {
    name: 'Demo Games',
    path: '/demo-games',
    component: null
  }
];

export default routes;