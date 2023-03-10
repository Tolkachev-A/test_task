import React, { ChangeEvent, ReactElement, useState } from 'react';

import './style/sign-up.scss';

import { Box, Button, FormControl, FormGroup, TextField } from '@mui/material';
import { useFormik } from 'formik';

import { CustomButton, H1 } from 'components/common';
import { CustomRadio } from 'components/CustomRadio';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectPositions, selectSingUpStatusLoading } from 'store/selectors';
import { executeRegistrationUser } from 'store/thunks';
import { getValidateForm, uploadImage } from 'utils';

export const SignUp = (): ReactElement => {
  const dispatch = useAppDispatch();

  const positions = useAppSelector(selectPositions);
  const isLoading = useAppSelector(selectSingUpStatusLoading);

  const [selectPosition, setSelectPosition] = useState(positions[0].id);
  const [errorUploadImg, setErrorUploadImg] = useState('');
  const [fileImage, setFileImage] = useState<string | Blob>('');
  const [nameImage, setNameImage] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      photo: '',
    },
    validate: values => getValidateForm(values, fileImage, setErrorUploadImg),
    onSubmit: values => {
      const formData = new FormData();

      formData.set('name', values.name);
      formData.set('email', values.email);
      formData.set('phone', values.phone);
      formData.set('photo', fileImage);
      formData.set('position_id', String(selectPosition));

      dispatch(executeRegistrationUser(formData));

      formik.resetForm();
      setFileImage('');
      setNameImage('');
    },
  });

  const isErrorName = formik.touched.name && !!formik.errors.name;
  const isErrorEmail = formik.touched.email && !!formik.errors.email;
  const isErrorPhone = formik.touched.phone && !!formik.errors.phone;
  const isErrorPhoto = formik.touched.photo && errorUploadImg;
  const isDisabledBtn =
    isLoading === 'loading' ||
    !formik.isValid ||
    !formik.dirty ||
    !nameImage ||
    !!errorUploadImg;

  const onUploadChange = (e: ChangeEvent<HTMLInputElement>): void => {
    formik.touched.photo = true;
    uploadImage(e, setFileImage, setNameImage, setErrorUploadImg);
  };

  return (
    <div id="sign-up" className="sign-up-container">
      <H1 title="Working with POST request" />

      <form onSubmit={formik.handleSubmit}>
        <FormControl className="sign-up-container__inputs">
          <FormGroup>
            <TextField
              className="sign-up__input"
              error={isErrorName}
              helperText={formik.touched.name && formik.errors.name}
              variant="outlined"
              label="Your name"
              margin="normal"
              {...formik.getFieldProps('name')}
            />
            <TextField
              className="sign-up__input"
              error={isErrorEmail}
              helperText={formik.touched.email && formik.errors.email}
              label="Email"
              variant="outlined"
              margin="normal"
              {...formik.getFieldProps('email')}
            />

            <TextField
              className="sign-up__input"
              error={isErrorPhone}
              helperText={formik.touched.phone && formik.errors.phone}
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
              itemsRadio={positions}
              handelRadioGroupChange={setSelectPosition}
            />

            <div className="upload">
              <Button
                className="upload__btn"
                variant="outlined"
                component="label"
                style={{
                  borderColor: isErrorPhoto ? '#CB3D40' : '#000000',
                }}
              >
                Upload
                <input
                  className="upload__input"
                  hidden
                  accept=".jpg,.jpeg"
                  type="file"
                  {...formik.getFieldProps('photo')}
                  onChange={onUploadChange}
                />
              </Button>
              <TextField
                disabled
                className="upload__text-field"
                sx={{
                  '& .MuiOutlinedInput-root.Mui-disabled': {
                    '& > fieldset': {
                      borderColor: isErrorPhoto ? '#CB3D40' : '#D0CFCF',
                    },
                  },
                }}
                error={formik.touched.photo && !!errorUploadImg}
                helperText={isErrorPhoto}
                label={nameImage || 'Upload your photo'}
              />
            </div>
            <Box
              style={{ cursor: 'not-allowed' }}
              typeof="div"
              display="flex"
              justifyContent="center"
            >
              <CustomButton disabled={isDisabledBtn} title="Sign up" type="submit" />
            </Box>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
};
