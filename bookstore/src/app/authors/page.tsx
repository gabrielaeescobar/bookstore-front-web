import Link from "next/link";
import AuthorList from "./_components/AuthorList";

export default function AuthorsPage() {
  return (
    <div className="gap-4" >
      <Link href="/authors/create" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Create Author
      </Link>
    
     <AuthorList/>

    </div>
  );
}