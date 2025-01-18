import { useState } from 'react';
import './App.css';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const sendSms = async (e) => {
    e.preventDefault();

    const response = await fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/send-sms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to: phoneNumber, message: message }),
    });

    const result = await response.json();
    if (result.success) {
      alert('SMS Sent!');
    } else {
      alert('Failed to send SMS.');
    }
  };

  const makeCall = async (e) => {
    e.preventDefault();

    const response = await fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/make-call`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to: phoneNumber }),
    });

    const result = await response.json();
    if (result.success) {
      alert('Call initiated!');
    } else {
      alert('Failed to make the call.');
    }
  };

  return (
    <div>
      <h1>Communicate</h1>
      <form onSubmit={sendSms}>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send SMS</button>
      </form>

      <form onSubmit={makeCall} style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Make Call</button>
      </form>
    </div>
  );
}

export default App;
