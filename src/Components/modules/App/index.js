import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from "./redux/actions";
import './index.css'
import {Title} from "../../feature/Title";
import {Counter} from "../../feature/Counter";
import {ControlPanel} from "../../feature/ControlPanel";

class App extends Component {
    render(){
        const {increment, decrement, count} = this.props;
        return(
            <div className="App">
                <Title />
                <Counter count={count}/>
                <ControlPanel increment={() => increment(count)} decrement={() => decrement(count)}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: (count) => dispatch(increment(count)),
    decrement: (count) => dispatch(decrement(count))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
