import Contacts from './components/Contacts';
import CreateContact from './components/CreateContact';
import Login from './components/Login';
import Register from './components/Register';

const routes = [
  {
    path: '/auth/register',
    component: Register,
    title: 'Register',
    needsAuth: false,
  },
  {
    path: '/auth/login',
    component: Login,
    title: 'Login',
    needsAuth: false,
  },
  {
    path: '/',
    component: Contacts,
    title: 'Contacts',
    needsAuth: true,
  },
  {
    path: '/contacts/create',
    component: CreateContact,
    title: 'Create Contact',
    needsAuth: true,
  },
];

export default routes;
