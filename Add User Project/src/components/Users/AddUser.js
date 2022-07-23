import React, { useRef, useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {

	const nameInputRef = useRef();
	const ageInputRef = useRef();

	// const [enteredUsername, setEnteredUsername] = useState("");
	// const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState(false);

	const addUserHandler = (e) => {
		e.preventDefault();

		const enteredUsername = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;

		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
		{
			setError({
				title: "Error",
				message: "Please enter a valid username and age"
			})
			return;
		}

		if (+enteredAge < 1)
		{
			setError({
				title: "Error",
				message: "Please enter a valid age"
			})
			return;
		}

		// console.log(enteredUsername, enteredAge);
		props.onAddUser(enteredUsername, enteredAge);
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";

		// setEnteredAge("");
		// setEnteredUsername("");
	};

	// const usernameChangedHandler = (e) => {
	// 	setEnteredUsername(e.target.value);
	// };

	// const ageChangedHandler = (e) => {
	// 	setEnteredAge(e.target.value);
	// };

	const errorHandler = () => { 
		setError(false);
	}

	return (
		<Wrapper>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onClear={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						id="username"
						// value={enteredUsername}
						// onChange={usernameChangedHandler}
						ref={nameInputRef}
					/>

					<label htmlFor="age">Age</label>
					<input
						type="number"
						name="age"
						id="age"
						// value={enteredAge}
						// onChange={ageChangedHandler}
						ref={ageInputRef}
					/>

					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
