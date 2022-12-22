import React, { ReactElement, useState } from 'react';

import './style/sign-up.scss';

import { Box, Button, FormControl, FormGroup, TextField } from '@mui/material';
import { useFormik } from 'formik';

import { H1, CustomButton } from 'components/common';
import { CustomRadio } from 'components/RadioGroup';

export const SignUp = (): ReactElement => {
  const [selectPosition, setSelectPosition] = useState('frontend');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validate: values => {
      const errors: any = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
    },
    onSubmit: values => {
      console.log(values);
      // const signUpData = { email: values.email, password: values.password };
      //
      // dispatch(signUpTC(signUpData));
    },
  });

  return (
    <div id="sign-up" className="sign-up-container">
      <H1 title="Working with POST request" />

      <form onSubmit={formik.handleSubmit}>
        <FormControl className="sign-up-container__inputs">
          <FormGroup>
            <TextField
              helperText={formik.errors.name}
              variant="outlined"
              label="Name"
              margin="normal"
              {...formik.getFieldProps('name')}
            />
            <TextField
              helperText={formik.errors.email}
              label="Email"
              variant="outlined"
              margin="normal"
              {...formik.getFieldProps('email')}
            />

            <TextField
              helperText={formik.errors.phone}
              label="Phone"
              variant="outlined"
              margin="normal"
              {...formik.getFieldProps('phone')}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="phone" className="label-phone">
              +38 (XXX) XXX - XX - XX
            </label>
            <CustomRadio
              value={selectPosition}
              handelRadioGroupChange={setSelectPosition}
            />

            <div className="upload">
              <Button variant="outlined" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <TextField disabled id="outlined-name" label="Upload your photo" />
            </div>

            <Box display="flex" justifyContent="center">
              <CustomButton title="Sign up" type="submit" />
            </Box>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
};
