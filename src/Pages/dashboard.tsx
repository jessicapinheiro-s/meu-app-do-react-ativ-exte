import MenuHeader from '../components/header/header';

interface Session {
  user: {
    id?: string;
    email?: string | undefined;
  };
  // Add any other properties of the session if needed
}
export default function Dashboard({ session }: { session: Session }) {

  const userName = session.user.email;
  return (
    <div className='container-geral'>
      <MenuHeader nome='jessica' />
      <h1>hi ${userName}</h1>
    </div>

  )
}
