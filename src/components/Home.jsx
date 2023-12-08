function Home() {
  const handleClick1 = () => {
    window.location.replace('http://localhost:8080');
  };
  const handleClick2 = () => {
    window.location.replace('http://localhost:8088');
  };
  const handleClick3 = () => {
    window.location.replace('http://localhost:8081');
  };
  return (
    <div>
      <button onClick={handleClick1}>Click to Join a meeting</button>
      <button onClick={handleClick2}>Click to Join a Chat</button>
      <button onClick={handleClick3}>Click to See job Offers</button>
    </div>
  );
    
  }
  
  export default Home;