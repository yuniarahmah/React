function Intro(props) {
    return (
      <>
      <div className="first">
      <p style={{fontWeight: "bold", fontSize: "30px"}}>Profile</p>
        <p style={{ margin: "3px 0" }}>
          <strong style={{fontSize: "15px"}}>Nama Saya:</strong> {props.nama}
        </p>
        <p style={{ margin: "3px 0" }}>
          <strong style={{fontSize: "15px"}}>Nama Sekolah:</strong> {props.sekolah}
        </p>
        <p style={{ margin: "3px 0" }}>
          <strong style={{fontSize: "15px"}}>Nama Kelas: </strong> {props.kelas}
        </p>
      </div>
      </>     
    )
  }
  
  export default Intro;