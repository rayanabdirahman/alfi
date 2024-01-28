import { Link } from '@remix-run/react';
import { BRAND_NAME } from '~/config';
import Button from '../../../components/button';
import { Routes } from '~/enums/routes';

interface Props {}

export default function MainNav({}: Props) {
  return (
    <div>
      <div className="container mx-auto flex h-20 items-center px-4 justify-between">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link to="/" className="text-lg font-bold">
            {BRAND_NAME}
          </Link>
        </nav>
        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link to={Routes.Login}>Login</Link>
          </Button>
          <Button asChild>
            <Link to={Routes.SignUp}>Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
