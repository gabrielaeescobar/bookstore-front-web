'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthorForms, { AuthorFormData } from "./_components/AuthorForms";
import { useState } from "react";
import { createAuthor } from "../model/Author.interface";
import { useNotificationStore } from "@/shared/store/useNotificationStore";


export default function CreatePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const showNotification = useNotificationStore(
    (state) => state.showNotification
  );

  const handleCreateAuthor = async (data: AuthorFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await createAuthor(data);
      showNotification("Author created successfully", "success"); 
      router.push("/authors");
    } catch (err){
      const errorMessage = err instanceof Error 
        ? err.message : 'An unexpected error occurred creating the author.';
      setError(errorMessage);
      showNotification(errorMessage, "error"); 
    
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