'use client';

import useSWR from 'swr';

export default function PostList() {
  const { data, isLoading, error } = useSWR('/api/post');
  console.log(data);
  return <p>PostList</p>;
}
