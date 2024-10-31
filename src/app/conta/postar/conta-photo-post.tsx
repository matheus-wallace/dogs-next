'use client';

import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import styles from './UserPhotoPost.module.css';
import userPost from '@/actions/user-post';
import Button from '@/Components/Forms/Button/Button';
import Input from '@/Components/Forms/Input/Input';
import ErrorMessage from '@/Components/helper/Error-message';
import photoPost from '@/actions/photo-post';

function FormButtom() {
  const { pending } = useFormStatus();
  return <>{pending ? <Button disabled={pending}>Enviando...</Button> : <Button disabled={pending}>Enviar</Button>}</>;
}

const ContaPhotoPost = () => {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: '',
    data: null,
  });
  const [img, setImg] = useState('');
  function handleImageChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action}>
        <Input label="Nome" type="text" name="nome" />
        <Input label="Peso" type="number" name="peso" />
        <Input label="Idade" type="number" name="idade" />
        <input onChange={handleImageChange} type="file" name="img" id="img" className={styles.file} />
        <FormButtom />
      </form>
      <div>
        <div className={styles.preview} style={{ backgroundImage: `url(${img})` }}></div>
      </div>
    </section>
  );
};

export default ContaPhotoPost;
