'use client'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// npm install react-hook-form zod @hookform/resolvers

import { z } from "zod";

export const authorSchema = z.object({
  id:z.number(),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long." }),
  birthDate: z.string(),
  image: z.string().url({ message: "Image must be a valid URL." }),
});

export type AuthorFormData = z.infer<typeof authorSchema>;

interface AuthorFormProps {
  onSubmit: SubmitHandler<AuthorFormData>;
  defaultValues?: AuthorFormData;
  isSubmitting: boolean;
}
export default function AuthorForms({
    onSubmit,
    defaultValues,
    isSubmitting,
  }: AuthorFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<AuthorFormData>({
      resolver: zodResolver(authorSchema),
      defaultValues:{
        image:"https://unsplash.com/es/fotos/personas-viendo-pinturas-en-la-galeria-de-un-museo-5yPvSf3bc6g",
        ...defaultValues
      }
    });



  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">Crear Nuevo Autor</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        {/*id field */}
        <div>
          <label className="block font-medium" htmlFor='id'>
            ID
          </label>
          <input
            id='id'
            type="number"
            {...register("id", { valueAsNumber: true })}
            className="w-full p-2 border rounded"
          />
          {errors.id && (
            <p className="text-red-500 text-sm mt-1">{errors.id.message}</p>)}
        </div>

        {/* name field */}
        <div>
          <label className="block font-medium" htmlFor='name'>
            Author Name
          </label>
          <input
            id='name'
            {...register("name")}
            className="w-full p-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>)}
        </div>

        {/* description field */}
        <div>
          <label className="block font-medium" htmlFor='description'>
            Description
          </label>
          <textarea
            id='description'
            {...register("description")}
            className = "w-full p-2 border rounded"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>)}
        </div>

        {/* birthDate field */}
        <div>
          <label className="block font-medium" htmlFor='birthDate'>
            Birth Date
          </label>
          <input
            id='birthDate'
            {...register("birthDate")}
            className="w-full p-2 border rounded"
          />
          {errors.birthDate && (
            <p className="text-red-500 text-sm mt-1">{errors.birthDate.message}</p>)}
        </div>

        {/* image field */}
        <div>
          <label className="block font-medium" htmlFor='image'>
            Image
          </label>
          <input
            id='image'
            {...register("image")}
            className="w-full p-2 border rounded"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>)}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isSubmitting ? "Saving..." : "Save Author"}
        </button>

      </form>
    </main>

  )
}
