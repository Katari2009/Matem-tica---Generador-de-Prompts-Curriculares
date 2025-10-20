
import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-red-900/50 border-2 border-red-500 text-red-300 px-6 py-4 rounded-lg shadow-lg max-w-md text-center">
        <h3 className="font-bold text-lg mb-2">¡Ups! Algo salió mal</h3>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
