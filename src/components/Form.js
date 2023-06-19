import React, { useState } from "react";
import "./Form.css";
import PropTypes from "prop-types";

function Form(props) {
  const [enteredUser, setEnteredUser] = useState("");
  const onChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.whenSubmitted(enteredUser);
  };
  //console.log(enteredUser);
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>GitHub username</label>

        <input
          type={"text"}
          placeholder={"e.g. facebook"}
          value={enteredUser}
          onChange={onChangeHandler}
          required={true}
        ></input>

        <button>Search</button>
      </form>
    </>
  );
}

Form.propTypes = {
  whenSubmitted: PropTypes.func,
};

export default Form;
