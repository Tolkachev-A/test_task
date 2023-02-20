import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const MAX_SIZE_IMG = 5e6;
const MIN_SIZE_IMG = 70;

export const uploadImage = (
  e: ChangeEvent<HTMLInputElement>,
  setFileImage: Dispatch<SetStateAction<string | Blob>>,
  setNameImage: Dispatch<SetStateAction<string>>,
  setErrorUploadImg: Dispatch<SetStateAction<string>>,
): void => {
  const file = e.target.files && e.target.files[0];

  if (file && file.size < MAX_SIZE_IMG) {
    const myImage = new Image();

    myImage.src = URL.createObjectURL(file);

    myImage.onload = () => {
      URL.revokeObjectURL(myImage.src);
      if (myImage.height > MIN_SIZE_IMG && myImage.width > MIN_SIZE_IMG) {
        setFileImage(file);
        setNameImage(file.name);
        setErrorUploadImg('');

        return;
      }

      setErrorUploadImg('Min size 70X70');
    };

    return;
  }

  setErrorUploadImg('Max size 5 mb');
};
