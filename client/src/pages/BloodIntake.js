import React, { useState } from 'react';
import { createbloodbank } from '../config'; // Assuming your config file is correctly set up

function BloodIntake() {
  const [name, setName] = useState('');
  const [bloodId, setBloodId] = useState('');
  const [batchNo, setBatchNo] = useState('');
  const [adharNumber, setAdharNumber] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call the createbloodbank function from your config file
      await createbloodbank(name, bloodId, batchNo, adharNumber, bloodGroup, false);

      // Clear form fields after successful submission
      setName('');
      setBloodId('');
      setBatchNo('');
      setAdharNumber('');
      setBloodGroup('');
    } catch (error) {
      console.error('Error adding donor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Blood ID:
        <input type="text" value={bloodId} onChange={(e) => setBloodId(e.target.value)} required />
      </label>
      <br />
      <label>
        Batch No.:
        <input type="text" value={batchNo} onChange={(e) => setBatchNo(e.target.value)} required />
      </label>
      <br />
      <label>
        Adhar Number:
        <input type="text" value={adharNumber} onChange={(e) => setAdharNumber(e.target.value)} required />
      </label>
      <br />
      <label>
        Blood Group:
        <input type="text" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BloodIntake;

