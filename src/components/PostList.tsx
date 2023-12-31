'use client';

import { SimplePost } from '@/model/post';
import { GridLoader } from 'react-spinners';
import useSWR from 'swr';
import PostListCard from './PostListCard';
import GridSpinner from './GridSpinner';

export default function PostList() {
  const {
    data: posts,
    isLoading: loading,
    error,
  } = useSWR<SimplePost[]>('/api/post');
  // console.log(posts);
  return (
    <section>
      {loading && (
        <div className='text-center mt-32'>
          <GridSpinner />
        </div>
      )}
      <ul>
        {posts &&
          posts.map((post, index) => (
            <li key={post.id} className='mb-4'>
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
      </ul>
    </section>
  );
}
