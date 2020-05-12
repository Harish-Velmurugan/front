import React from 'react'
import './update.css'
import image from './image.jpg'
import axios from 'axios';

class Update extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      activeItem: {
        id: null,
        firstname: null,
        lastname: null,
        gender: null,
        dob: null,
        phone: null,
        nationality: null,
        pin: null,
        img: null,
      },
      editing: false
    }

    this.handleChangef = this.handleChangef.bind(this)
    this.handleChangel = this.handleChangel.bind(this)
    this.handleChangeg = this.handleChangeg.bind(this)
    this.handleChanged = this.handleChanged.bind(this)
    this.handleChangep = this.handleChangep.bind(this)
    this.handleChangen = this.handleChangen.bind(this)
    this.handleChangez = this.handleChangez.bind(this)
    this.handleChangei = this.handleChangei.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };




  async componentDidMount() {
    const url = 'http://127.0.0.1:8000/api/userp/';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    this.setState({ loading: false });
  }


  handleChangef(e) {
    var name = e.target.name
    var value = e.target.value
    this.setState({
      activeItem: {
        ...this.state.activeItem,
        firstname: value
      }
    })
  }
  handleChangel(e) {
    var name = e.target.name
    var value = e.target.value
    this.setState({
      activeItem: {
        ...this.state.activeItem,
        lastname: value
      }
    })

  }
  handleChangeg(e) {
    var name = e.target.name
    var value = e.target.value
    this.setState({
      activeItem: {
        ...this.state.activeItem,
        gender: value
      }
    })

  }
  handleChanged(e) {
    var name = e.target.name
    var value = e.target.value
    this.setState({
      activeItem: {
        ...this.state.activeItem,
        dob: value
      }
    })

  }

  handleChangep(e) {
    var name = e.target.name
    var value = e.target.value
    this.setState({
      activeItem: {
        ...this.state.activeItem,
        phone: value
      }
    })

  }

  handleChangen(e) {
    var name = e.target.name
    var value = e.target.value
    this.setState({
      activeItem: {
        ...this.state.activeItem,
        nationality: value
      }
    })

  }

  handleChangez(e) {
    var name = e.target.name
    var value = e.target.value
    this.setState({
      activeItem: {
        ...this.state.activeItem,
        pin: value
      }
    })

  }

  handleChangei = event => {
    console.log(event.target.files[0]);
    this.setState({
      activeItem: {
        ...this.state.activeItem,
        img: event.target.files[0]
      }
    })
  }



  async handleSubmit(e) {
    e.preventDefault()
    console.log('Item : ', this.state.phone)
    let form_data = new FormData();
    form_data.append('firstname', this.state.activeItem.firstname);


    form_data.append('lastname', this.state.activeItem.lastname);
    form_data.append('gender', this.state.activeItem.gender);
    form_data.append('dob', this.state.activeItem.dob);

    form_data.append('nationality', this.state.activeItem.nationality);
    form_data.append('phone', this.state.activeItem.phone);
    form_data.append('img', this.state.activeItem.img);
    form_data.append('pin', this.state.activeItem.pin);
    var url = 'http://127.0.0.1:8000/api/userp/'
    const headers = {
      'Content-Type': 'multipart/form-data',

    }

    const response  = await axios.post(url, form_data, {
      headers: headers
    });
    console.log(response);
    
  }


  render() {

    return (
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
        <div style={{ marginLeft: "200pt" }}>
          <div class="d-flex flex-row clearfix " style={{ margin: "2%", paddingLeft: "10px" }}>
            <div class="p-2 align-self-baseline border float-left w-75 shadow-lg mb-4">
              <div class="container">
                <div class="" >
                  <h2>Personal Detail</h2><hr></hr>
                </div>
                <form onSubmit={async (e)=>(await this.handleSubmit(e))}>
                  <div class="form-row" id="profile-container" style={{ border: "10px", padding: "10px" }}>
                    <div class="form-group col-md-1">
                      <label><input id="imageUpload" type="file" name="profile_photo" placeholder="Photo" required="" capture onChange={this.handleChangei} /><img id="profileImage" src={image} alt="not found" /></label>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">

                      <label for="inputEmail4">First Name</label>
                      <input type="text" class="form-control" id="inputEmail4" placeholder="ex: Alex" onChange={this.handleChangef}></input>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Last Name</label>
                      <input type="text" class="form-control" id="inputPassword4" placeholder="Simon" onChange={this.handleChangel}></input>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputAddress">Gender</label>
                      <select id="inputState" class="form-control" onChange={this.handleChangeg}>
                        <option selected>Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputAddress2">Date Of Birth</label>
                      <input type="date" class="form-control" id="inputAddress2" onChange={this.handleChanged}></input>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputCity">Phone</label>
                      <input type="text" class="form-control" id="inputCity" onChange={this.handleChangep}></input>
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputState">Nationlity</label>
                      <select id="inputState" class="form-control" onChange={this.handleChangen}>
                        <option selected>Choose...</option>
                        <option>India</option>
                        <option>China</option>
                        <option>America</option>
                      </select>
                    </div>
                    <div class="form-group col-md-2">
                      <label for="inputZip">Zip</label>
                      <input type="text" class="form-control" id="inputZip" onChange={this.handleChangez}></input>
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
export default Update;