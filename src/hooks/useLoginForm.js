import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import login from '../services/login';
import { GlobalContext } from '../context/Provider';

export default () => {
  const { authDispatch, authState: { loading, error, data } } = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const history = useHistory();

  useEffect(() => {
    // if no localStorage.token, endless loop when log out
    if (localStorage.token && data && data.user) {
      history.push('/');
    }
  }, [data]);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const loginFormValid = !form.username?.length || !form.password?.length;

  const onSubmit = () => {
    login(form)(authDispatch);
  };

  return {
    form, onChange, loginFormValid, onSubmit, loading, error,
  };
};
