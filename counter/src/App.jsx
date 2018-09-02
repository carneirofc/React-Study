import React, {Component} from 'react'
import Counters from './components/Counters'
import NavBar from './components/NabBar'

class App extends Component {
    constructor() {
        super();
        this.state = {
            counters: [
                {id: 0, value: 10},
                {id: 1, value: 8},
                {id: 2, value: 16},
                {id: 3, value: 10},
                {id: 4, value: 12}
            ]
        };
    }

    handleDeleteCounter = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        const total = this.countersTotal(counters);
        this.setState({counters, total});
    };

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({counters});
    };
    handleAdd = () => {
        // Use setState to update states outside the contructor method
        // let counters = [...this.state.counters];
        // const index = counters.indexOf(counter);
        // counters[index] = {...counter};
        // counters[index].value++;
        // this.setState({counters});
    };
    handleInc = (counter) => {
        // Use setState to update states outside the contructor method
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };

    handleDec = (counter) => {
        if(counter.value > 0){
            const counters = [...this.state.counters];
            const index = counters.indexOf(counter);
            counters[index] = {...counter};
            counters[index].value--;
            this.setState({counters});
        }
    };

    countersTotal = () => {
        let total = 0;
        this.state.counters.forEach(counter => {
            total += counter.value;
        });
        return total;
    };

    render() {
        return (
            <div>
                <NavBar val={this.countersTotal()}/>
                <main className="container">
                    <Counters
                        handleReset={this.handleReset}
                        handleInc={this.handleInc}
                        handleDec={this.handleDec}
                        handleDelete={this.handleDeleteCounter}
                        counters={this.state.counters}
                    />
                </main>
            </div>
        );
    };
}

export default App;