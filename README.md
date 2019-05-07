Simple Tutorial in react explain how to use props, state, setState, key (in delete function)
===

Demo
---


![alt text](https://github.com/akkaoui-abdou/tuto-react-state-key-props/blob/master/Demo.png)

props
state
setState
key

First step install react 
---

for install react use this commande in Terminal:

npm init react-app my-app



Second step start your app react 
---

for start your app in react use this commande in Terminal:

npm start


in file App.js add the script below 
---


```javascript

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component{
  constructor(){
     super();

this.state = {employer: [
  {id:100,name:'LIONEL MESSI',age:36},
  {id:101,name:'CRISTIANO RONALDO',age:26},
  {id:102,name:'MOHAMED SALAH',age:22},
  {id:103,name:'IDIN HAZARD',age:43},
]

}


     this.delete = this.delete.bind(this);
  }
  
  delete(id){
     this.setState(prevState => ({
      employer: prevState.employer.filter(
        (value,index,array) => index !== id 
        )
     }));

     console.log(this.state.employer)
  }
  
  render(){
     return(
        <div>
         <Child delete={this.delete} data={this.state.employer} />
        </div>
     );
  }
}

class Child extends React.Component{

  delete(id){
      this.props.delete(id);
  }
  
  render(){
     return(
        <div>
          <table>
                
          <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ACTION</th>
                  </tr>
                  </thead>  <tbody>
          {
             this.props.data.map((el,index)=>
              (
                
                      <tr key={index}>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.age}</td>
                      <td> <button onClick={this.delete.bind(this, index)}>Supprimer</button></td>
                    </tr>
              
              )
             )
          }
             </tbody>
                 </table>
        </div>
     )
  }
}

//ReactDOM.render(<App/>, document.getElementById('app'));



export default App;



```