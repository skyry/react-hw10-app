import React from 'react';
import {Field} from 'formik';

interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  helpText?: string;
  errors: any;
  touched: any;
  values: any;
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
  values,
  required = false,
  autoComplete = 'off',
}) => {

  const hasError = errors[name];
  const hasValue = values[name] && values[name].toString().trim() !== '';
  const isValid = hasValue && !hasError;

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        className={`form-control ${hasError ? 'is-invalid' : isValid ? 'is-valid' : ''}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      {errors[name] && (
        <div className="invalid-feedback d-block">
          {errors[name]}
        </div>
      )}
      {helpText && (
        <small className="form-text text-muted">
          {helpText}
        </small>
      )}
    </div>
  );
};

export default FormField;