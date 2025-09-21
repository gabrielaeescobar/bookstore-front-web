'use client'
import React from 'react'
import { Author, fetchAuthors } from "../model/Author.interface";
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


export default function AuthorList() {
    const [authors, setAuthors] = useState<Author[]>([])

    useEffect(() => {
        getAuthors();
    }, [])
    const getAuthors = async () => {
        const authors =  await fetchAuthors()
        setAuthors(authors)
    }
    console.log(authors)
  return (
    <div>
    <div className='grid grid-cols-3 gap-2'>
        {authors.map((author) => (
            <div key={author.name} className='border p-4 rounded shadow'>
                <h1>{author.name}</h1>
                <Image src={author.image} alt={author.name} width={100} height={150} />
                <p>{author.description}</p>
                <p>Birth Date: {author.birthDate}</p>
                <Link href={`/authors/${author.id}/edit`}>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600'>Edit</button>
                </Link>
                <Link href={`/authors/${author.id}/delete`}>
                  <button className='bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-600 ml-2'>Delete</button>
                </Link>
            </div>))}

    </div>
    </div>
  )
}
