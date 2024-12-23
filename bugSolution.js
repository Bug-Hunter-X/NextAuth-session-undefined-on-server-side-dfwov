```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';

export default async function Page({params}){
  const session = await unstable_getServerSession(authOptions);
  console.log('session:', session);

  // Conditional rendering based on session
  if (session) {
    return <div>Hello {session.user.name}</div>;
  } else {
    return <div>Please log in</div>;
  }
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  return {
    props: {
      session,
    },
  };
}
```