import { useState } from "react";
import FormNavigation from "./form_navigation";
import NameInput from "./name_input";
import { Box } from "@mui/material";


const FormContainer = () => {
    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleNext = () => {
    if (step === 1 && firstName && lastName) {
      setStep(step + 1);

    }
    else {
        alert('Please fill out all fields before proceeding.');
      }
}
const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };


    const renderStepContent = () => {
        switch (step) {
          case 1:
            return <NameInput firstName={firstName} lastName={lastName} onFirstNameChange={handleFirstNameChange} onLastNameChange={handleLastNameChange} />;
          default:
            return null;
        }
      };

return(

    <Box width={500}  p={5}
    bgcolor="#f0f0f0"
    borderRadius={2}
    boxShadow={3}
    // display="grid"
     display="flex"
            flexDirection="column"
    
    alignItems="center"
    justifyContent="center"
    m="auto"
    mt={5}
   
   
  >
    <h2>Booking Form - Step {step}</h2>
    {renderStepContent()}
    <FormNavigation onNext={handleNext} onBack={handleBack} canProceed={step === 1 || step === 2 || step === 3 || step === 4 || step === 5} />
  </Box>
    )

}
export default FormContainer
