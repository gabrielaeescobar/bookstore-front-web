import Link from 'next/link'
import React from 'react'

export default function deletePage() {
  return (
    
    <div>
        <h1 className="text-3xl font-bold">
            Delete Author Page
        </h1>
        {/* Form here */}
        <Link href="/authors" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Back
        </Link>
    </div>
  )
}
