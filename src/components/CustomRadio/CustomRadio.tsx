import React, { ChangeEvent, Dispatch, ReactElement, SetStateAction } from 'react';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

import './style/custom-radio.scss';
import { PositionsType } from 'store/types';

type CustomRadioType = {
  value: number;
  itemsRadio: PositionsType[];
  handelRadioGroupChange: Dispatch<SetStateAction<number>>;
};
export const CustomRadio = ({
  value,
  itemsRadio,
  handelRadioGroupChange,
}: CustomRadioType): ReactElement => {
  const onRadioGroupChange = (e: ChangeEvent<HTMLInputElement>): void => {
    handelRadioGroupChange(+e.currentTarget.value);
  };

  const itemFormControlLabel = itemsRadio.map(item => (
    <FormControlLabel
      key={item.id}
      value={item.id}
      control={<Radio />}
      label={item.name}
    />
  ));

  return (
    <FormControl className="radio-container">
      <FormLabel id="radio">Select your position</FormLabel>
      <RadioGroup
        className="radio"
        aria-labelledby="radio"
        value={value}
        name="radio-buttons-group"
        onChange={onRadioGroupChange}
      >
        {itemFormControlLabel}
      </RadioGroup>
    </FormControl>
  );
};
