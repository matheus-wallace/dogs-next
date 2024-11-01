import { Photo } from '@/actions/photo-get';
import Image from 'next/image';
import Link from 'next/link';
import styles from './feed.module.css';

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo, index) => (
        <li className={styles.photo} key={photo.id + index}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image src={photo.src} width={1500} height={1500} alt={photo.title} sizes="80vw" />
            <span className={styles.views}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
