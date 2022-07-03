import React, { useState } from "react";

// section to add your educational experience (school name, title of study, date of study)
export default function Educational(props) {
  const [school, setSchool] = useState();
  const [titleStudy, setTitleStudy] = useState();
  const [dateStudy, setDateStudy] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    // send data to App component
    props.setData({
      ...props.data,
      school,
      titleStudy,
      dateStudy,
    });
  }

  return (
    <form className="Educational" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="school"
        onChange={(e) => setSchool(e.target.value)}
        value={school}
      />
      <input
        type="text"
        placeholder="titleStudy"
        onChange={(e) => setTitleStudy(e.target.value)}
        value={titleStudy}
      />
      <input
        type="date"
        placeholder="dateStudy"
        onChange={(e) => setDateStudy(e.target.value)}
        value={dateStudy}
      />

      <button type="submit">Next</button>
    </form>
  );
}
