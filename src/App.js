import "./App.css";
import Todos from "./components/Todos";
import React, { Component } from "react";
import Header from "./components/layout/header";
import AddTodos from "./components/AddTodos";

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: "Jugar con WD",
				completed: false,
			},
			{
				id: 2,
				title: "Perder con void-spirit",
				completed: false,
			},
			{
				id: 3,
				title: "No cachar",
				completed: false,
			},
		],
	};

	// Toggle complete
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	// Delete todo
	delTodo = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)],
		});
	};

	// Add todo
	addTodo = (title) => {
		const newTodo = {
			id: 4,
			title: title,
			complete: false,
		};
		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	render() {
		return (
			<div className="App">
				<div className="container">
					<Header />
					<AddTodos addTodo={this.addTodo} />
					<Todos
						todos={this.state.todos}
						markComplete={this.markComplete}
						delTodo={this.delTodo}
					/>
				</div>
			</div>
		);
	}
}

export default App;
