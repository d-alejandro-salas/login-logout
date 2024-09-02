// src/components/Login.jsx

import { useRef, useState, useEffect } from 'react';
import {LoggingButton} from '../components/atoms/LoggingButton';

export const Login = () => {
  const inputRef = useRef(null);
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
        <h1 className="mb-6">Welcome</h1>
        <form className="flex flex-col space-y-4 w-full">
          <input
            ref={inputRef}
            id="name"
            type="text"
            placeholder="Enter your name"
            className="p-3 text-black border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"/>
          <LoggingButton inputRef={inputRef} isDisabled={isButtonDisabled} />
        </form>
      </div>
    </main>
  );
};
