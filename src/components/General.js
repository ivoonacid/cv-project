import React, { useState } from "react";

// section to add general information like name, age, email, phone number
export default function General(props) {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    // send data to App component
    props.setData({
      ...props.data,
      name,
      age,
      email,
      phone,
    });
  }

  return (
    <form className="General" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
      />
      <input
        type="number"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        required
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <input
        type="number"
        placeholder="phone"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        required
      />
      <button type="submit">Next</button>
    </form>
  );
}
