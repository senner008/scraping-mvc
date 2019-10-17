
function objToQueryString (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
       // dont' add if empty string since it is evaluated to null in controller method
       if (!(typeof obj[p] === "string" && obj[p].length === 0)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
       }
     
    }
  return str.join("&");
}


export default async function getQueryData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url + "?" + objToQueryString(data), {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }
