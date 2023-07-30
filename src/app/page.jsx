import Image from 'next/image'
import Layout from '@/components/Layout'
import Deals from '@/components/Deals'

export default async function Home() {
  const deals = await getDeals()
  // console.log(deals[1])
  return (
    <Layout className=''>
    <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
      {
        deals && deals.data.map((deal) => {
          return <Deals key={deal.id} className="mb-3" deal={deal} hostBaseUrl={process.env.STRAPI_BASE_URL} />
        })
      }
    </div>
    </Layout>
  )
}

async function getDeals() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/deals?populate=*`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
