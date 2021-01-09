/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line object-curly-newline
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function SignUpForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required('First Name cannot be empty'),
        lastName: Yup.string().required('Last Name cannot be empty'),
        email: Yup.string()
          .email('Looks like this is not an email')
          .required('Email cannot be empty'),
        password: Yup.string().required('Password cannot be empty'),
      })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.resetForm();
        }, 1000);
      }}
    >
      <Form className="flex flex-col p-0 p-5 mt-5 space-y-4 text-black bg-white rounded-lg shadow-xl lg:p-10 lg:space-y-6">
        <Field name="firstName">
          {({ field, form }) => (
            <input
              {...field}
              className="p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
              placeholder="First Name"
              type="text"
              style={
                form.touched.firstName && form.errors.firstName
                  ? { border: '2px solid var(--primary-red)' }
                  : null
              }
            />
          )}
        </Field>
        <ErrorMessage
          name="firstName"
          component="div"
          className="text-xs italic text-right text-primary-red"
          style={{ marginTop: '0.5rem' }}
        />
        <Field name="lastName">
          {({ field, form }) => (
            <input
              {...field}
              className="p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
              placeholder="Last Name"
              type="text"
              style={
                form.touched.lastName && form.errors.lastName
                  ? { border: '2px solid var(--primary-red)' }
                  : null
              }
            />
          )}
        </Field>
        <ErrorMessage
          name="lastName"
          component="div"
          className="text-xs italic text-right text-primary-red"
          style={{ marginTop: '0.5rem' }}
        />
        <Field name="email">
          {({ field, form }) => (
            <input
              {...field}
              className="p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
              placeholder="Email"
              type="text"
              style={
                form.touched.email && form.errors.email
                  ? { border: '2px solid var(--primary-red)' }
                  : null
              }
            />
          )}
        </Field>
        <ErrorMessage
          name="email"
          component="div"
          className="text-xs italic text-right text-primary-red"
          style={{ marginTop: '0.5rem' }}
        />
        <Field name="password">
          {({ field, form }) => (
            <input
              {...field}
              className="p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
              placeholder="Password"
              type="password"
              style={
                form.touched.password && form.errors.password
                  ? { border: '2px solid var(--primary-red)' }
                  : null
              }
            />
          )}
        </Field>
        <ErrorMessage
          name="password"
          component="div"
          className="text-xs italic text-right text-primary-red"
          style={{ marginTop: '0.5rem' }}
        />
        <button
          type="submit"
          className="py-4 text-sm tracking-wide text-white uppercase rounded-lg shadow-xl outline-none lg:text-base bg-primary-green hover:bg-opacity-75 focus:outline-none "
        >
          Claim your free trial
        </button>
        <div className="text-xs font-medium text-gray-300 ">
          By clicking the button, you are agreeing to our{' '}
          <span className="text-xs font-medium text-primary-red">
            Terms and Services
          </span>
        </div>
      </Form>
    </Formik>
  );
}
