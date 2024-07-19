



// FormContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedWheels, setSelectedWheels] = useState('');
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
 
  const [step, setStep] = useState(1);
 
  const baseUrl=import.meta.env.VITE_BASE_URL;
 

  // useEffect(() => {
    const fetchVehicleTypes = async (category) => {
      try {
        console.log("inside fetch",category);
        const response = await axios.get(`${baseUrl}/api/vehicleType/${category}`); // Replace with your actual API endpoint
       console.log(response,"data")
        setVehicleTypes(response.data.vehicleTypes);
      } catch (error) {
        console.error('Error fetching vehicle types:', error);
      }
    };

  return (
    <FormContext.Provider
      value={{
        firstName,
        lastName,
        selectedWheels,
        vehicleTypes,
        selectedType,
        step,
        setFirstName,
        setLastName,
        setSelectedWheels,
        setSelectedType,
        setStep,
        fetchVehicleTypes
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
