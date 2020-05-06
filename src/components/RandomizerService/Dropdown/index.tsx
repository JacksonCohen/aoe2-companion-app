import React from 'react';

interface Props {
  label: string;
  options?: string[];
  criteria: string;
  callback: (method: string) => void;
}

const Dropdown = ({ label, options, criteria, callback }: Props) => {
  return (
    <>
      {options ? (
        <li>
          {label} ▶
          <ul>
            {options.map((option: string) => {
              return (
                <li key={option}>
                  <a onClick={(): void => callback(criteria)} href='#'>
                    {option}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      ) : (
        <li>
          <button onClick={(): void => callback(criteria)}>
            <li>{label}</li>
          </button>
        </li>
      )}
    </>
  );
};

export default Dropdown;
