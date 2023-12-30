'use client'
import React from 'react'

export default function Page({ params, searchParams }) {
  console.log(params);
  return <h1>My Page: {params.product} </h1>
}