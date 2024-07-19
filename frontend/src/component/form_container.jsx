import { useContext, useState } from "react";
import FormNavigation from "./form_navigation";
import NameInput from "./name_input";
import { Box } from "@mui/material";
import WheelsRadio from "./wheel_radio";
import VehicleTypeRadio from "./vehicle_type";
import { FormContext } from "../context/vehicle_context";


const FormContainer = () => {
    const {
        firstName,
        lastName,
        selectedWheels,
        vehicleTypes,
        selectedType,
        vehicleModels,
        selectedModel,
        startDate,
        endDate,
        step,
        setFirstName,
        setLastName,
        setSelectedWheels,
        setSelectedType,
        setSelectedModel,
        setStartDate,
        setEndDate,
        setStep,
        fetchVehicleModels,
        fetchVehicleTypes
      } = useContext(FormContext);


    // const [step, setStep] = useState(1);
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
//   const [selectedWheels, setSelectedWheels] = useState('');


    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleSelectWheels = async(value) => {
        setSelectedWheels(value);
        await fetchVehicleTypes(value)
      };

      const handleSelectType = async (id) => {
        setSelectedType(id);
      };

    const handleNext = () => {
        if (step === 1 && firstName && lastName) {
            setStep(step + 1);

        }
        else if (step === 2 && selectedWheels) {
            setStep(step + 1);
          }
          else if (step === 3 && selectedType) {
             

            if (vehicleModels.length > 0) {
              setStep(step + 1);
            }
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
                case 2:
                    return <WheelsRadio selectedWheels={selectedWheels} onSelectWheels={handleSelectWheels} />;
                    case 3:
        return <VehicleTypeRadio vehicleTypes={vehicleTypes} selectedType={selectedType} onSelectType={handleSelectType} />;
                default:
                return null;
        }
    };

    return (

        <Box width={500} p={5}
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
            <FormNavigation onNext={handleNext} onBack={handleBack} step={step}  />
        </Box>
    )

}
export default FormContainer
