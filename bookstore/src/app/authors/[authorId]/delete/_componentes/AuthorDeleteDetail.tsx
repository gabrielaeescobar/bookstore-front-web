'use client';

type Props = {
  authorId: string;
  onConfirm: () => void;
  onCancel: () => void;
  deleting?: boolean;
  error?: string | null;
};

export default function AuthorDeleteDetail({
  authorId,
  onConfirm,
  onCancel,
  deleting = false,
}: Props) {
  return (
    <main className="container mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold">Delete Author #{authorId}</h1>
      <p className="text-red-600">
        Are you sure you want to delete this author? This action cannot be undone.
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={onConfirm}
          disabled={deleting}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
        >
          {deleting ? "Deleting…" : "Yes, delete"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
        >
          No, go back
        </button>
      </div>

    </main>
  );
}
