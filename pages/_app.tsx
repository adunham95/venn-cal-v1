import '@/styles/globals.css'
import { Database } from '@/types/supabase'
import { Session, createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps<{
  initialSession: Session
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient<Database>())
  return  <SessionContextProvider
  supabaseClient={supabaseClient}
  initialSession={pageProps.initialSession}
><Component {...pageProps} />
</SessionContextProvider>
}
