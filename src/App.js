import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage'
import Dashboard from './components/Dashboard';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Exampage from './components/Exampage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage></Homepage>
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>
    },
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
