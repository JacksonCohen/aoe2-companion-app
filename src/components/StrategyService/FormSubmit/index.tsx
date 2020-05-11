import React, { useReducer, useState, ChangeEvent } from 'react';
import TypeInput from '../TypeInput';
import emailjs from 'emailjs-com';

import './_FormSubmit.scss';

interface State {
  guideName: string;
  source: string;
  type: string;
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement | (HTMLSelectElement & { files: string[] });
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
  const [isURL, setIsURL] = useState<boolean | null>(null);
  const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);

  const handleChange = (event: any): void => {
    const { name, value, files } = event.target;

    if (files) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (ev: any) => {
        setImagePreview(ev.target.result);
        setUserInput({ source: reader.result });
      };
      reader.onerror = (err) => {
        console.error(err);
      };
    } else {
      setUserInput({ [name]: value });
    }
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
              className={displayError('guideName') ? 'error' : ''}
              value={userInput.guideName}
              onChange={handleChange}
            />
          </label>
        </fieldset>

        <fieldset>
          <div className='strategy__file-format'>
            {isURL === null ? (
              <div className='file-format__options'>
                <div className='options__prompt'>Choose an Upload Format</div>
                <span className={displayError('source') ? '' : 'hide'}>
                  You must select an upload format
                </span>
                <div className={displayError('source') ? 'error' : ''}>
                  <input type='button' value='Enter a URL' onClick={() => setIsURL(true)} />
                  <input type='button' value='Upload a File' onClick={() => setIsURL(false)} />
                </div>
              </div>
            ) : isURL ? (
              <>
                <label className='options__option'>
                  Guide URL{' '}
                  <img
                    src='/static/images/swap.png'
                    className='swap'
                    onClick={() => {
                      setIsURL(!isURL);
                      setUserInput({
                        source: '',
                      });
                    }}
                  />
                </label>
                <span className={displayError('source') ? '' : 'hide'}>
                  You must enter a guide URL
                </span>
                <input
                  type='text'
                  name='source'
                  className={displayError('source') ? 'error' : ''}
                  value={userInput.source}
                  onChange={handleChange}
                />
              </>
            ) : (
              <>
                <label className='options__option'>
                  Upload a File{' '}
                  <img
                    src='/static/images/swap.png'
                    className='swap'
                    onClick={() => {
                      setIsURL(!isURL);
                      setImagePreview(undefined);
                      setUserInput({
                        source: '',
                      });
                    }}
                  />
                </label>
                <span className={displayError('source') ? '' : 'hide'}>You must upload a file</span>
                <input
                  type='file'
                  name='source'
                  className={`file-input${displayError('source') ? ' error' : ''}`}
                  onChange={handleChange}
                />
                <img
                  className={`file-format__image-preview ${imagePreview ? '' : 'hide'}`}
                  src={imagePreview}
                />
              </>
            )}
          </div>
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
