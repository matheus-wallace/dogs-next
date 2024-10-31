import { Metadata } from 'next';
import ContaPhotoPost from './conta-photo-post';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Postar | Minha conta',
};

export default async function PostarPage() {
  return (
    <main>
      <ContaPhotoPost />
    </main>
  );
}
