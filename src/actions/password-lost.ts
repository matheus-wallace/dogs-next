'use server';

import { PASSSWORD_LOST, USER_POST } from '@/functions/api';
import apiError from '@/functions/Api-error';
import login from './login';

export default async function passwordLost(state: {}, formData: FormData) {
  const login = formData.get('login') as string | null;
  const urlPerdeu = formData.get('url') as string | null;

  try {
    if (!login) throw new Error('Informe os dados');
    const { url } = PASSSWORD_LOST();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        url: urlPerdeu,
      }),
    });

    if (!response.ok) throw new Error('Email ou usuário não cadastrado!');

    const data = await response.json();

    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
