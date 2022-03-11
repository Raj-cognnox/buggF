import React,{useState} from 'react'
import Biography from './MultiSteps/Biography'
import UserDetails from './MultiSteps/UserDetails'
import Welcome from './MultiSteps/Welcome';
var apiUrl = 'https://stagingb.bittez.io/'
const Authenticator = () => {

  const token = localStorage.getItem('token');
  console.log("token in googleAuthImage",token);



  //Steps

  const [activeStep, setActiveStep] = useState(0)

  const getSteps = () => {
    return ["Welcome", "User Details", "Biography"]
  }

  const steps = getSteps()

  //State variables
  

  //Navigates to the next page
  const handleNext = () => {
   
    setActiveStep((nextStep) => nextStep + 1)
  }
  //Navigates to the Previous page
  const handleBack = () => {
  
    setActiveStep((previousStep) => previousStep - 1)
  }

  //Handle form value state on change
  const handleChange = () => {
   
  }
  return (
    <div>
      <div className="col-12 col-lg-4 mx-auto au-white">
      {activeStep === 0 && (
        <Welcome handleChange={handleChange} />
      )}
      {activeStep === 1 && (
        <UserDetails  handleChange={handleChange} />
      )}
      {activeStep === 2 && (
        <Biography  handleChange={handleChange} />
      )}
    

     <div className='text-center mx-auto'>
     <a disabled={activeStep === 0} className="mr-5 btn btn-primary nextBtn " onClick={handleBack} style={activeStep === 2 ? {display: 'none'} : {}} >Back</a>

<a className="ml-5 btn btn-primary nextBtn  " variant="contained" onClick={handleNext} style={activeStep === 2 ? {display: 'none'} : {}} >{}{activeStep === steps.length - 1 ? 'Submit' : 'Next'}</a>
     </div>
    </div>
    </div>
  )
}

export default Authenticator
