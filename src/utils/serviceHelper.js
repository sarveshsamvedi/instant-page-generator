const host = "http://8410-34-93-21-216.ngrok.io/";

function get(serviceUrl) {
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

function post(serviceUrl, requestData) {
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
