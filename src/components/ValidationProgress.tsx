import React from 'react';

interface ValidationProgressProps {
  errors: any;
  touched: any;
  isValid: boolean;
  values: any;
}

const ValidationProgress: React.FC<ValidationProgressProps> = ({errors, touched, isValid, values}) => {
  const fieldNames = ['name', 'email', 'password', 'city', 'birthDate', 'phone'];
  
  const validFields = fieldNames.filter(field => {
    const hasValue = values[field] && values[field].toString().trim() !== '';
    const isTouched = touched[field];
    const hasNoError = !errors[field];
    return hasValue && isTouched && hasNoError;
  }).length;
  
  const totalFields = fieldNames.length;
  const progressPercentage = (validFields / totalFields) * 100;

  const isFormReallyValid = isValid && validFields === totalFields;

  if (isFormReallyValid) {
    return (
      <div className="alert alert-success mb-3" role="alert">
        <i className="bi bi-check-circle-fill me-2"></i>
        Усі поля заповнені вірно! Ви можете відправити форму.
      </div>
    );
  }

  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <small className="text-muted">Прогрес заповнення форми:</small>
        <small className="text-muted">{validFields}/{totalFields} полів</small>
      </div>
      <div className="progress" style={{ height: '8px' }}>
        <div
          className={`progress-bar ${progressPercentage === 100 ? 'bg-success' : 'bg-primary'}`}
          role="progressbar"
          style={{width: `${progressPercentage}%`}}
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      {progressPercentage < 100 && (
        <small className="text-muted mt-1 d-block">
          Заповніть усі поля, щоб активувати відправку
        </small>
      )}
    </div>
  );
};

export default ValidationProgress;
