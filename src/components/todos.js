import React, {Component} from "react";

export default class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [], text: '' };
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(e) {
        e.preventDefault();
        let item = e.target[0].value;
        if (item){
            this.setState({
                todos: [ this.state.text, ...this.state.todos ],
                text: ''
            });
        }
    }

    removeTodo(name, i){
        let todos = this.state.todos.slice();
        todos.splice(i, 1);
        this.setState({
            todos
        });
    }

    updateValue(e) {
        this.setState({ text: e.target.value})
    }

    render() {
        return(
            <div>
                <form onSubmit = {(e) => this.addTodo(e)}>
                    <input
                        value={this.state.text}
                        onChange={(e) => {this.updateValue(e)}}
                    />
                    <button type="submit">Добавить задачу</button>
                </form>
                <Todolist todos={this.state.todos} removeTodo={this.removeTodo}/>
            </div>
        );
    }
}

class Todolist extends Component {
    removeItem(item, i) {
        this.props.removeTodo(item, i);
    }
    render() {
        return(
            <ul>
                { this.props.todos.map((todo,i) => {
                    return <li onClick={() => { this.removeItem(todo, i)}} key={i}>{ todo }</li>
                })}
            </ul>
        );
    }
}