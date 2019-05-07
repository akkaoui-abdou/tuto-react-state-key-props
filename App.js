import React, { Component } from 'react';

class App extends Component{
  constructor(){
     super();

/*
     this.state = {
       data: [1,2,3,4,5]
     }

*/


this.state = {employer: [
  {id:100,name:'AKKAOUI',age:36},
  {id:101,name:'JEBBOURI',age:26},
  {id:102,name:'ALAOUI',age:22},
  {id:103,name:'AMRAOUI',age:43},
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
