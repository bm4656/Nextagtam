import { SimplePost } from '@/model/post';
import Avatar from './Avatar';
import Image from 'next/image';
import HeartIcon from './ui/icons/HeartIcon';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import { parseDate } from '@/util/date';
import SmileIcon from './ui/icons/SmileIcon';

type Props = {
  post: SimplePost;
};
export default function PostListCard({ post }: Props) {
  const { username, userImage, image, text, createdAt, likes, comments } = post;
  return (
    <article className='rounded-lg shadow-md border border-gray-300'>
      <div className='flex items-center p-2'>
        <Avatar image={userImage} size='medium' highlight />
        <span className='text-gray-900 font-bold ml-2'>{username}</span>
      </div>
      <Image
        className='w-full object-cover aspect-square'
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
      />
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
      <form className='flex border-t border-neutral-300 items-center px-2'>
        <SmileIcon />
        <input
          className='w-full border-none outline-none p-3'
          type='text'
          placeholder='Add a comment...'
        />
        <button className='font-bold text-sky-600 ml-2'>Post</button>
      </form>
    </article>
  );
}
