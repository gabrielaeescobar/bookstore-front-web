'use client';

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { deleteAuthor } from "../../model/Author.interface";
import { useNotificationStore } from "@/shared/store/useNotificationStore";
import AuthorDeleteDetail from "./_componentes/AuthorDeleteDetail";

export default function DeleteAuthorPage() {
    const { authorId } = useParams<{ authorId: string }>();
    const router = useRouter();
    const showNotification = useNotificationStore(s => s.showNotification);
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);


  const handleConfirm = async () => {
    setError(null);
    try {
      setDeleting(true);
        await deleteAuthor(authorId).catch(() => {}); // se ignora el parseo
      showNotification("Author deleted successfully", "success");
      router.push("/authors");         
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred updating the author.";
      setError(errorMessage);
      showNotification(errorMessage, "error");
    }
  };
  const handleCancel = () => {
    router.push("/authors");
  };

  return (
    <div>
        <AuthorDeleteDetail
            authorId={authorId}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            deleting={deleting}
            />
    </div>);
}
