import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import useForms from "../../hooks/useForms";

// category: "men's clothing"
// description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day."
// id: 3
// image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
// price: 55.99
// qty: 1
// rating: {rate: 4.7, count: 500}
// title: "Mens Cotton Jacket"

const ProductForm = () => {
  const { handleSubmit, validation } = useForms();

  return (
    <div>
      <h1 className="p-5 text-3xl font-bold text-white">Add new product</h1>
      <Formik initialValues={{ name: "", email: "", password: "" }} validate={(values) => validation(values)} onSubmit={(values, { setSubmitting }) => handleSubmit(values, { setSubmitting })}>
        {({ isSubmitting }) => (
          <Form className="p-3 mx-5 mb-5 text-white bg-gray-700">
            <section>
              <div className="m-2">
                <label htmlFor="productName">Product Name: </label>
                <Field type="text" className="px-2 py-1 bg-transparent border focus-visible:outline-none" name="productName" />
              </div>
              <ErrorMessage className="error-message" name="productName" component="div" />
            </section>
            <section>
              <div className="m-2">
                <label htmlFor="category">Category: </label>
                <Field as="select" name="category" className="px-2 py-1 bg-transparent border focus-visible:outline-none">
                  <option className="text-black" value="men's clothing">
                    men's clothing
                  </option>
                  <option className="text-black" value="women's clothing">
                    women's clothing
                  </option>
                  <option className="text-black" value="jewelery">
                    jewelery
                  </option>
                  <option className="text-black" value="electronics">
                    electronics
                  </option>
                </Field>
              </div>
              <ErrorMessage className="error-message" name="category" component="div" />
            </section>
            <section>
              <div className="m-2">
                <label htmlFor="description">Description: </label>
                <Field type="number" className="px-2 py-1 bg-transparent border focus-visible:outline-none" name="description" />
              </div>
              <ErrorMessage className="error-message" name="description" component="div" />
            </section>
            <section>
              <div className="m-2">
                <label htmlFor="price">Price: </label>
                <Field type="number" className="px-2 py-1 bg-transparent border focus-visible:outline-none" name="price" />
              </div>
              <ErrorMessage className="error-message" name="price" component="div" />
            </section>
            <section>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </section>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
