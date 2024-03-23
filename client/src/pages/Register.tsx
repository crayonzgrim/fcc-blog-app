import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={() => {}}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={() => {}}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={() => {}}
        />
        <button onClick={() => {}}>Register</button>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};
