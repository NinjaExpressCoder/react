
import "../App.css";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../utils/common';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post('http://127.0.0.1:8000/api/visualization/v1/auth/login', { email: email, password: password }).then(response => {
        setUserSession(response.data.token, response.data.organizations);
        history('/dashboard');
      }).catch(error => {
        setMessage('Invalid email/password!!');
      });

     
    } catch (err) {
      console.log(err);
    }
    
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      
        <input
          type="email"
          value={email}
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default App;