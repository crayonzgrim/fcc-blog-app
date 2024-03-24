import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [err, setErr] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8800/api/auth/register', inputs);

      navigate('/login');
    } catch (err) {
      setErr(((err as any).response as any).data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChangeInput}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChangeInput}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChangeInput}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};
