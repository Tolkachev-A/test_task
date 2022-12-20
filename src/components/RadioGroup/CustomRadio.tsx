import React, { ChangeEvent, Dispatch, ReactElement, SetStateAction } from 'react';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

import './style/custom-radio.scss';

type CustomRadioType = {
  value: string;
  handelRadioGroupChange: Dispatch<SetStateAction<string>>;
};
export const CustomRadio = ({
  value,
  handelRadioGroupChange,
}: CustomRadioType): ReactElement => {
  const onRadioGroupChange = (e: ChangeEvent<HTMLInputElement>): void => {
    handelRadioGroupChange(e.currentTarget.value);
  };

  return (
    <FormControl className="radio-container">
      <FormLabel id="radio">Select your position</FormLabel>
      <RadioGroup
        aria-labelledby="radio"
        value={value}
        name="radio-buttons-group"
        onChange={onRadioGroupChange}
      >
        <FormControlLabel
          value="frontend"
          control={<Radio />}
          label="Frontend developer"
        />
        <FormControlLabel value="backend" control={<Radio />} label="Backend developer" />
        <FormControlLabel value="designer" control={<Radio />} label="Designer" />
        <FormControlLabel value="qa" control={<Radio />} label="QA" />
      </RadioGroup>
    </FormControl>
  );
};
