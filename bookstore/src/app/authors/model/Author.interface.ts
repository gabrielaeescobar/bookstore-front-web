import { fetcher } from "@/shared/authors/http";
import { AuthorFormData } from "../create/_components/AuthorForms";

export interface Author {
    id: number,
    birthDate:string,
    name:string,
    description:string,
    image:string,
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
