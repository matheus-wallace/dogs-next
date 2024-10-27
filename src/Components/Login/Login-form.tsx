'use client';

import login from '@/actions/login';
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../Forms/Button/Button';
import Input from '../Forms/Input/Input';
import ErrorMessage from '../helper/Error-message';
import Link from 'next/link';
import styles from './LoginForm.module.css';

function FormButtom() {
  const { pending } = useFormStatus();
  return (
    <>{pending ? <Button disabled={pending}>Carregando...</Button> : <Button disabled={pending}>Entrar</Button>}</>
  );
}

const LoginForm = () => {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <ErrorMessage error={state.error} />
        <FormButtom />
      </form>
      <Link className={styles.lost} href="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.signUp}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? cadastre-se no site.</p>
        <Link className="button" href="/login/criar">
          Cadastro
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
