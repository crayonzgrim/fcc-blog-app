import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
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
          type="password"
          placeholder="password"
          name="password"
          onChange={() => {}}
        />
        <button onClick={() => {}}>Login</button>
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};
