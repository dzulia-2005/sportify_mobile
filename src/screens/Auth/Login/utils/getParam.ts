import { showErrorToast } from '../../../../shared/utils/showErrorToast';

export const getParam = (url: string, key: string) => {
  const qIndex = url.indexOf('?');
  if (qIndex === -1) return null;

  const query = url.slice(qIndex + 1);
  const parts = query.split('&');

  for (const p of parts) {
    const [k, v] = p.split('=');
    if (decodeURIComponent(k) === key) {
      return decodeURIComponent(v ?? '');
    }
  }

  return null;
};

export const parseGoogleAuthRedirect = (url: string) => {
  if (!url.startsWith('sportify://oauth-success')) {
    return null;
  }

  const error = getParam(url, 'error');
  if (error) {
    showErrorToast(error);
    return null;
  }

  const accessToken = getParam(url, 'token');
  const refreshToken = getParam(url, 'refreshToken');

  if (!accessToken || !refreshToken) {
    showErrorToast('Google login failed');
    return null;
  }

  return {
    accessToken,
    refreshToken,
  };
};
