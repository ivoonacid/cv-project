import React, { useState } from "react";

// section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
export default function Practical(props) {
  const [company, setCompany] = useState();
  const [positionTitle, setPositionTitle] = useState();
  const [mainTasks, setMainTasks] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    // send data to App component
    props.setData({
      ...props.data,
      company,
      positionTitle,
      mainTasks,
      startDate,
      endDate,
    });
  }

  return (
    <form className="Practical" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="company"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      />
      <input
        type="text"
        placeholder="mainTasks"
        onChange={(e) => setMainTasks(e.target.value)}
        value={mainTasks}
      />
      <input
        type="text"
        placeholder="positionTitle"
        onChange={(e) => setPositionTitle(e.target.value)}
        value={positionTitle}
      />
      <input
        type="date"
        placeholder="startDate"
        onChange={(e) => setStartDate(e.target.value)}
        value={startDate}
      />
      <input
        type="date"
        placeholder="endDate"
        onChange={(e) => setEndDate(e.target.value)}
        value={endDate}
      />

      <button type="submit">Next</button>
    </form>
  );
}
