// src/components/Login.jsx

import { useContext, useRef, useState, useEffect } from 'react';
import { LogeadoContext } from '../contexts/LogeadoProvider';
import {LoggingButton} from '../components/atoms/LoggingButton';

export const Login = () => {
  const inputRef = useRef(null);
  const { setUserName } = useContext(LogeadoContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const handleInputChange = () => {
      setIsButtonDisabled(!inputRef.current.value.trim());
    };

    const inputElement = inputRef.current;
    inputElement.addEventListener('input', handleInputChange);

    // Cleanup event listener on component unmount
    return () => {
      inputElement.removeEventListener('input', handleInputChange);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-white shadow-lg rounded-lg border border-gray-300">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome</h1>
        <form className="flex flex-col space-y-4 w-full">
          <input
            ref={inputRef}
            id="name"
            type="text"
            placeholder="Enter your name"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
          <LoggingButton inputRef={inputRef} isDisabled={isButtonDisabled} />
        </form>
      </div>
    </main>
  );
};
