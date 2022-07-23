import React from "react";
import ReactDOM from "react-dom"; 

import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
	return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={classes.content}>
				<p>{props.message}</p>
			</div>
			<footer className={classes.actions}>
				<Button type="button" onClick={props.onClear}>
					Okay
				</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop />,
				document.querySelector("#backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay onClear={props.onClear} title={ props.title} message={props.message} />,
				document.querySelector("#overlay-root")
			)}
		</React.Fragment>
	);
};

export default ErrorModal;
