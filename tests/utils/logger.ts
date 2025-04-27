export function logResponse(response: any) {
    console.log('Status:', response.status());
    response.json().then(data => console.log('Body:', data));
  }