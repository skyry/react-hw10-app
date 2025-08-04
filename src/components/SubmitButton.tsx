import React from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
  isValid: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({isSubmitting, isValid}) => {
  return (
    <div className="d-grid gap-2">
      <button
        type="submit"
        className="btn btn-primary btn-lg"
        disabled={isSubmitting || !isValid}
      >
        {isSubmitting ? (
          <>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
            Обробка даних...
          </>
        ) : !isValid ? (
          'Заповніть усі поля'
        ) : (
          'Відправити'
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
