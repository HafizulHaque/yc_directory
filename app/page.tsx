import ClientComponent from "./components/ClientComponent";

export default function Home() {
  console.log(`server/client? --server`)
  return (
    <>
      <p>What am i Doing here.</p>
      <ClientComponent/>
    </>
  );
}
