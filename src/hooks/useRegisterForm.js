import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import register from '../services/register';
import { GlobalContext } from '../context/Provider';

export default () => {
  const { authDispatch, authState: { loading, error, data } } = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const history = useHistory();

  useEffect(() => {
    if (error) {
      Object.entries(error).forEach(([name, value]) => {
        setFieldErrors({ ...fieldErrors, [name]: value[0] });
      });
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      history.push('/auth/login');
    }
  }, [data]);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const registerFormValid = !form.username?.length
        || !form.firstname?.length
        || !form.lastname?.length
        || !form.email?.length
        || !form.password?.length;

  const onSubmit = () => {
    setFieldErrors({});
    register(form)(authDispatch);
  };

  return {
    form, onChange, registerFormValid, onSubmit, loading, fieldErrors,
  };
};
