function Map() {
  const makanans = [
    {
      nama: "Soto",
      harga: 12000,
    },
    {
      nama: "Bakso",
      harga: 10000,
    },
    {
      nama: "Mie Ayam",
      harga: 7000,
    },
    {
      nama: "Nasi Goreng",
      harga: 15000,
    },
  ];

  //reduce
  const total_bayar = makanans.reduce((total_harga, makanan) =>total_harga + makanan.harga, 0)
  
  return (
    <>
      <h2>Tabel daftar makanan</h2>
      <table>
        <tr>
          <th>No</th>
          <th>nama makanan</th>
          <th>harga</th>
        </tr>
        {makanans
        .filter((makanan) => makanan.harga < 13000)
        .map((makanan, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{makanan.nama}</td>
            <td>{makanan.harga}</td>
          </tr>
        ))}
      </table>
      <h1>Total Harga Makanan :{total_bayar}</h1>
    </>
  )
}

export default Map;