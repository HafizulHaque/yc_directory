import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  let query = (await searchParams).query

  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Hafizul Haque'},
      image: "https://artfiles.alphacoders.com/306/thumb-1920-30632.jpg",
      category: 'Robots',
      title: 'We Robots',
      description: 'Some awesome descriptiion about robots'
    },
    {
      _id: 2,
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Hafizul Haque'},
      image: "https://artfiles.alphacoders.com/306/thumb-1920-30632.jpg",
      category: 'Robots',
      title: 'We Robots',
      description: 'Some awesome descriptiion about robots'
    },
    {
      _id: 3,
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Hafizul Haque'},
      image: "https://artfiles.alphacoders.com/306/thumb-1920-30632.jpg",
      category: 'Robots',
      title: 'We Robots',
      description: 'Some awesome descriptiion about robots'
    },
  ]

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
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post}/>
            )) 
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
