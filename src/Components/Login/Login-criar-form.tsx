'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../Forms/Button/Button';
import Input from '../Forms/Input/Input';
import ErrorMessage from '../helper/Error-message';
import Link from 'next/link';
import styles from './LoginForm.module.css';
import userPost from '@/actions/user-post';

function FormButtom() {
  const { pending } = useFormStatus();
  return (
    <>{pending ? <Button disabled={pending}>Cadastrando...</Button> : <Button disabled={pending}>Cadastrar</Button>}</>
  );
}

const LoginCriarForm = () => {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: '',
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  return (
    <form action={action} className={styles.form}>
      <Input label="Usuário" type="text" name="username" />
      <Input label="Email" type="Email" name="email" />
      <Input label="Senha" type="password" name="password" />
      <ErrorMessage error={state.error} />
      <FormButtom />
    </form>
  );
};

export default LoginCriarForm;
