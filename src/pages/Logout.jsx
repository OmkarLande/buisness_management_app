import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    // Redirect to the login page
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-custColor2 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">You have been logged out.</h2>
        <p className="text-gray-700 mb-6">Please log in again to continue.</p>
        <button
          className="bg-custColor2 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleLoginRedirect}
        >
          Log In Again
        </button>
      </div>
    </div>
  );
};

export default Logout;
