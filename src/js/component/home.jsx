import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	const [tasks, setTask] = useState([]);
	const [input, setInput] = useState("");

	const deleter = (task) => {
		let filteredTasks = tasks.filter((item) => item != task);
		setTask(filteredTasks);
	};
	return (
		<div className="card">
			<div className="card-body">
				<h2 className="card-title">Todo List</h2>
				<div>
					<input
						onChange={(e) => setInput(e.target.value)}
						value={input}
						placeholder="Add New Task"
						onKeyDown={(e) => {
							if (e.code === "Enter") {
								e.preventDefault();

								setTask([...tasks, e.target.value]);
								setInput("");
							}
						}}
					/>
				</div>

				<div>
					<ul>
						{tasks.map((item, i) => (
							<li key={i}>
								{item}{" "}
								<i
									onClick={() => deleter(item)}
									className="fas fa-trash"></i>{" "}
							</li>
						))}
					</ul>
				</div>

				<div>
					{" "}
					{tasks.length === 0
						? "No tasks, add a tasks"
						: tasks.length + " " + "items left"}
				</div>
			</div>
		</div>
	);
};

export default Home;
