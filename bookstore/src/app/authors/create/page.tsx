'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthorForms, { AuthorFormData } from "./_components/AuthorForms";
import { useState } from "react";
import { createAuthor } from "../model/Author.interface";


export default function CreatePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleCreateAuthor = async (data: AuthorFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await createAuthor(data);
      router.push("/authors");
    } catch (err){
      setError(
        err instanceof Error 
          ? err.message : 'An unexpected error occurred creating the author.');
    } finally{
      setIsSubmitting(false);

    }

  }
  return (
    <div>
       <Link href="/authors" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Back
        </Link>
        <AuthorForms onSubmit={handleCreateAuthor} isSubmitting={isSubmitting}/>
        {error && <p className="text-red-500 mt-4">{error}</p>}

       

    </div>
  );
}