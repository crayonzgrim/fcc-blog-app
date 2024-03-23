import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login, Register } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>This is Home!</div>
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
