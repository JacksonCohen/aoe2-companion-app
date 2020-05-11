import React, { useReducer, useState, ChangeEvent } from 'react';
import TypeInput from '../TypeInput';
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
    type: '',
  };
  const stateReducer = (state: State, newState: any) => ({ ...state, ...newState });

  const [userInput, setUserInput] = useReducer(stateReducer, initialState);
  const [error, setError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = event.target;

    setUserInput({ [name]: value });
  };

  const sendEmail = (): void => {
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
    //   .catch(err => console.error(err));

    /* --------------------------------------------------------------------- */
    const { guideName, source, type } = userInput;
    if (guideName && source && type) {
      setError(false);

      fetch('/api/guide', {
        method: 'POST',
        body: JSON.stringify({
          userInput,
        }),
      })
        .then(() => {
          resetForm();
          window.location.reload();
        })
        .catch((err) => console.error(err));
    } else {
      setError(true);
    }
  };

  const displayError = (field: string): boolean => {
    if (error && userInput[field] === '') {
      return true;
    }
    return false;
  };

  const resetForm = (): void => {
    setUserInput({
      guideName: '',
      source: '',
      type: '',
    });
    setError(false);
  };

  return (
    <div className='strategy__form'>
      <h2 id='submit'>Submit a Guide? </h2>
      <form action='submit'>
        <fieldset>
          <label>
            Guide Name
            <span className={displayError('guideName') ? '' : 'hide'}>
              You must enter a guide name
            </span>
            <input
              type='text'
              name='guideName'
              className={`strategy__text-input${displayError('guideName') ? ' error' : ''}`}
              value={userInput.guideName}
              onChange={handleChange}
            />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Guide URL
            <span className={displayError('source') ? '' : 'hide'}>You must enter a guide URL</span>
            <input
              type='text'
              name='source'
              className={`strategy__text-input${displayError('source') ? ' error' : ''}`}
              value={userInput.source}
              onChange={handleChange}
            />
          </label>
        </fieldset>

        <fieldset>
          <div className='strategy__guide-type'>
            Select a Type
            <span className={displayError('type') ? '' : 'hide'}>You must select a guide type</span>
            <div className='strategy__type-options'>
              {['video', 'image', 'other'].map((type, index) => (
                <TypeInput
                  key={index}
                  value={type}
                  handleChange={handleChange}
                  displayError={displayError}
                />
              ))}
            </div>
          </div>
        </fieldset>

        <fieldset>
          <input
            type='button'
            name='submit'
            value='Submit Guide'
            className='strategy__submit'
            onClick={sendEmail}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default FormSubmit;
