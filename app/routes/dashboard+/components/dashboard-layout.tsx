import React from 'react';
import MainNav from './main-nav';
import UserNav from './user-nav';

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="border-b">
        <div className="container mx-auto flex h-20 items-center px-2">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>

      <main className="container mx-auto flex pt-8 px-2">{children}</main>
    </>
  );
}
