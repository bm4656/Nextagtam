'use client';

import { SimplePost } from '@/model/post';
import useSWR from 'swr';

export default function PostList() {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>('/api/post');
  return (
    <ul>{posts && posts.map((post) => <li key={post.id}>{post.text}</li>)}</ul>
  );
}
