import { GET } from '@/app/api/auth/[...nextauth]/route';
import SignIn from '@/components/SignIn';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default async function SigninPage() {
  const session = await getServerSession(GET);

  if (session) return redirect('/');

  const providers = (await getProviders()) ?? {};

  return <SignIn providers={providers} />;
}
