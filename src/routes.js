import React from 'react';

import Contacts from './components/Contacts';
// import CreateContact from './components/CreateContacts';

import Login from './components/Login';
import Register from './components/Register';

const CreateContact = React.lazy(() => import('./components/CreateContacts'));

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
    path: '/contacts/create',
    component: CreateContact,
    title: 'Create Contact',
    needsAuth: true,
  },
  {
    path: '/',
    component: Contacts,
    title: 'Contacts',
    needsAuth: true,
  },

];

export default routes;
