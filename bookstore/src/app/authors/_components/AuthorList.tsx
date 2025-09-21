'use client'
import React from 'react'
import { Author, fetchAuthors } from "../model/Author.interface";
import { useEffect, useState } from "react";
import Image from 'next/image';


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
            <div key={author.id} className='border p-4 rounded shadow'>
                <h1>{author.name}</h1>
                <Image src={author.image} alt={author.name} width={100} height={150} />
                <p>{author.description}</p>
                <p>Birth Date: {author.birthDate}</p>
               
               </div>))}

    </div>
    </div>
  )
}
