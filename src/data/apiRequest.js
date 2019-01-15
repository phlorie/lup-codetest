export default function apiRequest({
  path = '',
  method = 'GET',
  payload,
}) {
  const request = {
    method,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  };

  if (payload) {
    request.body = JSON.stringify(payload);
  }

  return fetch(`https://codetest.lup.com.au/api/${path}`, request)
    .then(res => {
      return res.json().then(json => ({
        res,
        json,
      }));
    });
}
