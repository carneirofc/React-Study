import React, {Component} from "react";

class Counter extends Component {
    // Everytime a state is changed the object render() will be called asynchronous

    state = {
        // value: this.props.counter.value, //Now this is controlled by the parent obj
        tags: ["tag1", "tag2", "tag3"],
        imgUrl: "https://picsum.photos/20",
        aParam: "anything ..."
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold",
        width: 100
    };

    formatCount() {
        if (this.props.counter.value <= 0) {
            return "Zero";
        }
        return this.props.counter.value;
    }

    getButtonClass() {
        const {count} = this.props.counter.value;
        let btnClass = "";
        if (count === 0) {
            btnClass = "primary";
        } else {
            btnClass = "warning";
        }

        return "m-1 btn btn-" + btnClass;
    }

    /*
        We pass the function as reference.
        Standard methods have a react equivalent.

        We can make an ul by looping in the javascript.
      */
    funcWithParams = (param) => {
        this.setState({aParam: param.aParam});
    };

    render() {
        const {children, counter, onDelete, onInc, onDec} = this.props;
        return (
            <div>
                {children}
                <span style={this.styles} className="badge badge-primary m-2">
                    {this.formatCount()}
                </span>
                <button onClick={() => {
                    onInc(counter)
                }} className={this.getButtonClass()}>
                    +
                </button>
                <button onClick={() => {
                    onDec(counter)
                }} className="btn btn-primary m-1">
                    -
                </button>
                <button
                    onClick={() => onDelete(counter.id)}
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
                {/*<ul>*/}
                {/*<li>*/}
                {/*<img src={this.state.imgUrl} alt="Random"/>*/}
                {/*</li>*/}
                {/*{this.state.tags.map(tag => (*/}
                {/*<li key={tag}>{tag}</li>*/}
                {/*))}*/}
                {/*</ul>*/}
                {/*<div>*/}
                {/*<button onClick={() => {*/}
                {/*this.funcWithParams({aParam: "Another param ..."})*/}
                {/*}}>*/}
                {/*Lambda*/}
                {/*</button>*/}
                {/*<span>{this.state.aParam} </span>*/}
                {/*</div>*/}

            </div>
        );
    }
}

export default Counter;
