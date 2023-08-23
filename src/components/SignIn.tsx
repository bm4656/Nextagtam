'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import ColorButton from './ColorButton';

type Props = {
  providers: Record<string, ClientSafeProvider>;
};

export default function SignIn({ providers }: Props) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <ColorButton
          key={provider.name}
          text={`Sign in with ${provider.name}`}
          clickFn={() => signIn(provider.id)}
        />
      ))}
    </>
  );
}
