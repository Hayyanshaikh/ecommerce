import React from 'react';
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  )
}

export default page