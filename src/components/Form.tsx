import React from 'react';
import {Formik, Form as FormikForm} from 'formik';
import FormField from './FormField';
import SubmitButton from './SubmitButton';
import ValidationProgress from './ValidationProgress';
import {validationSchema} from './FormValidation';
import {FormData, initialValues} from './types';

const Form: React.FC = () => {
  const handleSubmit = (values: FormData, {setSubmitting, resetForm}: any) => {
    console.log('Form data:', values);
    setTimeout(() => {
      alert('Дякую!\nВаша форма успішно відправлена.');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title mb-0">Реєстраційна форма</h3>
            </div>
            <div className="card-body">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnMount={true}
                validateOnChange={true}
                validateOnBlur={true}
              >
                {({ isSubmitting, errors, touched, isValid, values }) => {
                  const fieldNames = ['name', 'email', 'password', 'city', 'birthDate', 'phone'];
                  const validFields = fieldNames.filter(field => {
                    const hasValue = values[field] && values[field].toString().trim() !== '';
                    const hasNoError = !errors[field];
                    return hasValue && hasNoError;
                  }).length;
                  const isFormReallyValid = isValid && validFields === fieldNames.length;

                  return (
                  <FormikForm autoComplete="off">
                    <FormField
                      name="name"
                      label="Ім'я"
                      type="text"
                      placeholder="Введіть ваше ім'я"
                      errors={errors}
                      touched={touched}
                      required
                    />

                    <FormField
                      name="email"
                      label="Електронна пошта"
                      type="email"
                      placeholder="example@gmail.com"
                      errors={errors}
                      touched={touched}
                      required
                    />

                    <FormField
                      name="password"
                      label="Пароль"
                      type="password"
                      placeholder="Введіть пароль"
                      helpText="Пароль повинен містити принаймні 8 символів, включаючи велику та малу літери та цифру"
                      errors={errors}
                      touched={touched}
                      required
                    />

                    <FormField
                      name="city"
                      label="Місто"
                      type="text"
                      placeholder="Введіть ваше місто"
                      errors={errors}
                      touched={touched}
                      required
                    />

                    <FormField
                      name="birthDate"
                      label="Дата народження"
                      type="date"
                      errors={errors}
                      touched={touched}
                      required
                    />

                    <FormField
                      name="phone"
                      label="Номер телефону"
                      type="tel"
                      placeholder="+380501234567"
                      helpText="Формат: +380XXXXXXXXX або 0XXXXXXXXX"
                      errors={errors}
                      touched={touched}
                      required
                    />

                    <ValidationProgress 
                      errors={errors} 
                      touched={touched} 
                      isValid={isValid} 
                      values={values}
                    />

                    <SubmitButton isSubmitting={isSubmitting} isValid={isFormReallyValid} />
                  </FormikForm>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;