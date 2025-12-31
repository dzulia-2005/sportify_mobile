import { Toast } from '@ant-design/react-native';
import { AxiosError } from 'axios';

export const showErrorToast = (error: unknown) => {
  let message = 'An unexpected error occurred';
  if (error instanceof AxiosError) {
    if (!error.response) {
      message = 'Check your internet connection';
    } else {
      const status = error.response.status;
      switch (status) {
        case 400:
          message = 'Please fill all required fields correctly';
          break;
        case 401:
          message = 'You need to login again';
          break;
        case 403:
          message = 'You do not have permission';
          break;
        case 409:
          message = 'School with this name already exists';
          break;
        case 413:
          message = 'Image too large. Please upload a smaller file';
          break;
        case 500:
          message = 'Server error. Try again later';
          break;
      }
    }
  }

  Toast.fail(message, 3);
};
