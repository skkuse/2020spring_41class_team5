import React, { useContext } from "react";
import axios from 'axios';
import { StorageAPIWrapper } from "./localStroage";
import { AppContext } from "./AppContextProvider";


const storage = new StorageAPIWrapper();

export async function setToken(key: string, value: string) {

      let result: boolean = await storage.openStore({});
      await storage.setItem(key, value);
}

export async function getToken () : Promise<string> {
  let result: boolean = await storage.openStore({});
  var value = await storage.getItem("Token");
  if (value){ return value
  } else return ""
}

const Querystring = require('querystring');

  const api = axios.create({
    baseURL: `http://127.0.0.1:8000/`,
    headers: {
      post: {
        "authorization": "",
      },
    },
  });

export async function loginUser (email: string, password: string) {
  try {
        var data = { "email": email, "password": password };
        console.log(data);
        const res = await api.post("users/login/",
          Querystring.stringify(data)
        );
        await setToken("Token", res.data.token);
        var token = await getToken()
        const tokenValue = "Token ".concat(token);
        console.log(tokenValue);
    return tokenValue;
      } catch (error) {
    console.log(error)
    return false
  }
}

// export async function getCurrentUser() {
//   return new Promise((resolve,reject) => {
//     const unsubscribe = getToken()
//   }
// }

export const registerUser = async (email: string, password:string) => {
  try {
    var data = { email: email, password: password, is_active: true };
    const res = await axios.post("http://127.0.0.1:8000/users/register/", Querystring.stringify(data))
    console.log(res)
    return true
  }
  catch (error) {
    console.log(error)
    return false
  }
}

// export function isAuthed() {
//   return new Promise((resolve, reject) =>{
//     // const unsubscribe = getToken()
//     if (getToken()){

//     }
//   })
// }

export const registerUserinfo = async (data: any) => {
  try {
    const res = await axios.post("http://127.0.0.1:8000/userinfo/", data)
    console.log(res)
    return true
  }
  catch (error) {
    console.log(error)
    return false
  }
}

export const modifyUserinfo = async (data: any) => {
  try {
    const res = await axios.put("http://127.0.0.1:8000/userinfo/", data)
    console.log(res)
    return true
  }
  catch (error) {
    console.log(error)
    return false
  }
};


export default axios.create({
  baseURL: `http://127.0.0.1:8000/`,
  headers: { 'Authorization': "" }
});


