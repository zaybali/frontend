'use client'; // Add this line to indicate a client component

import React, { useState } from 'react';

// Loan categories and subcategories for home construction
const loanCategories = [
  {
    category: 'Home Construction Loans',
    subcategories: ['Structure', 'Finishing', 'Loan'],
    maxLoan: 1000000, // 10 Lakh PKR
    loanPeriod: 60, // 5 years in months
  },
];

const HomeConstructionLoanComponent = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('Structure');
  const [initialDeposit, setInitialDeposit] = useState<number>(0);
  const [loanPeriod, setLoanPeriod] = useState<number>(12); // Default: 12 months
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [calculatedLoan, setCalculatedLoan] = useState<number>(0);
  const [showLoanDetails, setShowLoanDetails] = useState<boolean>(false);

  // Handle calculation of the loan breakdown
  const calculateLoan = () => {
    const totalLoan = loanCategories[0].maxLoan - initialDeposit;
    setLoanAmount(totalLoan);
    const monthlyPayment = totalLoan / loanPeriod;
    setCalculatedLoan(monthlyPayment);
    setShowLoanDetails(true);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission logic here, such as calling an API to submit the request
    alert('Loan request submitted!');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800">Home Construction Loan Application</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        {/* Loan Category Selection */}
        <div>
          <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">
            Select Subcategory
          </label>
          <select
            id="subcategory"
            name="subcategory"
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {loanCategories[0].subcategories.map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </div>

        {/* Initial Deposit Input */}
        <div>
          <label htmlFor="initialDeposit" className="block text-sm font-medium text-gray-700">
            Initial Deposit (PKR)
          </label>
          <input
            type="number"
            id="initialDeposit"
            name="initialDeposit"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(parseInt(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter deposit amount"
          />
        </div>

        {/* Loan Period Selection */}
        <div>
          <label htmlFor="loanPeriod" className="block text-sm font-medium text-gray-700">
            Loan Period (Months)
          </label>
          <select
            id="loanPeriod"
            name="loanPeriod"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(parseInt(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {[12, 24, 36, 48, 60].map((months) => (
              <option key={months} value={months}>
                {months} months
              </option>
            ))}
          </select>
        </div>

        {/* Calculate Loan Button */}
        <div>
          <button
            type="button"
            onClick={calculateLoan}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Calculate Loan
          </button>
        </div>
      </form>

      {/* Loan Details Display */}
      {showLoanDetails && (
        <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50">
          <h3 className="text-xl font-semibold text-gray-700">Loan Details</h3>
          <p className="mt-2 text-gray-600">Total Loan: PKR {loanAmount.toLocaleString()}</p>
          <p className="mt-1 text-gray-600">Monthly Payment: PKR {calculatedLoan.toFixed(2)}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit Loan Request
        </button>
      </div>
    </div>
  );
};

export default HomeConstructionLoanComponent;
