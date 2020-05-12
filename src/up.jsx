import React from 'react'
import './update.css'
import image from './image.jpg'
class up extends React.Component{
    render(){

        return(
            <div>
                 <header class="header">
            <i class="fa fa-bars mobile-menu-btn"></i>
            <nav class="navigation">
                
                <a href="https://www.hackerearth.com" class="logo logo-h-terminal  no-underline float-left track-header-logo"></a>
                <ul class="nav-bar right-nav-bar float-right tablet-hide">
                    
                    
                    <li id="searchbar">
                        <div id="search-icon-container" class="float-left">
                            <i class="fa fa-search"></i>
                        </div>
                        <input id="searchbar-input" class="float-left" type="text" value="" name="q" autocomplete="off" spellcheck="false" placeholder="Search developers, problems, etc" ajax1="/search/AJAX/search/" ajax2="/search/search-results/" ></input>
                        <div id="search-dropdown"></div>
                    </li>
                    
                    

                    
                    <li id="header-notif-icon" class="">
                        <a class="track-header-notifs tool-tip notification-icon" title="Notifications">
                            <span id="notif-icon" expand="notifications-box" class="nav-bar-menu nav-menu pagelet-hover tablet-hide" ajax="/notifications/pagelets/new-notifications/" target="notifications-container">
                                <i class="fa fa-bell"></i>
                                
                            </span>
                        </a>
                        <a class="track-header-notifs tool-tip notification-icon tablet-show" title="Notifications" href="https://www.hackerearth.com/notifications/">
                            <span id="notif-icon-mob" class="nav-bar-menu">Notifications</span>
                        </a>
                    </li>
                    

                    
                    <li class=" hidden">
                        <a class="track-header-messages tool-tip message-icon tablet-hide" href="https://www.hackerearth.com/messages/" title="Messages">
                            <i class="fa fa-envelope"></i>
                            
                        </a>
                        <a class="track-header-messages tool-tip message-icon tablet-show" href="https://www.hackerearth.com/messages/" title="Messages">Messages</a>
                    </li>
                    


                    
                        
                        <li id="user-name" class="nav-bar-menu tablet-hide"><a class="track-header-profile-box" href="https://www.hackerearth.com/@manikandanramesh08"><img src="https://he-s3.s3.amazonaws.com/media/avatars/manikandanramesh08/resized/30/aoh14gjsbbyb9ye9gzseujfwog54hwmepxz0pvvvx0kejg" alt="manikandanramesh08" width="30" height="30" onerror="if(typeof handle_avatar_error=='function'){handle_avatar_error(this);}" /></a></li>
                        
                    

                    
                    <li id="hacker-dd-icon" expand="hacker-box" class="nav-bar-menu nav-menu"><a><div class="caret-icon"><i class="fa fa-caret-down"></i></div></a></li>
                   <div class="clear"></div>
                </ul> 
                <div class="clear"></div>
            </nav> 
            <i class="fa fa-filter challenge-filter-btn hidden"></i>
      </header> 
	        <div style={{marginLeft:"200pt"}}>
			<div class="d-flex flex-row clearfix " style={{margin: "2%" , paddingLeft: "10px"}}>
			  <div class="p-2 align-self-baseline border float-left w-75 shadow-lg mb-4">
				<div class="container">
				  <div class="" >
					<h2>Personal Detail</h2><hr></hr>
					<div id="profile-container" style={{border:"10px",padding:"10px"}}>
						<img id="profileImage" src={image} alt="not found" />
					</div>
					<input id="imageUpload" type="file"  name="profile_photo" placeholder="Photo" required="" capture />
				  </div>
				<form  >
			<div class="form-row">
				<div class="form-group col-md-6">
				  <label for="inputEmail4">First Name</label>
				  <input type="email" class="form-control" id="inputEmail4" placeholder="ex: Alex"></input>
				</div>
				<div class="form-group col-md-6">
				  <label for="inputPassword4">Last Name</label>
				  <input type="password" class="form-control" id="inputPassword4" placeholder="Simon"></input>
				</div>
		  </div>
		<div class="form-row">
			<div class="form-group col-md-6">
			  <label for="inputAddress">Gender</label>
			<select id="inputState" class="form-control">
				<option selected>Choose...</option>
				<option>Male</option>
			<option>Female</option>
			<option>Other</option>
			  </select>
		  </div>
		<div class="form-group col-md-6">
		 <label for="inputAddress2">Date Of Birth</label>
			<input type="date" class="form-control" id="inputAddress2"></input>
		  </div>
			</div>
			<div class="form-row">
			<div class="form-group col-md-6">
			  <label for="inputCity">Phone</label>
			  <input type="Number" class="form-control" id="inputCity"></input>
			</div>
			<div class="form-group col-md-4">
			  <label for="inputState">Nationlity</label>
			  <select id="inputState" class="form-control">
				<option selected>Choose...</option>
				<option>India</option>
			<option>China</option>
			<option>America</option>
			  </select>
			</div>
			<div class="form-group col-md-2">
			  <label for="inputZip">Zip</label>
			  <input type="text" class="form-control" id="inputZip"></input>
			</div>
		</div>	
		<div class="form-row">
			<div class="form-group col-md-6">
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
    export default up;