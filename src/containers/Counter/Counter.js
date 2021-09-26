import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions'
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <h5>Suprise MDFK !!</h5>
                <ul>
                    {this.props.StoreResults.map(result=>(
                    <li 
                    key={result.id}
                    onClick={()=>(this.props.onDeleteResult(result.id))} 
                    >{result.value}</li>))}
                </ul>
            </div>
            
        );
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onIncrementCounter : ()=>dispatch({type:actionTypes.INCREMENT}),
        onAddCounter : ()=>dispatch({type:actionTypes.ADD,val:5}),
        onSubCounter : ()=>dispatch({type:actionTypes.SUBTRACT,val:5}),
        onDecrementCounter : ()=>dispatch({type:actionTypes.DECREMENT}),
        onStoreResult : (result) =>dispatch({type:actionTypes.STORE_RESULT,result:result}),
        onDeleteResult : (DelElid) =>dispatch({type:actionTypes.DELETE_RESULT,DelElid:DelElid})
    }    
   
}

const mapStateToProps = state=>{
    return{
        ctr: state.ctr.counter,
        StoreResults: state.res.results
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Counter);