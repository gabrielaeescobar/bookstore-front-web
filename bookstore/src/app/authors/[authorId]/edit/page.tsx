// src/app/authors/edit/[authorId]/page.tsx
'use client';

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { fetchAuthorById, updateAuthor, Author } from "../../model/Author.interface";
import { useNotificationStore } from "@/shared/store/useNotificationStore";
import AuthorEditForms from "./_components/AuthorEditForms";
import { AuthorFormData } from "@/app/authors/create/_components/AuthorForms";

export default function EditAuthorPage() {
  const { authorId } = useParams<{ authorId: string }>();
  const router = useRouter();

  const showNotification = useNotificationStore((s) => s.showNotification);

  const [initialValues, setInitialValues] = useState<AuthorFormData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar autor existente
  useEffect(() => {
    (async () => {
      try {
        const a: Author = await fetchAuthorById(authorId);
        setInitialValues({
          name: a.name,
          description: a.description,
          image: a.image,
          birthDate: a.birthDate,
        });
      } catch (e) {
        const msg =  "Failed to load author.";
        setError(msg);
        showNotification(msg, "error");
      } finally {
        setLoading(false);
      }
    })();
  }, [authorId, showNotification]);

  // Guardar cambios
  const handleEditAuthor = async (data: AuthorFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await updateAuthor(authorId, {
        ...data,
      });
      showNotification("Author updated successfully", "success");
      router.push("/authors");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred updating the author.";
      setError(errorMessage);
      showNotification(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <main className="container mx-auto p-8">Loading…</main>;
  }

  if (error && !initialValues) {
    return <main className="container mx-auto p-8 text-red-600">Error: {error}</main>;
  }

  return (
    <main className="container mx-auto p-8 space-y-4">
      <h1 className="text-3xl font-bold">Edit Author #{authorId}</h1>

      <AuthorEditForms
        onSubmit={handleEditAuthor}
        defaultValues={initialValues ?? undefined}
        isSubmitting={isSubmitting}
      />

      <Link
        href="/authors"
        className="mt-4 inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
      >
        Back
      </Link>
    </main>
  );
}
