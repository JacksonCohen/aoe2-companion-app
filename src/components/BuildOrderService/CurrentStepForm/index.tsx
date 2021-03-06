import React, { useState, useEffect, ChangeEvent } from 'react';
import BuildOrderInterface from '../../../interfaces/BuildOrder.interface';
import gameIcons from '../../../../data/icons';

import './_CurrentStepForm.scss';

interface Props {
  stepNum: number;
  selectedIcon: string;
  setIcon: any;
  setSelectedIcon: any;
  setOrderTitle: any;
  setError: any;
  formData: {
    image: string;
    stepTitle: string;
    info: string;
  };
  orderTitle: string;
  buildOrder: BuildOrderInterface[];
  displayError: (type: string, field?: string) => boolean;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    stepNumber?: number
  ) => void;
  handleClick: (type: string, index?: number) => void;
  initialState: BuildOrderInterface;
  setFormData: any;
}

const CurrentStepForm = ({
  stepNum,
  selectedIcon,
  setIcon,
  setSelectedIcon,
  setOrderTitle,
  setError,
  formData,
  orderTitle,
  buildOrder,
  displayError,
  handleChange,
  handleClick,
  initialState,
  setFormData,
}: Props) => {
  const [icons, setIcons] = useState<any>([]);
  const [active, setActive] = useState<number | null>(null);
  const [displayIcons, setDisplayIcons] = useState(false);

  useEffect(() => {
    const iconObjs = gameIcons.map((icon, index) => {
      return {
        id: index,
        src: icon,
      };
    });
    setIcons(iconObjs);
  }, []);

  const handleConfirm = (src: string): void => {
    setIcon(src);
    setActive(null);
    setDisplayIcons(false);
    setSelectedIcon(src);
  };

  const handleSubmit = (): void => {
    fetch('/api/build-order', {
      method: 'POST',
      body: JSON.stringify({
        title: orderTitle,
        buildOrder,
      }),
    })
      .then(() => window.location.reload())
      .catch((error) => console.error(error));
  };

  const handleIconClick = (): void => {
    if (!displayIcons) {
      setDisplayIcons(!displayIcons);
    }
  };

  return (
    <div className={`build-order__current-step step-${stepNum}`}>
      <form action=''>
        <div className='current-step'>
          <div className='current-step__form'>
            {displayIcons && (
              <div className='current-step__icons-list'>
                <div className='icons-list__icons'>
                  {icons.map(({ id, src }: { id: number; src: string }) => {
                    return (
                      <img
                        key={id}
                        src={src}
                        className={`icon${id === active ? ' active-icon' : ''}`}
                        onClick={() => setActive(id)}
                      />
                    );
                  })}
                </div>
              </div>
            )}
            <div className='form__inputs'>
              <div className='current-step__icon-selector'>
                {!selectedIcon ? (
                  displayIcons ? (
                    <input
                      type='button'
                      onClick={() => (active !== null ? handleConfirm(icons[active!].src) : null)}
                      className='icon-select'
                      value='Confirm Icon'
                    />
                  ) : (
                    <input
                      type='button'
                      onClick={() => handleIconClick()}
                      value='Select Icon'
                      className='icon-select'
                    />
                  )
                ) : (
                  <div className='icon-selector__selected-icon'>
                    <img className='icon' src={selectedIcon} />
                    <span
                      onClick={() =>
                        displayIcons && active !== null
                          ? handleConfirm(icons[active!].src)
                          : handleIconClick()
                      }
                    >
                      {displayIcons ? 'Confirm' : 'Change?'}
                    </span>
                  </div>
                )}
              </div>
              <div className='current-step__inputs'>
                <input
                  type='text'
                  name='stepTitle'
                  placeholder='Enter title'
                  maxLength={30}
                  value={formData.stepTitle}
                  className={`${displayError('step', 'stepTitle') ? 'error' : ''}`}
                  onChange={(event) => handleChange(event)}
                />
                <input
                  type='text'
                  name='info'
                  placeholder='Enter info'
                  maxLength={40}
                  value={formData.info}
                  className={`${displayError('step', 'info') ? 'error' : ''}`}
                  onChange={(event) => handleChange(event)}
                />
              </div>
              {stepNum === 1 && (
                <span
                  className='current-step__delete-step delete-step'
                  onClick={() => {
                    setError(false);
                    setFormData(initialState);
                    setOrderTitle('');
                    setSelectedIcon('');
                  }}
                >
                  &#10006;
                </span>
              )}
            </div>
          </div>
        </div>

        <fieldset>
          <div className='build-order__buttons'>
            <input type='button' value='Add Step' onClick={() => handleClick('add')} />

            {buildOrder.length !== 0 && (
              <input type='button' value='Submit' onClick={handleSubmit} />
            )}
          </div>
        </fieldset>
      </form>
    </div>
  );
};
export default CurrentStepForm;
