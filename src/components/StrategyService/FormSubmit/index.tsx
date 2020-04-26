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

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = event.target;

    setUserInput({ [name]: value });
  };

  const sendEmail = (): any => {
    // TODO: Require authentication to submit guides
    // TODO: Add rate limiting
    // const message = (
    //   <>
    //     <h1>Guide details</h1>
    //     <form action='https://jacksoncohen.dev/api/guide' method='post'>
    //       <div className='guide-info'>
    //         <div>
    //           <label>Name:</label>
    //           <input name='guideName' id='guideName' value={userInput.guideName} />
    //         </div>
    //         <div>
    //           <label>URL:</label>
    //           <input name='url' id='url' value={userInput.url} />
    //         </div>
    //         <div>
    //           <label>Type:</label>
    //           <input name='type' id='type' value={userInput.type} />
    //         </div>
    //       </div>
    //       <button>Approve Guide</button>
    //     </form>
    //   </>
    // );
    // const templateParams: any = {
    //   // fromName: user,
    //   messageHtml: message,
    // };

    // emailjs
    //   .send('aoe2', 'guideSubmission', templateParams, process.env.EMAILJS_USER_ID)
    //   .then((res: any) => {
    //     resetForm();
    //     console.log(res, 'Success');
    //   })
    //   .catch((err: any) => console.error(err));

    /* --------------------------------------------------------------------- */
    const { guideName, source, type } = userInput;

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
      <form action='submit' id='submit'>
        <label htmlFor='strategy__guide-name'>Guide name: </label>
        <input
          type='text'
          name='guideName'
          id='strategy__guide-name'
          value={userInput.guideName}
          onChange={handleChange}
        />
        <br />

        <label htmlFor='strategy__guide-source'>URL: </label>
        <input
          type='text'
          name='source'
          id='strategy__guide-source'
          value={userInput.source}
          onChange={handleChange}
        />
        <br />

        <label htmlFor='strategy__guide-type'>Type: </label>
        <select
          name='type'
          placeholder='Please enter the URL here'
          id='strategy__guide-type'
          value={userInput.type}
          onChange={handleChange}
        >
          <option value='Video'>Video</option>
          <option value='Image'>Image</option>
          <option value='Other'>Other</option>
        </select>
        <br />

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
