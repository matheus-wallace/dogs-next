import { Photo } from '@/actions/photo-get';
import FeedPhotos from './Feed-photos';

const Feed = ({ photos }: { photos: Photo[] }) => {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
};

export default Feed;
