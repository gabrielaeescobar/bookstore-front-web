// src/app/authors/create/_components/AuthorForms.tsx
'use client'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authorSchema, AuthorFormData, AuthorFormProps} from '@/app/authors/create/_components/AuthorForms';



    export default function AuthorEditForms({
    onSubmit,
    defaultValues,
    isSubmitting,

    }: AuthorFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<AuthorFormData>({
        resolver: zodResolver(authorSchema),
        defaultValues: {
        image: "https://static1.mujerhoy.com/www/multimedia/202007/20/media/cortadas/jk-rowling-polemica-transfobia-k0TB-U110849049600hyD-624x936@MujerHoy.jpg",
        ...defaultValues
        }
    });

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">Editar autor</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div>
          <label className="block font-medium" htmlFor='name'>Author Name</label>
          <input id='name' {...register("name")} className="w-full p-2 border rounded" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block font-medium" htmlFor='description'>Description</label>
          <textarea id='description' {...register("description")} className="w-full p-2 border rounded" />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        <div>
          <label className="block font-medium" htmlFor='birthDate'>Birth Date</label>
          <input
            id='birthDate'
            type="date"                          // ← importante (YYYY-MM-DD)
            {...register("birthDate")}
            className="w-full p-2 border rounded"
          />
          {errors.birthDate && <p className="text-red-500 text-sm mt-1">{errors.birthDate.message}</p>}
        </div>

        <div>
          <label className="block font-medium" htmlFor='image'>Image</label>
          <input id='image' {...register("image")} className="w-full p-2 border rounded" />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50">
            
          {isSubmitting ? "Saving..." : "Save Author"}
        </button>
      </form>
    </main>
  )
}
