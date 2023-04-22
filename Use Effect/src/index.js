import React from "react";
import ReactDOM from "react-dom/client";
import AuthContext from "./store/auth-context";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AuthContext.Provider>
		<App />
	</AuthContext.Provider>
);
