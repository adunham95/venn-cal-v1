import { count } from 'console';
import { supabase } from '../lib/supabaseClient';

export async function getCountries() {
  return await supabase.from('countries').select('id, name');
}

type CountriesResponse = Awaited<ReturnType<typeof getCountries>>;
export type CountriesResponseSuccess = CountriesResponse['data'];

function Page({ countries }: { countries: CountriesResponseSuccess[] }) {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id}>{country.name}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  const { data } = await getCountries();

  return {
    props: {
      countries: data || [],
    },
  };
}

export default Page;
