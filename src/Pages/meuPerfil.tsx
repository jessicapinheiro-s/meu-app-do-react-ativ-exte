import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import MenuHeader from '../components/header/header';

interface Session {
  user: {
    id: string;
    email: string | undefined;
  };
  // Add any other properties of the session if needed
}

export default function MeuPerfil({ session }: { session: Session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [website, setWebsite] = useState('')

  useEffect(() => {
    let isMounted = true;

    async function getProfile() {
      setLoading(true);
      const { user } = session;

      try {
        const { data, error } = await supabase
          .from('profiles')
          .select(`username, website, avatar_url`)
          .eq('id', user.id)
          .single();

        if (isMounted && !error && data) {
          setUsername(data.username);
          setWebsite(data.website);
        } else if (error) {
          console.warn(error);
        }
      } finally {
        setLoading(false);
      }
    }

    getProfile();

    return () => {
      isMounted = false;
    };
  }, [session]);

  // Mova a função updateProfile para fora do useEffect
  async function updateProfile(event: any) {
    event.preventDefault()

    setLoading(true)
    const { user } = session;
    console.log(user);

    const updates = {
      id: user.id,
      username,
      website,
      updated_at: new Date(),
    }

    const { error } = await supabase.from('profiles').upsert(updates)

  }

  return (
    <div>
      <MenuHeader nome='jessica' />
      <form onSubmit={updateProfile} className="form-widget">
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={session.user.email} disabled />
        </div>
        <div>
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            required
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="url"
            value={website || ''}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div>
          <button className="button block primary" type="submit" disabled={loading}>
            {loading ? 'Loading ...' : 'Update'}
          </button>
        </div>

        <div>
          <button className="button block" type="button" onClick={() => supabase.auth.signOut()}>
            Sign Out
          </button>
        </div>
      </form>
    </div>
  )
}
