'use client';

import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../Forms/Button/Button';
import Input from '../Forms/Input/Input';
import ErrorMessage from '../helper/Error-message';
import styles from './LoginForm.module.css';
import passwordLost from '@/actions/password-lost';

function FormButtom() {
  const { pending } = useFormStatus();
  return (
    <>{pending ? <Button disabled={pending}>Enviando...</Button> : <Button disabled={pending}>Enviar Email</Button>}</>
  );
}

const LoginPerdeuForm = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'));
  }, []);

  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <form action={action} className={styles.form}>
      <Input label="Email / Usuário" type="text" name="login" />
      <input type="hidden" name="url" value={url} />
      {state.ok ? <p style={{ color: '#4c1' }}>Email Enviado</p> : <FormButtom />}
      <ErrorMessage error={state.error} />
    </form>
  );
};

export default LoginPerdeuForm;
