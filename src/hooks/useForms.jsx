const useForms = () => {
  const validation = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Obrigatório";
    }
    if (!/^[a-zA-Z]{5,10}$/i.test(values.name)) {
      errors.name = "Não cumpre a regex";
    }
    if (!values.email) {
      errors.email = "Obrigatório";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Endereço de email inválido";
    }
    if (values.password.length < 8) {
      errors.password = "A password deve ter no mínimo 8 caracteres";
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return {
    validation,
    handleSubmit,
  };
};

export default useForms;
