// FormNavigation.jsx
import React from 'react';
import { Box, Button } from '@mui/material';

const FormNavigation = ({ onNext, onBack, canProceed }) => (
  <Box mt={4} 
  display="flex" 
    justifyContent="space-between"
    width="100%"
  >
    <Button
    variant="contained"
      onClick={onBack}
      disabled={canProceed === 1}
    //   color="secondary"
      sx={{ 
        px: 3, 
        py: 1, 
        minWidth: 100,
        borderRadius: 1,
        fontSize: '0.875rem',
      }}
    //   margin={2} 
    //  variant="contained" onClick={onBack} disabled={canProceed === 1}
    >
      Back
    </Button>
    <Button 
     variant="contained"
     onClick={onNext}
     disabled={canProceed === 1}
    //  color="secondary"
     sx={{ 
       px: 3, 
       py: 1, 
       minWidth: 100,
       borderRadius: 1,
       fontSize: '0.875rem',
     }}
    //  variant="contained" onClick={onNext}
     >
      Next
    </Button>
  </Box>
);

export default FormNavigation;
