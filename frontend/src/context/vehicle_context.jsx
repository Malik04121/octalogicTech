



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
  const [vehicleModels, setVehicleModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
 
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
    const fetchVehicleModels = async (typeId) => {
      try {
        const response = await axios.get(`${baseUrl}/api/vehicles/${typeId}`); // Replace with your actual API endpoint
        console.log(response,"response after type");
        setVehicleModels(response.data.vehicles);
      } catch (error) {
        console.error('Error fetching vehicle models:', error);
      }
    };
    const submitFormData = async (formData) => {
      try {
        const response = await axios.post(`${baseUrl}/api/bookings`, formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        // Handle the response
        console.log('Response from server:', response.data);
        
        // Optionally, handle any success actions or state updates here
      } catch (error) {
        // Handle errors
        console.error('Error submitting form data:', error);
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
        vehicleModels,
        selectedModel,
        startDate,
        endDate,
        setFirstName,
        setLastName,
        setSelectedWheels,
        setSelectedType,
        setVehicleModels,
        setSelectedModel,
        setStep,
        setStartDate,
        setEndDate,
        fetchVehicleTypes,
        fetchVehicleModels,
        submitFormData
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
