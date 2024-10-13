import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRoutes } from '../heroes'
import { PrivateRouter } from './PrivateRouter'

export const AppRouter = () => {
  return (
    <>

        <Routes>
            {/*Public routes */}
            <Route path="login" element={<LoginPage />}/>
        
            {/*Private routes */}
            <Route path="/*" element=
            {
              <PrivateRouter>
                <HeroesRoutes />

              </PrivateRouter>
            } />
        </Routes>
    </>
  )
}
