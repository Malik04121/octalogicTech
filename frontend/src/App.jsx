
import './App.css'
import FormContainer from './component/form_container'
import { FormProvider } from './context/vehicle_context'

function App() {

  return (
    
    <FormProvider>
    <FormContainer />
  </FormProvider>
    
  )
}

export default App
