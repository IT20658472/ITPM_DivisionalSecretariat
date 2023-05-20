import React, { useState } from 'react';

const RequestOverview = () => {
  // Dummy data for customer requests
  const customerRequests = [
    {
      id: 1,
      customerName: 'John Doe',
      requestType: 'New Project',
      status: 'Pending',
      details: 'Lorem ipsum dolor sit amet',
      address: '123 Main St, City',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      requestType: 'Support',
      status: 'In Progress',
      details: 'Consectetur adipiscing elit',
      address: '456 Park Ave, Town',
    },
    // Add more customer request objects as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRequests = customerRequests.filter((request) =>
    request.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex">
        <div className="bg-gray-800 text-white w-1/5">
          <h1 className="text-2xl font-bold p-4">Dashboard</h1>
          <ul className="text-lg">
            <li className="p-4 hover:bg-gray-700">Customer Management</li>
            <li className="p-4 hover:bg-gray-700">Request Project Management</li>
            <li className="p-4 hover:bg-gray-700">Tender Project Management</li>
            <li className="p-4 hover:bg-gray-700">Ongoing Project Management</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center p-8 w-4/5">
          <div>
            
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Request Overview</h3>
            <div className="border p-4">
              <h4 className="text-lg font-bold">John Doe</h4>
              <p className="text-gray-600">Type: New Project</p>
              <p className="text-gray-600">Status: Pending</p>
              <div className="mt-4">
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                 
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                 
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Customer Requests</h3>
            <input
              type="text"
              placeholder="Search by customer name"
              className="border p-2"
              value={searchTerm}
              onChange={handleSearch}
            />
            <table className="mt-4 w-full">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-200">Name</th>
                  <th className="py-2 px-4 bg-gray-200">Details</th>
                  <th className="py-2 px-4 bg-gray-200">Address</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((request) => (
                  <tr key={request.id}>
                    <td className="py-2 px-4 border">{request.customerName}</td>
                    <td className="py-2 px-4 border">{request.details}</td>
                    <td className="py-2 px-4 border">{request.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestOverview;