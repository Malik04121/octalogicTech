import React from 'react';
import { Box, Button } from '@mui/material';

const FormNavigation = ({ onNext, onBack, step }) => {
    return (
        <Box 
            mt={4} 
            display="flex" 
            justifyContent={step === 1 || step === 5 ? "center" : "space-between"}
            width="100%"
        >
            {step !== 1 && step !== 5 && (
                <Button
                    variant="contained"
                    onClick={onBack}
                    sx={{ 
                        px: 3, 
                        py: 1, 
                        minWidth: 100,
                        borderRadius: 1,
                        fontSize: '0.875rem',
                    }}
                >
                    Back
                </Button>
            )}
            {step === 1 && (
                <Button
                    variant="contained"
                    onClick={onNext}
                    sx={{ 
                        px: 3, 
                        py: 1, 
                        minWidth: 100,
                        borderRadius: 1,
                        fontSize: '0.875rem',
                        width: '100%'
                    }}
                >
                    Next
                </Button>
            )}
            {step !== 1 && step !== 5 && (
                <Button 
                    variant="contained"
                    onClick={onNext}
                    sx={{ 
                        px: 3, 
                        py: 1, 
                        minWidth: 100,
                        borderRadius: 1,
                        fontSize: '0.875rem',
                    }}
                >
                    Next
                </Button>
            )}
            {step === 5 && (
                <Button
                    variant="contained"
                    onClick={onNext}
                    sx={{ 
                        px: 3, 
                        py: 1, 
                        minWidth: 100,
                        borderRadius: 1,
                        fontSize: '0.875rem',
                        width: '100%'
                    }}
                >
                    Submit
                </Button>
            )}
        </Box>
    );
};

export default FormNavigation;
