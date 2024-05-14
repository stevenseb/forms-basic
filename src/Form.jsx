import React, { useState } from 'react';

const Form = () => {
  // Define state variables for name, email, and phone
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState(''); //dropdown
  const [role, setRole] = useState(''); //radio button
  const [bio, setBio] = useState('');
  const [subscribe, setSubscribe] = useState(true); //checkbox
  

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.log(bio);
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-label-div">
        <label htmlFor='name'>Name:</label>
        <input id='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="input-label-div">
        <label htmlFor='email'>Email:</label>
        <input id='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-label-div">
        <label htmlFor='phone'>Phone:</label>
        <input id='phone' type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="input-label-div">
      <label htmlFor='phone'>Home/Mobile:    </label>
        <select id='phoneType' onChange={(e) => setPhoneType(e.target.value)} >
          <option value='home'>Home</option>
          <option value='mobile'>Mobile</option>
        </select>
      </div>
      <div className="input-label-div">
      <label>Are you a student or instructor? </label>
				Student <input type='radio' name='role' value={'Student'} onChange={(e) => setRole(e.target.value)} />
				Instructor <input type='radio' name='role' value={'Instructor'} onChange={(e) => setRole(e.target.value)} />
      </div>
      <div className="input-label-div">
				<label>Bio</label>
				<textarea type='text' value={bio} onChange={(e) => setBio(e.target.value)}/>			
      </div>
      <div className="input-label-div">
        <label htmlFor='subscribe'>Subscribe to email notifications: </label>
        <input id='subscribe' type='checkbox' value={subscribe} onChange={(e) => setSubscribe(e.target.value)} />
      </div>



      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
