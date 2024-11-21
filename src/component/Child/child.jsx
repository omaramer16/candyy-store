import React, { Component } from 'react'

export default class child extends Component {
    state={
       count:0
    }
    increase=()=>{
        let data= this.state.count
        data++;
        this.setState({count:data})
    }
  render() {
    return<>
    
    
    <h1>class: {this.state.count}</h1>
    <button className='btn btn-info' onClick={this.increase}>increase</button>
    
    
    </>
  }
}
