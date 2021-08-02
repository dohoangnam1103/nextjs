import Head from "next/head";

function Page({ data }) {
  console.log(data.data[0].first_name);
  return (
    <div>
      <Head>
        <title>{data.data[0].first_name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:url"
          content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="When Great Minds Don’t Think Alike"
        />
        <meta
          property="og:description"
          content="How much does culture influence creative thinking?"
        />
        <meta
          property="og:image"
          content="https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/229708797_4320125878033318_8841089149354840855_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=BN_PPe_CuFYAX-tu-aP&_nc_ht=scontent-sin6-1.xx&oh=d75a8803318aa98e573cb308f6d390bd&oe=612D77E6"
        />
      </Head>

      <div>hello {data.data[0].first_name}</div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://reqres.in/api/users?page=2`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
