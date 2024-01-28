import React from 'react';
import { Link } from '@remix-run/react';
import { BRAND_NAME } from '~/config';
import { Routes } from '~/enums/routes';

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="h-screen bg-neutral-900 px-20 pt-8">
      <Link to={Routes.Home} className="text-xl font-bold text-white">
        {BRAND_NAME}
      </Link>

      <section className="container py-24 mx-auto flex flex-col items-center text-center ">
        {children}
      </section>
    </div>
  );
}
