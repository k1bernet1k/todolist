import React, {Component} from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';


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
                <form class="row g-3"
                    onSubmit = {(e) => this.addTodo(e)}>
                    <div className="col-auto">
                    <input
                        // className="form-control"
                        className="form-control"

                        value={this.state.text}
                        onChange={(e) => {this.updateValue(e)}}
                    />
                    </div>
                    <div className="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Добавить задачу</button>
                    </div>
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