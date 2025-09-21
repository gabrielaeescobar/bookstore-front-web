import Link from "next/link";

export default async function EditAuthorPage({
        params,
    }: 
    
    {
        params: { authorId: string };
        }) {
            const { authorId } = await params;

            return (
                <main className="container mx-auto p-8">
                <h1 className="text-3xl font-bold">
                    Edit of {authorId}
                </h1>
                        
                {/* Form here */}
                <Link href="/authors" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Back
                </Link>
                </main>
    );
}