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