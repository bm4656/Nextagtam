import BookmarkIcon from './ui/icons/BookmarkIcon';
import HeartIcon from './ui/icons/HeartIcon';
import { parseDate } from '@/util/date';

type Props = {
  likes: string[];
  username: string;
  text: string;
  createdAt: string;
};

export default function ActionBar({ likes, username, text, createdAt }: Props) {
  return (
    <>
      <div className='flex items-center justify-between p-4'>
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div className='px-4 py-1'>
        <p className='font-bold text-gray-800'>
          {likes?.length ?? 0} {likes?.length > 1 ? 'likes' : 'like'}
        </p>
        <p>
          <span className='font-bold text-gray-800 mr-2'>{username}</span>
          {text}
        </p>
        <p className='my-2 text-sm text-neutral-400'>{parseDate(createdAt)}</p>
      </div>
    </>
  );
}
