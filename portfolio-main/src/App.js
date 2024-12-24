import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'


import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import ProjectsContainer from './components/Projects/ProjectsContainer'
import MoreAboutMe from './components/MoreAboutMe/MoreAboutMe'
import Contact from './components/Contact/Contact'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header/>} >
    <Route index element={<Intro />} />

    <Route path="/projects" element={<ProjectsContainer />} />
    <Route path="/aboutMe" element={<MoreAboutMe />} />
    <Route path="/contact" element={<Contact />} />
    
  </Route>

))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
