"use client"
// components/PhoneInputWithCountryCode.js
import React from 'react';
import PhoneInput from 'react-phone-number-input';
import Select from 'react-select';
import 'react-phone-number-input/style.css'; // Styles for react-phone-number-input
import countriesList from 'countries-list'; // Import countries-list

const PhoneInputWithCountryCode = ({ value, onChange }) => {
  const [selectedCountry, setSelectedCountry] = React.useState(null);

  // Transform countries object into options for react-select
  const countryOptions = Object.keys(countriesList.countries).map((key) => ({
    value: key,
    label: `${countriesList.countries[key].name} (+${countriesList.countries[key].phone})`,
  }));

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div className="form-group mb-4">
      <label className="required">Your Phone</label>
      <div className="d-flex">
        <Select
          className="country-select"
          options={countryOptions}
          value={selectedCountry}
          onChange={handleCountryChange}
          placeholder="Select country"
        />
        <PhoneInput
          className="form-control ml-2"
          international
          defaultCountry={selectedCountry?.value || 'AE'} // Default country code (AE for United Arab Emirates)
          value={value}
          onChange={onChange} // Directly use the onChange handler passed from the parent
          placeholder="Enter phone number"
        />
      </div>
    </div>
  );
};

export default PhoneInputWithCountryCode;
