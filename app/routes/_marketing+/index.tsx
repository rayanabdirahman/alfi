import type { MetaFunction } from '@remix-run/node';
import Button from '~/components/button';
import MainNav from '~/routes/_marketing+/components/main-nav';

export const meta: MetaFunction = () => {
  return [
    { title: 'Marketing pages' },
    { name: 'description', content: 'Welcome to Remix!' }
  ];
};

export default function Index() {
  return (
    <div>
      <MainNav />
      {/* Hero section */}
      <section className="container py-20 mx-auto flex flex-col items-center space-y-5 text-center ">
        <div className="rounded-full bg-neutral-200 px-4 py-1 text-center font-normal">
          Coming soon
        </div>
        <div>
          <h1 className="mb-4 text-6xl font-semibold">
            Make sense of your <br /> finances
          </h1>
          <p className="text-lg font-normal">
            Interacting with your money has never been so simple
          </p>
        </div>
        <Button>Get started</Button>
      </section>

      {/* Onboarding section */}
      <section className="container px-4 py-16 space-y-8">
        <h2 className="text-2xl font-semibold">
          Effortless onboarding. <br /> Connect your bank accounts
        </h2>
        <div className="grid grid-col-4 grid-flow-col gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="py-48 rounded-xl bg-neutral-300"></div>
          ))}
        </div>
      </section>

      {/* Transactions section */}
      <section className="container px-4 py-16 space-y-8">
        <h2 className="text-2xl font-semibold">
          Your transactions. <br /> All in one place
        </h2>
        <div className="grid grid-col-4 grid-flow-col gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className=" py-48 rounded-xl bg-neutral-300"></div>
          ))}
        </div>
      </section>
    </div>
  );
}
