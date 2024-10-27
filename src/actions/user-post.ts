'use server';

import { USER_POST } from '@/functions/api';
import apiError from '@/functions/Api-error';
import login from './login';

export default async function userPost(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null;
  const email = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!username || !email || !password) throw new Error('Informe os dados');
    const { url } = USER_POST();
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Email ou usuário já cadastrado!');

    const data = await response.json();

    const { ok } = await login({ ok: true, error: null }, formData);

    if (!ok) throw new Error('Erro ao entrar');

    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
