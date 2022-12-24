import { Dispatch, SetStateAction } from 'react';

import { FormikValues } from 'formik';

const MIN_LENGTH = 2;
const MAX_LENGTH_NAME = 60;
const MAX_LENGTH_EMAIL = 100;

export const getValidateForm = (
  values: FormikValues,
  fileImage: string | Blob,
  setErrorUploadImg: Dispatch<SetStateAction<string>>,
): FormikErrorType => {
  const errors: FormikErrorType = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < MIN_LENGTH || values.name.length > MAX_LENGTH_NAME) {
    errors.name = 'Min length: 2  max length: 60';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (values.email.length < MIN_LENGTH || values.email.length > MAX_LENGTH_EMAIL) {
    errors.email = 'Min length: 2  max length: 100';
  } else if (
    // eslint-disable-next-line no-control-regex
    !/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(
      values.email,
    )
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^[+]{0,1}380([0-9]{9})$/i.test(values.phone)) {
    errors.phone = 'Invalid phone';
  }

  if (!fileImage) {
    setErrorUploadImg('Required');
  } else {
    setErrorUploadImg('');
  }

  return errors;
};

type FormikErrorType = {
  name?: string;
  email?: string;
  phone?: string;
  photo?: string;
};
