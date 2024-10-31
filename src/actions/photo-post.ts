'use server';

import { PHOTO_POST } from '@/functions/api';
import apiError from '@/functions/Api-error';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function photoPost(state: {}, formData: FormData) {
  const token = cookies().get('token')?.value;
  const nome = formData.get('nome') as string | null;
  const idade = formData.get('idade') as number | null;
  const peso = formData.get('peso') as number | null;
  const img = formData.get('peso') as File | null;

  try {
    if (!token || !nome || !idade || !peso || img?.size === 0) throw new Error('Informe os dados');
    const { url } = PHOTO_POST();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    });

    if (!response.ok) throw new Error('Email ou usuário já cadastrado!');

    const data = await response.json();
  } catch (error: unknown) {
    return apiError(error);
  }
  revalidateTag('photos');
  redirect('/');
}
