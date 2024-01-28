import { Link } from '@remix-run/react';
import { Button } from './ui/button';

const menuItems: { label: string; href: string; active?: boolean }[] = [
  {
    label: 'Transactions',
    href: '/transactions',
    active: true
  },
  {
    label: 'Accounts',
    href: '/accounts'
  },
  {
    label: 'Categories',
    href: '/categories'
  }
];

interface Props {}

export default function MainNav({}: Props) {
  return (
    // <div className="border-b">
    <div>
      <div className="container mx-auto flex h-20 items-center px-4 justify-between">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link to="/" className="text-lg font-bold">
            Alfi
          </Link>
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={
                item.active
                  ? 'text-sm font-medium transition-colors hover:text-primary'
                  : 'text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-x-4">
          <Button asChild className="rounded-full" variant="ghost">
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button asChild className="rounded-full">
            <Link to="/auth/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}