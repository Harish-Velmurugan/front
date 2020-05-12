import React from 'react';
import logo from './logo.svg';
import './App.css';


class Update1 extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       loading : true,
       activeItem : {
         id : null,
         qualification : null,
         specialization : null,
         domains : null,
         work_exp : null
       },
       editing : false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeq = this.handleChangeq.bind(this)
    this.handleChanges = this.handleChanges.bind(this)
    this.handleChangew = this.handleChangew.bind(this)
    this.handleChanged = this.handleChanged.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  


  async componentDidMount(){
    const url = 'http://127.0.0.1:8000/api/user/';
    const response = await fetch(url);
    const data = await response.json();
    
    console.log(data)
    this.setState({loading :false});
  }

  handleChange(e){
    var name = e.target.name
    var value = e.target.value
    console.log('name: ',name)
    console.log('value: ',value)

  
  }
  handleChangeq(e){
    var name = e.target.name
    var value = e.target.value
    this.setState({
      activeItem:{
        ...this.state.activeItem,
        qualification:value
      }
    })
    
  }
  handleChanges(e){
    var name = e.target.name
    var value = e.target.value
    this.setState({
      activeItem:{
        ...this.state.activeItem,
        specialization:value
      }
    })
    
  }
  handleChangew(e){
    var name = e.target.name
    var value = e.target.value
    this.setState({
      activeItem:{
        ...this.state.activeItem,
        work_exp:value
      }
    })
    
  }
  handleChanged(e){
    var name = e.target.name
    var value = e.target.value
    this.setState({
      activeItem:{
        ...this.state.activeItem,
        domains:value
      }
    })
    
  }
  handleSubmit(e){
    e.preventDefault()
    console.log('Item : ',this.state.activeItem)

    var url = 'http://127.0.0.1:8000/api/user/'
    fetch(url ,{
      method : 'POST',
      headers : {
        
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(this.state.activeItem)
    }).then((response) =>{
      console.log(response);
    }).catch(function(error){
      console.log('ERROR : ',error);
    })
  }
  
    render(){return (
      
      <div style={{marginLeft:"200pt"}}>
			<div class="d-flex flex-row clearfix " style={{margin: "2%" , paddingLeft: "10px"}}>
			  <div class="p-2 align-self-baseline border float-left w-75 shadow-lg mb-4">
				<div class="container">
				  <div class="" >
          <h2>Professional Detail</h2><hr></hr><br></br>
      <form onSubmit={this.handleSubmit}>
      <div class="form-row">
    <div class="col-sm-6"> <label for="inputAddress">Heighest Qualification</label>
        <select id="inputState" class="form-control" name = "qualification" onChange={this.handleChangeq} >
            <option selected>Choose...</option>
            <option>M.E Cmputer Sceience</option>
      <option>B.E Cmputer Sceience</option>
      <option>B.Sc Cmputer Sceience</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label for="inputAddress">Specialization</label>
        <select id="inputState" class="form-control" name = "specialization" onChange={this.handleChanges}>
            <option selected>Choose...</option>
            <option>App developer</option>
      <option>Web devoloper</option>
      <option>Data Scientist</option>
          </select> 
        </div>
      </div>
    <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputPassword3" >Work Experience</label>
            <select id="inputState" class="form-control" name = "work_exo" onChange={this.handleChangew}>
            <option selected>Choose...</option>
            <option>Student</option>
      <option>Fresher</option>
      <option>2 yr</option>
          </select>
      </div>
    <div class="form-group col-md-6">
     <label for="inputAddress">Domain Intrest</label>
        <select id="inputState" class="form-control" name = "domain" onChange={this.handleChanged}>
            <option selected>Choose...</option>
            <option>App developer</option>
      <option>Web devoloper</option>
      <option>Data Scientist</option>
          </select> 
      </div>
        </div>
      <div class="form-row">
        <div class="form-group col-md-6">
       <button type="submit" class="btn btn-primary" >Update Profile</button>
        </div>
        </div>
        </form>
      </div>
        </div>
      </div>
        </div>

                </div>
                
            
      
    )
}}

export default Update1;
