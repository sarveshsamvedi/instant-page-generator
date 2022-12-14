export const host = "http://localhost:3001/";

const get = (serviceUrl) => {
  return fetch(host + serviceUrl, {
    headers: {
      method: "GET",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status === 200 || res.status === 201) {
      return res.json();
    }
  });
}

const post = (serviceUrl, requestData) => {
  return fetch(host + serviceUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(requestData),
  }).then((res) => {
    if (res.status === 200 || res.status === 201) {
        return res.json();
    }
  });
}

export const serviceHelper = { get, post };
