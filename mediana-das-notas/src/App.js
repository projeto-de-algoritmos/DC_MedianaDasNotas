import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home';
import Resultado from './pages/Resultado';
import './styles/global.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/resultado",
    element: <Resultado />, 
  }
]);

export default function App()
{
  return(
    <RouterProvider router={router} />
  );
};