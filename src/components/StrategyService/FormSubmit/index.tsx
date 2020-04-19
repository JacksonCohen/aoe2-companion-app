import React from 'react';

import './_FormSubmit.scss';

const FormSubmit = () => {
  return (
    <div className='strategy__submit'>
      <p>Submit a guide? </p>
      <input type='text' placeholder='Please enter the URL here' />
      <select name='' className='strategy__guide-type'>
        <option value='video'>Video</option>
        <option value='image'>Image</option>
        <option value='other'>Other</option>
      </select>
    </div>
  );
};

export default FormSubmit;
