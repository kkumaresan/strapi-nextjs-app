import React from 'react'
import Head from 'next/head'
import Nav from './Nav'

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>Cobone Deals</title>
      </Head>
      <Nav/>
      <main className='px-4'>
        <div className='flex flex-col'>
          <div className='text-2xl font-medium'>{children}</div>
        </div>
      </main>
    </>
  )
}
