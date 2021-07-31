import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import login from '../context/actions/login';
import { GlobalContext } from '../context/Provider';

export default () => {
  const { authDispatch, authState: { loading, error, data } } = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (data && data.user) {
      history.push('/');
    }
  });

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const loginFormValid = !form.username?.length || !form.password?.length;

  const onSubmit = () => {
    // register(form)(authDispatch);
    login(form)(authDispatch);
  };

  return {
    form, onChange, loginFormValid, onSubmit, loading, error,
  };
};
