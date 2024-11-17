import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERY } from "@/sanity/lib/queries";


export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  let query = (await searchParams).query
  const { data: posts } = (await sanityFetch({query: STARTUP_QUERY})) as unknown as { data: Array<StartupCardType> } 

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup, <br/>Connect with Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : `All Startups`}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => <StartupCard key={index} post={post}/>) 
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
      <SanityLive/>
    </>
  );
}
