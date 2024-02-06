function Tugas() {
    const makanans = [
      {
        nama: "Nasi Padang",
        harga: 15000,
      },
      {
        nama: "Sego megono",
        harga: 5000,
      },
      {
        nama: "sego lamongan",
        harga: 20000,
      },
      {
        nama: "seblak",
        harga: 10000,
      },
      {
        nama: "Ayam Geprek",
        harga: 6000,
      },
    ];
  
    //reduce
    const total_bayar = makanans.reduce((total_harga, makanan) =>total_harga + makanan.harga, 0)
    
    return (
      <>
        <h1>Daftar Makanan</h1>
        {/* <p>Daftar Menu</p> */}
        <table>
          <tr>
            <th>No</th>
            <th>nama makanan</th>
            <th>harga</th>
          </tr>
          {makanans.map((makanan, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.harga}</td>
            </tr>
          ))}
        </table>

        <h1>Daftar Makanan dibawah 10.000</h1>
        <table>
          <tr>
            <th>No</th>
            <th>nama makanan</th>
            <th>harga</th>
          </tr>
          {makanans
          .filter((makanan) => makanan.harga < 10000)
          .map((makanan, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.harga}</td>
            </tr>
          ))}
        </table>
        <h3>Total Harga Makanan :{total_bayar}</h3>
      </>
    )
  }
  
  export default Tugas;