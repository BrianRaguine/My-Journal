// // App.js File
// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
// import ListGroup from "react-bootstrap/ListGroup";

// class App extends Component {
// 	constructor(props) {
// 		super(props);

// 		// Setting up state
// 		this.state = {
// 			userInput: "",
// 			list: [],
// 		};
// 	}

// 	// Set a user input value
// 	updateInput(value) {
// 		this.setState({
// 			userInput: value,
// 		});
// 	}

// 	// Add item if user input in not empty
// 	addItem() {
// 		if (this.state.userInput !== "") {
// 			const userInput = {
// 				// Add a random id which is used to delete
// 				id: Math.random(),

// 				// Add a user value to list
// 				value: this.state.userInput,
// 			};

// 			// Update list
// 			const list = [...this.state.list];
// 			list.push(userInput);

// 			// reset state
// 			this.setState({
// 				list,
// 				userInput: "",
// 			});
// 		}
// 	}

// 	// Function to delete item from list use id to delete
// 	deleteItem(key) {
// 		const list = [...this.state.list];

// 		// Filter values and leave value which we need to delete
// 		const updateList = list.filter((item) => item.id !== key);

// 		// Update list in state
// 		this.setState({
// 			list: updateList,
// 		});
// 	}

// 	editItem = (index) => {
    
// 	const todos = [...this.state.list];
// 	const editedTodo = prompt('Edit the todo:');
// 	if (editedTodo !== null && editedTodo.trim() !== '') {
// 		let updatedTodos = [...todos]
// 		updatedTodos[index].value= editedTodo
// 		this.setState({
// 		list: updatedTodos,
// 	});
// 	}
// 	}

// 	render() {

// 		return (
    
// 			<Container>
       
// 				<Row
// 					style={{
           
// 						display: "flex",
// 						justifyContent: "center",
// 						alignItems: "left",
// 						fontSize: "2rem",
// 						fontWeight: "bolder",
// 					}}
// 				>
// 					Thoughts for the Day
			

// 				<hr />
// 				<Row>
// 					<Col md={{ span: 20, offset: 0 }}>
// 						<InputGroup className="mb-9">
// 							<FormControl 
//             	type="date" placeholder="mm/dd/yyyyyy" name="date" 

// 								value={this.state.userInput}
// 								onChange={(item) =>
// 									this.updateInput(item.target.value)
// 								}
// 								aria-label="add something"
// 								aria-describedby="basic-addon2"
// 							/>
              
             
              	
// 							<InputGroup>
								
// 							</InputGroup>
// 						</InputGroup>
//             <FormControl 
//             	type="text" placeholder="Add Item...." name="text" 
//               value={this.state.userInput}
// 								onChange={(item) =>
// 									this.updateInput(item.target.value)
// 								}
// 								aria-label="add something"
// 								aria-describedby="basic-addon2"
// 							/>
// 							<InputGroup>
// 							<Button
// 									variant="btn btn-success"
// 									className="mt-2"
// 									onClick={() => this.addItem()}
// 								>
// 									Add+
// 								</Button>
// 							</InputGroup>
// 					</Col>
// 				</Row>
// 				<Row>
// 					<Col md={{ span: 20, offset: 0 }}>
// 						<ListGroup>
// 							{/* map over and print items */}
// 							{this.state.list.map((item, index) => {
// 								return (
// 								<div key = {index} >
// 									<ListGroup.Item
// 										variant="success"
// 										action
// 										style={{display:"left",
// 												justifyContent:'space-between'
// 									}}
// 									>
// 										{item.value}
// 										<span>
// 										<Button style={{marginRight:"10px"}}
// 										variant = "danger"
// 										onClick={() => this.deleteItem(item.id)}>
// 										Delete
// 										</Button>
// 										<Button variant = "success"
// 										onClick={() => this.editItem(index)}>
// 										Edit
// 										</Button>
// 										</span>
// 									</ListGroup.Item>
// 								</div>
// 								);
// 							})}
// 						</ListGroup>
// 					</Col>
// 				</Row>

      
//         </Row>
// 			</Container>

      
  
// 		);
// 	}
// }

// export default App;




import React from 'react'
import { Component } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

class MyApp extends Component{
    constructor() {
        super();
        this.state = {
            todoList: [] // default empty array
        }
    }
    // addTodo: add a new task inside the state
    addTodo = (event)=> {
        event.preventDefault(); // stop default behaviour
        //console.log(event.target.taskTitle.value);
        const data = event.target,
        newTodo = {
            taskTitle: data.taskTitle.value,
            date: data.date.value,
            time: data.time.value
        }
        //console.log(newTodo);
        // updating the array but not re-rendering
        this.state.todoList.push(newTodo);
        // updating state and re-render
        this.setState({
            todoList: this.state.todoList
        })
    }
    // delete todo from the array
    deleteTodo = (event)=> {
        // splice(indexNumber, howmanyTodelete)
        this.state.todoList.splice(event.target.value, 1)
        this.setState({
            todoList: this.state.todoList
        })
    }
    render() {
        console.log(this.state.todoList)
        return(
            <>
            
            <h1>Thoughts of the Day</h1>
    
            <Form onSubmit={this.addTodo}  md={{ span: 20, offset: 1}}>
                <Form.Group controlId="formBasicTaskTitle">
                    <Form.Label>Task Title:</Form.Label>
                    <Form.Control type="text" placeholder="Enter A Task" name="taskTitle"/>
                </Form.Group>
                <Form.Group controlId="formBasicDate">
                    <Form.Label>Task date:</Form.Label>
                    <Form.Control type="date" placeholder="mm/dd/yyyy" name="date"/>
                </Form.Group>
                <Form.Group controlId="formBasicTime">
                    <Form.Label>Task Time:</Form.Label>
                    <Form.Control type="time" placeholder="Enter the Time" name="time"/>
                </Form.Group>
                <Button type="submit" className="btn btn-success">
                    Add+
                </Button>
            </Form>

            <ListGroup>
                {
                    this.state.todoList.map((task, index)=> {
                        return(
                            <ListGroup.Item key={index} variant="success">
                                 {task.taskTitle} at {task.time}, Date: {task.date}
                                 <Button type="button" variant="danger" onClick={this.deleteTodo} value={index}>
                                     Delete
                                 </Button>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        
            </>
        )
    }
}

export default MyApp;
