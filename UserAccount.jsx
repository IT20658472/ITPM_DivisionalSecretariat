import React from 'react';

const UserAccount = () => {
  const handleUpdate = () => {
    // Logic for updating user account
  };

  const handleDelete = () => {
    // Logic for deleting user account
  };

  const handleViewRequest = () => {
    // Logic for viewing requests
  };

  const handleViewTender = () => {
    // Logic for viewing tenders
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex justify-center items-center p-8">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md">
          <div className="flex justify-end mb-4">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleViewRequest}
            >
              View Request
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleViewTender}
            >
              View Tender
            </button>
          </div>
          <h2 className="text-3xl font-bold mb-4">User Account</h2>
          <div className="border-b mb-6"></div>
          <div className="mb-6">
            <p className="text-lg">
              <span className="font-bold">Username:</span> Dilini 
            </p>
            <p className="text-lg">
              <span className="font-bold">Email:</span> dil@example.com
            </p>
            <p className="text-lg">
              <span className="font-bold">Contact number:</span> 078-XXXXXXX
            </p>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;