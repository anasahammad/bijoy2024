

interface Address {
  city: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: Address;
}

interface TableProps {
    users: User[];
  }


const Table: React.FC<TableProps> = ({ users }) => {
  return (
    <table className="border  border-black bg-white">
      <thead className="border-b border-black ">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-semibold  uppercase tracking-wider border border-black">ID</th>
          <th className="px-6 py-3 text-left text-xs font-semibold  uppercase tracking-wider border border-black">Name</th>
          <th className="px-6 py-3 text-left text-xs font-semibold  uppercase tracking-wider border border-black">Email</th>
          <th className="px-6 py-3 text-left text-xs font-semibold  uppercase tracking-wider border border-black">Phone</th>
          <th className="px-6 py-3 text-left text-xs font-semibold  uppercase tracking-wider border border-black">City</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user.id}>
            <td className="px-6 py-4 border border-black text-sm ">{user.id}</td>
            <td className="px-6 py-4 border border-black text-sm ">{user.name}</td>
            <td className="px-6 py-4 border border-black text-sm ">{user.email}</td>
            <td className="px-6 py-4 border border-black text-sm ">{user.phone}</td>
            <td className="px-6 py-4 border border-black text-sm ">{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
