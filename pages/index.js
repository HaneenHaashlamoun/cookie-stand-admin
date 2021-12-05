import Head from 'next/head'
import React, { useState } from 'react'
import Header from '../components/Header'
import Cookie_Stand_Admin from '../components/Cookie_Stand_Admin'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'
import LoginForm from '../components/LoginForm'

export default function Home() {
  const { user } = useAuth();
  return (
    <div >      
  {user ?
    <Cookie_Stand_Admin /> 
    : < LoginForm/>
   }      
    </div>
  )
}
