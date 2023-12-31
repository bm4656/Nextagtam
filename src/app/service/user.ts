import { client } from './sanity';

type OauthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};
export async function addUser({ id, username, email, name, image }: OauthUser) {
  // user가 DB에 존재하지 않으면 추가
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export async function getUserByUsername(username: string) {
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id":_id,
      following[] -> {username,image},
      followers[] -> {username,image},
      "bookmarks": bookmarks[] -> _id 
    }`
  );
}
