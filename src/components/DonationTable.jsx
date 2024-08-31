import React from 'react';
import NavButton from './NavButton';

const DonationTable = () => {
  const donations = [
    { id: 1, donor: 'Ram bhav', amount: 'ETH 100', project: 'Water sahti', date: '2024-08-31' },
    { id: 2, donor: 'Sam bhav', amount: 'ETH 250', project: 'School sahti', date: '2024-08-30' },
  ];

  return (
    <div className='flex w-screen h-screen'>
      <NavButton/>
    <div className="bg-white p-6 rounded-lg w-screen shadow-md">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Donor</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Project</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.id}>
              <td className="border px-4 py-2">{donation.donor}</td>
              <td className="border px-4 py-2">{donation.amount}</td>
              <td className="border px-4 py-2">{donation.project}</td>
              <td className="border px-4 py-2">{donation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DonationTable;
