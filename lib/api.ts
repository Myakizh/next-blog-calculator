import { Post, User, Comment } from "@/lib/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export async function getPost(id: string): Promise<Post> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  return res.json();
}

export async function getComments(postId: number): Promise<Comment[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`${BASE_URL}/comments?postId=${postId}`);
  return res.json();
}

export async function getUser(userId: number): Promise<User> {
  const res = await fetch(`${BASE_URL}/users/${userId}`);
  return res.json();
}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
}

export async function getUsers(): Promise<User[]> {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
}
