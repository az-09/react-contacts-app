import ContactsContainer from './components/Contacts';
import CreateContactContainer from './components/CreateContact';
import LoginContainer from './components/Login';
import RegisterContainer from './components/Register';

const routes = [
  {
    path: '/auth/register',
    component: RegisterContainer,
    title: 'Register',
  },
  {
    path: '/auth/login',
    component: LoginContainer,
    title: 'Login',
  },
  {
    path: '/',
    component: ContactsContainer,
    title: 'Contacts',
  },
  {
    path: '/contacts/create',
    component: CreateContactContainer,
    title: 'Create Contact',
  },
];

export default routes;
