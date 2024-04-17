import { useState } from 'react'
import logo from './assets/kasa.svg'
import './index.scss'
import { Link, NavLink, RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { FicheLogement } from './pages/FicheLogement';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ErrorPage } from './pages/ErrorPage';
import  logements  from "./assets/logements.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home logements={logements} />,
      },
      {
        path: "/a-propos",
        element: <About />,
      },
      {
        path: "/fiche-logement/:id",
        element: <FicheLogement />,
      },
      { path: "*", element: <ErrorPage /> },
    ]
  }
]);

function Root () {
  return <>
    <div className='main-container'>
      <header className='header'>
        <img src={logo} alt="Kasa" className='logo-head' />
        <nav className='navigation'>
          <ul>
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/a-propos">À propos</NavLink></li>
          </ul>
        </nav>
      </header>
      <main className='container'> 
        <Outlet />
      </main>
    </div>
    <footer className='footer'>
      <img src={logo} alt="Kasa" width={'122'} className='logo-footer' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  </>
}

function App() {
  return <RouterProvider router={router} />
}

export default App
