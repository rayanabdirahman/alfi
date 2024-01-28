import React from 'react';
import { Link } from '@remix-run/react';
import { Button } from '../ui/button';

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="h-screen bg-neutral-900 px-20 pt-8">
      <Link to="/" className="text-xl font-bold text-white">
        Alfi
      </Link>

      <section className="container py-24 mx-auto flex flex-col items-center text-center ">
        {children}
      </section>
    </div>
  );
}
