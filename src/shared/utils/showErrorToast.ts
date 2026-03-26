import Toast from 'react-native-toast-message';
import axios from 'axios';
import { translate } from '../lib/i18n';

export const showErrorToast = (error: unknown) => {
  let message = 'An unexpected error occurred';

  if (axios.isAxiosError(error)) {
    if (!error.response) {
      message = 'Check your internet connection';
    } else if (error.response.data?.message) {
      message = error.response.data.message;
    } else if (typeof error.response.data === 'string') {
      message = error.response.data;
    } else {
      message = `Error ${error.response.status}`;
    }
  } else if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === 'string') {
    message = error;
  } else if (error && typeof error === 'object') {
    const anyErr = error as any;
    if (anyErr.message) {
      message = anyErr.message;
    } else if (anyErr.error) {
      message = anyErr.error;
    }
  }

  Toast.show({
    type: 'error',
    text1: translate('Error'),
    text2: translate(message),
    position: 'top',
    visibilityTime: 3000,
    topOffset: 50,
  });
};
