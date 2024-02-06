function List() {
  const cars = [
    "BMW",
    "Ayla",
    "Volvo",
    "civic",
    "fortuner",
    "alpart",
    "pajero",
  ];
  const users = [
    {
      username: "Alfy",
      email: "email@gmail.com",
      alamat: "jalan kenanga",
    },
    {
      username: "Andi",
      email: "email@gmail.com",
      alamat: "jalan kenanga",
    },
    {
      username: "Wahyu",
      email: "email@gmail.com",
      alamat: "jalan kenanga",
    },
    {
      username: "Chandra",
      email: "email@gmail.com",
      alamat: "jalan kenanga",
    },
  ];
  return (
    <>
      {/* <h2>Tabel</h2>
        <ul>
          {cars.map((car) => (
            <li>My Car is {car}</li>
          ))}
        </ul> */}
      <h2 style={{marginLeft: '30rem'}}>Tabel</h2>
      <table>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Alamat</th>
        </tr>
          {users.map((user, no) => (
        <tr>
            <td>{no + 11}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.alamat}</td>
        </tr>
          ))}
      </table>
    </>
  );
}

export default List;
