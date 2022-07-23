import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
	const [userList, setUserList] = useState([]);

	const addUserHandler = (name, age) => { 
		setUserList(prevUserList => [...prevUserList, {id: Math.random(), name, age}]);
	}
	
  return (
		<React.Fragment>
			<AddUser onAddUser={addUserHandler} />
			<UserList users={userList} />
		</React.Fragment>
	);

	// Alternative way to do it:
	//  return (
	// 		<>
	// 			<AddUser onAddUser={addUserHandler} />
	// 			<UserList users={userList} />
	// 		</>
	// 	);
}

export default App;
