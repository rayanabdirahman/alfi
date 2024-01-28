import { Link } from '@remix-run/react';
import Button from '~/components/button';
import AuthLayout from '~/routes/auth+/components/auth-layout';
import { Input } from '~/components/ui/input';
import { Routes } from '~/enums/routes';

export default function SignupPage() {
  return (
    <AuthLayout>
      <h1 className="mb-2 text-2xl font-semibold text-white">
        Navigate your finaces <br /> with confidence
      </h1>
      <p className="text-neutral-400">
        Connect all your accounts & track your spending
      </p>

      <div className="mt-5 space-y-5 w-80">
        <Input
          className="rounded-lg py-6 bg-neutral-800 border-neutral-800 text-white"
          placeholder="Full name"
        />
        <Input
          className="rounded-lg py-6 bg-neutral-800 border-neutral-800 text-white"
          placeholder="Email address"
        />
        <Input
          className="rounded-lg py-6 bg-neutral-800 border-neutral-800"
          placeholder="Password"
        />

        <Button variant="secondary" className="w-full py-6">
          Sign up
        </Button>
        <div className="text-white">
          Already have an account?{' '}
          <Link to={Routes.Login} className="font-semibold underline">
            Login
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
