import React, { useReducer, ChangeEvent } from 'react';
import emailjs from 'emailjs-com';

import './_FormSubmit.scss';

interface State {
  guideName: string;
  source: string;
  type: string;
}

const FormSubmit = () => {
  const initialState = {
    guideName: '',
    source: '',
    type: 'Video',
  };
  const stateReducer = (state: State, newState: any) => ({ ...state, ...newState });

  const [userInput, setUserInput] = useReducer(stateReducer, initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setUserInput({ [name]: value });
  };

  const sendEmail = (): any => {
    // TODO: Require authentication to submit guides
    // TODO: Add rate limiting
    // const message = (
    //   <div>
    //     <h1>Guide details</h1> <div>Name: {userInput.guideName}</div>
    //     <div>URL: {userInput.url}</div> <div>Type: {userInput.type}</div>
    //     <button>Approve</button>
    //   </div>
    // );
    // const templateParams: any = {
    //   // fromName: user,
    //   messageHtml: message,
    // };

    // emailjs
    //   .send('aoe2', 'guideSubmission', templateParams, process.env.EMAILJS_USER_ID)
    //   .then((res: any) => {
    // resetForm();
    //      console.log(res, 'Success');
    //   })
    //   .catch((err: any) => console.error(err));

    /* --------------------------------------------------------------------- */
    const { guideName, source, type } = userInput;
    console.log(
      JSON.stringify({
        guideName,
        source,
        type,
      })
    );
    fetch('/api/guide', {
      method: 'POST',
      body: JSON.stringify({
        name: guideName,
        source,
        type,
      }),
    })
      .then(() => {
        resetForm();
      })
      .catch((err) => console.error(err));
  };

  const resetForm = (): void => {
    setUserInput({
      guideName: '',
      url: '',
      type: '',
    });
  };

  return (
    <div className='strategy__form'>
      <h2>Submit a guide? </h2>
      <form action='submit'>
        <label htmlFor='Name'>Guide name: </label>
        <input type='text' name='guideName' onChange={handleChange} />
        <label htmlFor='URL'>URL: </label>
        <input type='text' name='source' onChange={handleChange} />
        <label htmlFor='Type'>Type: </label>
        <select
          name='type'
          placeholder='Please enter the URL here'
          className='strategy__guide-type'
          onChange={handleChange}
        >
          <option value='Video'>Video</option>
          <option value='Image'>Image</option>
          <option value='Other'>Other</option>
        </select>
        <input
          type='button'
          name='submit'
          value='Submit'
          className='strategy__submit'
          onClick={sendEmail}
        />
      </form>
    </div>
  );
};

export default FormSubmit;
