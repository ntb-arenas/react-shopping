const useForms = () => {
  const validation = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Required";
    }
    if (!values.description) {
      errors.description = "Required";
    }
    if (!values.price) {
      errors.price = "Required";
    }
    if (values.rating.rate > 5) {
      errors.rating = "No more than 5";
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  return {
    validation,
    handleSubmit,
  };
};

export default useForms;
