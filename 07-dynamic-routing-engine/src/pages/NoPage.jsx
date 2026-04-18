import React from 'react';

const NoPage = () =>
{
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-center">
      <h1 className="text-5xl font-extrabold text-red-600">404</h1>
      <p className="text-xl text-gray-700 mt-4">Oops! Page not found.</p>
    </div>
  );
};

export default NoPage;
