import React from 'react';

interface Props {
  criteria: string;
  label: string;
  options: string[];
  selectChosenCriteria: Function;
}

const Dropdown = ({ criteria, label, options, selectChosenCriteria }: Props) => {
  return (
    <li>
      {label}
      <ul>
        {options.map((option: string) => {
          return (
            <li key={option}>
              <a onClick={(): void => selectChosenCriteria(criteria, option)} href='#'>
                {option}
              </a>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default Dropdown;
