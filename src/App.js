import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Dashboard from './components/DashboardPage/Dashboard';
import ButtonPage from './components/ComponentsPage/ButtonsPage/ButtonPage';
import Cards from './components/ComponentsPage/CardsPage/Cards';
import Colors from './components/UtilitiesPage/ColorsPage/Colors';
import Borders from './components/UtilitiesPage/BordersPage/Borders';
import Animations from './components/UtilitiesPage/AnimationsPage/Animations';
import Others from './components/UtilitiesPage/OthersPage/Others';
import Login from './components/AddonPages/Login';
import Register from './components/AddonPages/Register';
import ForgotPassword from './components/AddonPages/ForgotPassword';
import ErrorPage from './components/AddonPages/ErrorPage';
import BlankPage from './components/AddonPages/BlankPage';
import Charts from './components/ChartsPage/Charts';
import Tables from './components/TablesPage/Tables';
import AddUser from './crudComponents/AddUser';
import UserLists from './crudComponents/UserLists';
import HomePage from './crudComponents/HomePage';
import LandingPage from './crudComponents/LandingPage';

// import AddUser2 from './crudComponents2/AddUser2';
// import UserLists2 from './crudComponents2/UserLists2';
// import HomePage2 from './crudComponents2/HomePage2';
// import LandingPage2 from './crudComponents2/LandingPage2';

function App() {
  const navigate=useNavigate()
  const user  = [
    {
    bookname:'The India Story',
    author:'Bimal Jalal',
    year:2022,
    age:45,
    },{
      bookname:'The Earthspinner',
      author:'Anuratha Roy',
      year:2021,
      age:51,
    },
    {
      bookname:'400 Days',
      author:'Chetan Bhagat',
      year:2023,
      age:40
    },
    {
      bookname:'Relentless',
      author:'Yashwant Sinha',
      year:2020,
      age:38
    },
    {
      bookname:'Legacy of Learning',
      author:'Savitha Chhabra',
      year:2019,
      age:50
    }
    
  ];

  // const user  = [
  //     {
  //       username:"Radika",
  //     email:'abc@gmail.com',
  //     password:'Bimal Jalal',
  //     age:45,
  //     }]

  
  


  const [userList,setUserList]=useState([...user])
  const [currentUser,setCurrentUser]=useState()
  const [index,setIndex]=useState()
const EditUser = (user,index)=>{
  setCurrentUser(user)
  setIndex(index)
  console.log(user);
  navigate('/adduser')

}

const UpdateUser=(updatedUser,id)=>{
  console.log(updatedUser);
  const UserList = [...userList]
  console.log(id);
  UserList[id] ={...updatedUser}
   setUserList([...UserList])
   console.log(setUserList)
   alert("user updated");
   <Link to="/home"/>
};
  const Adduser=(user)=>{
    
    setUserList([...userList,user])
    //console.log(userList);
    console.log(setUserList)
    alert("user added");
    <Link to="/home"/>
          
   
  };
  const DeleteUser=(id)=>{
   const UserList = [...userList]
    const newUser=UserList.filter((user,index)=>index!==id)
    setUserList(newUser)

  };
//   const user2  = [
//     {
//       name:'Karthika',
//       gender:"Female",
//       batch:"B45WD",
//       subject:"English",
//       email:'Karthika@gmail.com',
//       password:'123445',
//       address:'No 11/4,Ganga Nagar,Chennai-600032'
//     },{
//       name:'Gowtham',
//       gender:"Male",
//       batch:"B43WD",
//       subject:"Mathematics",
//       email:'Gowtham@gmail.com',
//       password:'567890',
//       address:'No 25,Lords Street,Chennai-600098'
//     },
//     {
//       name:'Navin',
//       gender:"Male",
//       batch:"B45WE",
//       subject:"Computer Science",
//       email:'Navin@gmail.com',
//       password:'718456',
//       address:'No 1,greek colony,Chennai-600087'
//     },
//     {
//       name:'Ashwini',
//       gender:"Female",
//       batch:"B41WD",
//       subject:"Biology",
//       email:'Ashwini@gmail.com',
//       password:'767473',
//       address:'No 20,Besant Nagar,Chennai-600067'
//     },
//     {
//       name:'John',
//       gender:"Male",
//       batch:"B41WD",
//       subject:"French",
//       email:'john@gmail.com',
//       password:'786473',
//       address:'No 54,PG Apartments,Chennai-600098'
//     }
//   ];


//   const [userList2,setUserList2]=useState([...user2])
//   const [currentUser2,setCurrentUser2]=useState()
//   const [index2,setIndex2]=useState()
// const EditUser2 = (user2,index2)=>{
//   setCurrentUser2(user2)
//   setIndex2(index2)
//   console.log(user2);
//   navigate('/adduser2')

// }

// const UpdateUser2=(updatedUser2,id)=>{
//   console.log(updatedUser2);
//   const UserList2 = [...userList2]
//   console.log(id);
//   UserList2[id] ={...updatedUser2}
//    setUserList2([...UserList2])

// };
//   const Adduser2=(user2)=>{
//     setUserList2([...userList2,user2])
//     console.log(userList2);
//   };
//   const DeleteUser2=(id)=>{
//    const UserList2 = [...userList2]
//     const newUser2=UserList2.filter((user2,index2)=>index2!==id)
//     setUserList2(newUser2)

//   };


  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [students,setStudents]=useState([])


  const handleOpen = () => {
    setOpen(!open)
  }
  const handleOpen1 = () => {
    setOpen1(!open1)
  }
  const handleOpen2 = () => {
    setOpen2(!open2)
  }
 
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Dashboard open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
          
           

            <Route path="/LandingPage" element={<LandingPage/>}/>
      <Route path="/home" element={<HomePage userList={userList} />}/>
      <Route path="/adduser" element={<AddUser currentUser={currentUser} index={index} UpdateUser={UpdateUser} Adduser={Adduser}/>}/>
      <Route path="/userlists" element={<UserLists EditUser={EditUser} userList={userList} index DeleteUser={DeleteUser} />}/> */}
