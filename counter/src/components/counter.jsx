import React, {Component} from "react";

class Counter extends Component {
    // Everytime a state is changed the object render() will be called asynchronous
    state = {
        count: 1,
        tags: ["tag1", "tag2", "tag3"],
        imgUrl: "https://picsum.photos/20"
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    };

    formatCount() {
        if (this.state.count <= 0) {
            return "Zero";
        }
        return this.state.count;
    }

    getButtonClass() {
        const {count} = this.state.count;
        var btnClass = "";
        if (count === 0) {
            btnClass = "primary";
        } else {
            btnClass = "warning";
        }

        return "m-1 btn btn-" + btnClass;
    }

    // Create functions with lambda so we get the correct this reference
    inc = () => {
        // Use setState to update states outside the contructor method
        this.setState((prevState, props) => {
            return {count: (prevState.count += 1)};
        });
    };

    dec = () => {
        this.setState((prevState, props) => {
            let newVal;
            if (prevState.count !== 0) {
                newVal = prevState.count - 1;
            } else {
                newVal = prevState.count;
            }
            return {count: newVal};
        });
    };

    /*
        We pass the function as reference.
        Standard methods have a react equivalent.

        We can make an ul by looping in the javascript.
      */
    render() {
        return (
            <div>
                <button onClick={this.inc} className={this.getButtonClass()}>
                    +
                </button>
                <button onClick={this.dec} className="btn btn-primary m-1">
                    -
                </button>
                <ul>
                    <li>
                        <img src={this.state.imgUrl}/>
                    </li>
                    {this.state.tags.map(tag => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
                <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
            </div>
        );
    }
}

export default Counter;
