import React from 'react';
import {Field, ErrorMessage} from 'formik';

interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  helpText?: string;
  errors: any;
  touched: any;
  required?: boolean;
  autoComplete?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type = 'text',
  placeholder,
  helpText,
  errors,
  touched,
  required = false,
  autoComplete = 'off',
}) => {
  const hasError = errors[name] && touched[name];

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        className={`form-control ${hasError ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="invalid-feedback"
      />
      {helpText && (
        <small className="form-text text-muted">
          {helpText}
        </small>
      )}
    </div>
  );
};

export default FormField;