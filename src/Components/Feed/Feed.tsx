import { Photo } from '@/actions/photo-get';
import FeedPhotos from './Feed-photos';

const Feed = ({ photos }: { photos: Photo[]; user?: 0 | string }) => {
  console.log('o que e foto?', photos);
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
};

export default Feed;
