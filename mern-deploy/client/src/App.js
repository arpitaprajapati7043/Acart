import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

// App.js
useEffect(() => {
  fetch('http://localhost:8080/')  // Make sure this matches your server's port
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => setMessage(data.message))
    .catch(error => console.error('Error fetching data:', error.message));
}, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;

