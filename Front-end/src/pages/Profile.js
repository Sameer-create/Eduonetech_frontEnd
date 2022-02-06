import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@material-ui/core/Button';



const Profile = () =>{
    const history = useHistory();

    const[userData, setUserData] = useState({});
    const[friend, setFriend] = useState([]);
    const callAboutPage = async () => {
        try{
            const res = await fetch('/profile',{
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            console.log(data);
            setUserData(data);
            setFriend(data.myFriends);
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }

        }catch(err){
            console.log(err);
            history.push('/login');
        }
    }
    const[user, setUser] = useState({
      codechef:"", codeforces:""
    });

    let name, value;
    const handleInputs = (e) => {
      name = e.target.name;
      value = e.target.value;

    setUser({...user, [name]:value});
    } 

  

    useEffect(() => {
        callAboutPage();
    },[]);


    return (
      <>
      <div className="profile-container">
 <div className="col-md-12">  
    <div className="col-md-4">      
        <div className="portlet light profile-sidebar-portlet bordered">
            <div className="profile-userpic">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-responsive" alt=""/> </div>
            <div className="profile-usertitle">
                <div className="profile-usertitle-name profile-text"> {userData.userName} </div>
                <br/>
            </div>
        </div>
    </div>


    <div className="col-md-8"> 
                    <div className="content-tabs">
                      <div>


                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="profile-text">Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary profile-text">{userData.name}</div>
                  </div>
                  <hr className="profile-text"/>


                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="profile-text">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary profile-text">
                    {userData.email}
                    </div>
                  </div>
                  <hr className="profile-text"/>

                      </div>
              
                    </div>
                  </div>
                  </div>
                  </div>
              
      </>

    )
    
}

export default Profile