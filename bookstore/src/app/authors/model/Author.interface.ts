import { fetcher } from "@/shared/authors/http";
import { AuthorFormData } from "../create/_components/AuthorForms";

export interface Author {
    birthDate:string,
    name:string,
    description:string,
    image:string,
    id:number
}

export const fetchAuthors = async (): Promise<Author[]> => {
    return fetcher<Author[]>('/authors');
}

export const createAuthor = (data: AuthorFormData): Promise<Author> => {
    return fetcher<Author>('/authors', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}

export const updateAuthor = (id: string, data: AuthorFormData): Promise<Author> => {
    return fetcher<Author>(`/authors/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
}
export const deleteAuthor = (id: string): Promise<void> => {
    return fetcher<void>(`/authors/${id}`, {
        method: 'DELETE',
    });
}
