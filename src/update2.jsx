import React from 'react'
import './update.css'
import image from './image.jpg'
class Update2 extends React.Component{
    render(){

        return(
            
          <div style={{marginLeft:"200pt"}}>
			<div class="d-flex flex-row clearfix " style={{margin: "2%" , paddingLeft: "10px"}}>
			  <div class="p-2 align-self-baseline border float-left w-75 shadow-lg mb-4">
				<div class="container">
				  <div class="" >
          <h2>Login Detail</h2><hr></hr><br></br>
                  
          
          <form>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">UserId</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputEmail3" ></input>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="Password" class="form-control" id="txtNewPassword" placeholder="min 8 character"  ></input>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
              <div class="col-sm-10">
                <input type="Password" class="form-control" id="txtConfirmPassword" onChange="checkPasswordMatch();"></input>
              </div>
            </div>
                 <div class="registrationFormAlert" id="divCheckPasswordMatch"></div>
            <div class="form-group row">
              <div class="col-sm-10">
                <button type="submit" class="btn btn-primary">Update Profile</button>
              </div>
            </div>
          </form>
                </div>
              </div>
           </div> 
          </div>
          </div>


        )
    }
    }
    export default Update2;