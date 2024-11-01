import PhotosGet from '@/actions/photo-get';
import Feed from '@/Components/Feed/Feed';

export default async function Home() {
  const { data } = await PhotosGet();
  return <section className="container mainContainer">{data && <Feed photos={data} />}</section>;
}
