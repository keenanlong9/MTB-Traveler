import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Hub } from 'aws-amplify/utils';
import { DataStore } from '@aws-amplify/datastore';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Currency from './pages/Currency/Currency';
import Language from './pages/Language/Language';
import Explore from './pages/Explore/Explore';
import Location from './pages/Location/Location';
import Profile from './pages/Profile/Profile';
import './styles.css';

const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/currency", element: <Currency /> },
  { path: "/language", element: <Language /> },
  { path: "/explore", element: <Explore /> },
  { path: "/location", element: <Location /> },
  { path: "/profile", element: <Profile /> },
  { path: "*", element: <Home /> },
]);

function App() {
  useEffect(() => {
    const unsubscribe = Hub.listen('auth', async ({ payload }) => {
      const { event } = payload;

      if (event === 'signedOut') {
        console.log('[Auth] signedOut → Clearing DataStore');
        await DataStore.clear();
      }

      if (event === 'signedIn') {
        console.log('[Auth] signedIn → Starting DataStore');
        await DataStore.start();
      }
    });

    return () => unsubscribe(); // clean up the listener on unmount
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
