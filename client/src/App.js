import React, { useEffect, useState } from 'react';
import {connectWallet,createbloodbank} from './config';
function App() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [account, setAccount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, location);
    // You can perform any actions with the form data here
   // call createbloodbank function
    await createbloodbank(name, location); 
  };
  const handleConnectWallet = async (e) => {
    e.preventDefault();
    // call connectWallet function
    await connectWallet().then((account) => setAccount(account));
    console.log(account)
  }

  // useEffect(() => {
  //   // call the function to connect the wallet
    

  // }, []);

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={handleConnectWallet}>Connect Wallet</button>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
