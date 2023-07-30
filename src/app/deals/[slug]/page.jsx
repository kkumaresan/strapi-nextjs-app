import React from 'react'
import Layout from '@/components/Layout'

export default async function Deal({params}) {
  const deal = await getDeal(params.slug)
  console.log(deal)
  return (
    <Layout className=''>
      <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
        <h2>{params.slug}</h2>
      </div>
    </Layout>
  )
}

async function getDeal(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/deals/${slug}`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}