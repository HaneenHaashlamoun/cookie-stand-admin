import Head from 'next/head'
import React, { useState } from 'react'
import Header from '../components/Header'
import Cookie_Stand_Admin from '../components/Cookie_Stand_Admin'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 pt-0">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <Header />
      <Cookie_Stand_Admin/>
    </div>
  )
}
