import React from 'react';
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Link href="/">Go back to Home</Link>
    </div>
  )
}

export default page