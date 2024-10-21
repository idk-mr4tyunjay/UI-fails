import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [phoneDigits, setPhoneDigits] = useState<string[]>(Array(10).fill(""));

  const handleDigitChange = (index: number, value: string) => {
    const updatedDigits = [...phoneDigits];
    updatedDigits[index] = value;
    setPhoneDigits(updatedDigits);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = phoneDigits.join("");
    alert(`Phone Number: ${phoneNumber}`);
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex justify-center items-center">
      <div className="w-full max-w-4xl p-9 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-yellow-700 mb-6">
          Contact Us (Mobile No)
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-2 justify-center mb-4">
            {phoneDigits.map((digit, index) => (
              <div key={index} className="flex flex-col items-center">
                <label className="text-xs mb-1">Digit {index + 1}</label>
                <select
                  value={digit}
                  onChange={(e) => handleDigitChange(index, e.target.value)}
                  className="w-16 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">--</option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
