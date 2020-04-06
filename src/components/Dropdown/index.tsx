import React, { Fragment } from 'react';

interface Props {
  label: string;
  options?: string[];
  criteria: string;
  callback: Function;
}

const Dropdown = ({ label, options, criteria, callback }: Props) => {
  return (
    <Fragment>
      {options ? (
        <li>
          {label} ▶
          <ul>
            {options.map((option: string) => {
              return (
                <li key={option}>
                  <a onClick={(): void => callback(criteria, option)} href='#'>
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
    </Fragment>
  );
};

export default Dropdown;