<Route path="/landingpage" element={<LandingPage />} />
        <Route path="/bookregister" element={<Register Adduser={Adduser} />} />
        <Route path="/booklogin" element={<Login userList={userList} />} />
        <Route path="/home" element={<HomePage userList={userList} />} />
        <Route
          path="/adduser"
          element={
            <AddUser
              currentUser={currentUser}
              index={index}
              UpdateUser={UpdateUser}
              Adduser={Adduser}
            />
          }
        />
         <Route
          path="/updateuser"
          element={
            <UpdateUser
              currentUser={currentUser}
              index={index}
              UpdateUser={UpdateUser}
              Adduser={Adduser}
            />
          }
        />
               

      {/* <Route path="/LandingPage2" element={<LandingPage2/>}/>
      <Route path="/home2" element={<HomePage2 userList2={userList2} />}/>
      <Route path="/adduser2" element={<AddUser2 currentUser2={currentUser2} index2={index2} UpdateUser2={UpdateUser2} Adduser2={Adduser2}/>}/>
      <Route path="/userlists2" element={<UserLists2 EditUser2={EditUser2} userList2={userList2} index2 DeleteUser2={DeleteUser2} />}/>
              */}

        <Route path="/dashboard" element={<Dashboard open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/buttons" element={<ButtonPage open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/cards" element={<Cards open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/colors" element={<Colors open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/borders" element={<Borders open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2} />} />
        <Route path="/animations" element={<Animations open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/others" element={<Others open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/errorpage" element={<ErrorPage open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/blankpage" element={<BlankPage open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/charts" element={<Charts open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} /> 
        <Route path="/tables" element={<Tables open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
      </Routes>
    </div>
  )
}

export default App


