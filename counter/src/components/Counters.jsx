import React, {Component} from 'react'
import Counter from './Counter'

class Counters extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleReset} className="btn btn-primary m-2">
                    Reset
                </button>
                <button onClick={this.props.handleAdd} className="btn btn-secondary m-2">
                Add
            </button>
                {this.props.counters.map(counter =>
                    <Counter key={counter.id}
                             onDelete={this.props.handleDelete}
                             onInc={this.props.handleInc}
                             onDec={this.props.handleDec}
                             counter={counter}>
                        <h4>Counter #{counter.id}</h4>
                    </Counter>)
                }
            </div>
        );
    }
}

export default Counters;