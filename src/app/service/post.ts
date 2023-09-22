import { NextResponse } from 'next/server';
import { client } from './sanity';

const simplePostProjection = `
    ...,
    "username": author->username,
    "userImage": author->image,
    "image": photo,
    "likes": likes[]->username,
    "text": comments[0].comment,
    "comments": count(comments),
    "id": _id,
    "createAt":_createAt
`;

export async function getFollowingPostsOf(username: string) {
  return client.fetch(
    `*[_type == "post" && author->username == "newjin46"
    || author._ref in *[_type=="user" && username == "newjin46"].following[]._ref]
    | order(_createAt desc){${simplePostProjection}}`
  );
}
