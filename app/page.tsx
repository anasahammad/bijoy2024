import Table from "./components/Table";





export default async function Home() {

  const res = await fetch ("https://jsonplaceholder.typicode.com/users")
  const users = await res.json() 

  return (
    <div className="container mx-auto">
        <div className=" my-12">
          <h1 className="text-4xl font-bold text-center mb-6">All Users</h1>
           <div className="flex justify-center items-center">
           <Table users={users}/>
           </div>
        </div>
    </div>
  );
}
