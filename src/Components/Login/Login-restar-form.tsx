'use client';

import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../Forms/Button/Button';
import Input from '../Forms/Input/Input';
import ErrorMessage from '../helper/Error-message';
import styles from './LoginForm.module.css';
import passwordReset from '@/actions/password-reset';

function FormButtom() {
  const { pending } = useFormStatus();
  return (
    <>{pending ? <Button disabled={pending}>Alterando...</Button> : <Button disabled={pending}>Trocar senha</Button>}</>
  );
}

const LoginResetarForm = ({ keyToken, login }: { login: string; keyToken: string }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href.replace('pedeu', 'resetar'));
  }, []);

  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <form action={action} className={styles.form}>
      <Input label="Nova senha" type="password" name="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <ErrorMessage error={state.error} />
    </form>
  );
};

export default LoginResetarForm;
