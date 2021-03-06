import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button 
            id="inc" 
            className="btn btn-primary btn-lg"
            onClick={inc}
            >
                INC</button>
            <button 
            id="dec" 
            className="btn btn-primary btn-lg" 
            onClick={dec}>
                DEC</button>
            <button 
            id="rnd" 
            className="btn btn-primary btn-lg" 
            onClick={rnd}>
                RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {

    const {inc, dec, rnd} = bindActionCreators(actions, dispatch)

    return {
        inc,
        dec,
        rnd
    }

    //we can do it this way return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)