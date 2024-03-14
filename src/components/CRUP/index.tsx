"use client";

import { useState, useEffect } from "react";
import AddUser from "../AddUser";
import UserList from "../UserList";
const CRUDoprations = ()=>{
    const [userName, setUserName]:any = useState("");
    const [age, setAge]:any = useState("");
    const [userData, setUserData]:any[] = useState([]);
    const [mode, setMode] = useState(false);
    const [postId, setPostid] = useState("");

    const formSubmitHander = async (e:any)=>{
        e.preventDefault();
        if(userName === ""){
            alert("Please fill name")
        }else if(age === ""){
            alert("Please fill age")
        }else if(!mode){
            ADD_USER();
        }else if(mode){
            EDIT_USER()
        }
    }
    const ADD_USER = async ()=>{
        const url = 'http://localhost:3000/api/user';
        const data = {
            name: userName,
            age
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data),
        };
        const getData = await fetch(url,options);
        const resData = await getData.json();
        const _userData:any = [...userData, resData.userData]
        setUserData(_userData);
        setUserName("");
        setAge("");
        setPostid("");
        setMode(false)
    }
    const EDIT_USER = async ()=>{
        const url = `http://localhost:3000/api/user/${postId}`;
        const data = {
            name: userName,
            age,
        };
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data) 
        };
        const getData = await fetch(url,options);
        const resData = await getData.json();
        alert("edit succeussfuly")
        
        
        setUserName("");
        setAge("");
        setPostid("");
        setMode(false);
        fetchData()
    }
    const fetchData = async ()=>{
        const data = await fetch(`http://localhost:3000/api/user`,{cache: 'no-store'});
        const resData = await data.json();
        setUserData(resData.userDetails)
    }
    const editFun = (userDetail:any)=>{
        console.log('userDetail',userDetail);
        setUserName(userDetail.name);
        setAge(userDetail.age);
        setPostid(userDetail.id);
        setMode(true)
    }
    const removeFunAPICall = async (id:any)=>{
        const url = `http://localhost:3000/api/user/${id}`;
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json', // Adjust if necessary
          }
        });
    
        if (!response.ok) {
          throw new Error(`DELETE request failed with status ${response.status}`);
        }
    
        alert('Data deleted successfully');
        fetchData()
    }
    const removeFun = (id:any)=>{
        console.log("remove", id)
        const userConfirm = confirm("Are you sure you want to remove to this list");
        if(userConfirm){
            removeFunAPICall(id)
        }
    }
    
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <>
            <UserList 
                userData={userData}
                editHanlder={editFun}
                removeHandler={removeFun} />
            <AddUser 
                userName={userName} 
                setUserName={setUserName}
                age={age}
                setAge={setAge}
                formSubmit={formSubmitHander}
                mode={mode}
                />
        </>
    )
}

export default CRUDoprations;