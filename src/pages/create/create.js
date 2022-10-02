import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    eventName: "",
    hostName: "",
    startTime: "",
    endTime: "",
    location: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/event", { state: formValues });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            value={formValues?.eventName}
            onChange={handleChange}
            type="text"
            name="event name"
          />
        </label>
        <label>
          Host Name:
          <input
            value={formValues?.hostName}
            onChange={handleChange}
            type="text"
            name="host name"
          />
        </label>
        <label>
          Start Time:{" "}
          <input
            value={formValues?.startTime}
            onChange={handleChange}
            type="time"
            name="start time"
          />
        </label>
        <label>
          End Time: value={formValues?.endTime}
          onChange={handleChange} <input type="time" name="end time" />
        </label>
        <label>
          Location: value={formValues?.location}
          onChange={handleChange} <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Create;
