import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Currency from './pages/Currency/Currency';
import Language from './pages/Language/Language';
import Explore from './pages/Explore/Explore';
import Location from './pages/Location/Location';
import Profile from './pages/Profile/Profile';
import './styles.css'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/currency",
    element: <Currency />,
  },
  {
    path: "/language",
    element: <Language />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/location",
    element: <Location />,
  },
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/Profile",
    element: <Profile />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
