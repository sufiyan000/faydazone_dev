import { getServerSession } from 'next-auth/next';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';
import LogoutButton from '@/app/ui/LogoutButton'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin');
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <p>Role: {session.user?.role}</p>
      <p>{session.user?.email}</p>
      <p>{session.user?.name}</p>
      <img src={`${session.user?.image}`} width="100px" height="50px" />
      <LogoutButton />
      
    </div>
  );
}
