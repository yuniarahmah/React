import React from "react";

function event(props) {
  const handleClick = () => {
    alert("Berhasil!!");
  };

  function MissedGoal() {
    return <h1>MISSED!</h1>;
  }

  function MadeGoal() {
    return <h1>Goal!!</h1>;
  }

  function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
      return <MadeGoal />;
    }
    return <MissedGoal />;
  }

  return (
    <div style={{textAlign: 'center', color: 'red'}}>
      <button  onClick={handleClick}>Click here</button>
    </div>
  )
}

export default event