import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Akzcart' },
    { name: 'description', content: 'Akzcart web application' },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Akzcart</h1>
    </div>
  );
}
