import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/Provider';
import clearCreateContact from '../services/clearCreateContact';
import createContact from '../services/createContact';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const {
    contactsDispatch,
    contactsState: { addContact: { loading, error, data } },
  } = useContext(GlobalContext);

  const history = useHistory();

  const [form, setForm] = useState({});
  const [tempFile, setTempFile] = useState(null);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    createContact(form)(contactsDispatch);
  };

  const onImageChange = (e) => {
    e.persist();
    const fileURL = e.target.files[0];
    setForm({ ...form, pictureURL: fileURL });

    if (fileURL) {
      setTempFile(URL.createObjectURL(fileURL));
    }
  };

  useEffect(() => {
    if (data) {
      history.push('/');
    }
    return () => {
      clearCreateContact()(contactsDispatch);
    };
  }, [data]);

  const formIsHalfFilled = Object.values(form).filter((item) => item && item !== '')?.length > 0 && !data;

  const createContactFormValid = !form.firstName?.length
   || !form.lastName?.length
   || !form.countryCode?.length
   || !form.phoneNumber?.length;

  return {
    form,
    onChange,
    createContactFormValid,
    onSubmit,
    loading,
    error,
    data,
    formIsHalfFilled,
    onImageChange,
    tempFile,
  };
};
