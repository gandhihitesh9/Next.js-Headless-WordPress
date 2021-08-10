import client from '../src/apollo/client';
import { GET_MENUS } from '../src/queries/get-menus';

export default function Home({menus}) {
  console.log(menus);
  return (
    <div>
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Back End Developer
      </h2>
    </div>
  )
}

export async function getStaticProps(context) {
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS
  });
  
  return {
    props: {
      menus: {
        headerMenus: data?.headerMenus?.edges,
        footerMenus: data?.footerMenus?.edges
      }
    }, // will be passed to the page component as props
  }
}