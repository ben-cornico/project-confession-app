import React from 'react';
import { useState } from 'react';
import Form from '../components/Form/Form';
import ReCAPTCHA from 'react-google-recaptcha';


function SubmitConfession() {
  const [selecOptionActive, setSelecOptionActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [recaptchaVal, setRecaptchaVal] = useState("");

  return (
    <div>
      
      <ReCAPTCHA
                    sitekey={process.env.REACT_APP_SITE_KEY}
                />

    </div>
  )
}

export default SubmitConfession