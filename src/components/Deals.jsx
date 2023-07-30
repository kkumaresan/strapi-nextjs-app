import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default async function Deals({deal, hostBaseUrl}) {
  const images = await (deal.attributes.image.data)
  
  if (images) {
    // xx.map(x => {
    //   console.log("DEAL",xx[x])
    // })
    console.log("XX", `${hostBaseUrl}${images[0]?.attributes.formats.thumbnail.url}`)
  }
  
  return (
    
    <Link className="card w-96 bg-base-100 shadow-xl m-1" href={`deals/${deal.attributes.slug}`}>
      <figure>
      <img className='w-full' src={`${hostBaseUrl}${images[0]?.attributes.formats.thumbnail.url}`} alt={deal.id} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{deal.attributes.title}</h2>
        <p className='text-sm'>{deal.attributes?.shortdesc}</p>
        <div class="card-actions justify-end">
          <div class="badge badge-primary">{deal.attributes.category}</div> 
        </div>
      </div>
    </Link>
  )
}
