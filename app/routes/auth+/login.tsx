import { Link } from '@remix-run/react';
import AuthLayout from '~/components/layout/auth-layout';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Routes } from '~/enums/routes';

export default function LoginPage() {
  return (
    <AuthLayout>
      <h1 className="mb-2 text-2xl font-semibold text-white">
        Navigate your finaces <br /> with confidence
      </h1>
      <p className="text-white">
        Connect all your accounts & track your spending
      </p>

      <div className="mt-5 space-y-5 w-80">
        <Input
          className="rounded-lg py-6 bg-neutral-800 border-neutral-800"
          placeholder="Email address"
        />
        <Input
          className="rounded-lg py-6 bg-neutral-800 border-neutral-800"
          placeholder="Password"
        />

        <Button variant="secondary" className="w-full py-6 rounded-full">
          Sign in
        </Button>
        <div className="text-white">
          Dont have an account?{' '}
          <Link to={Routes.SignUp} className="font-semibold underline">
            Sign up
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
