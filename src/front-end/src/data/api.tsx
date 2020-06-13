import React from "react";
import axios from 'axios';
import { StorageAPIWrapper } from "./localStroage";


// const API: React.FC = () => {

// };

    // const str = `${dayText}`
    // document.title = str
    // API.get("mealplans/", {
    //   headers: { Authorization: AuthStr },
    //   params: {
    //     id: 1
    //     // Token: 12345, Date: dayText
    //   }}).then((res) => {
    //   setMeals(res.data);
    // });
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

// export const loginUser = async (email: string, password: string) => {
//   try {
//     // console.log(`${email}`)
//     // console.log(`${password}`)
//     var data = { "email": email, "password": password }
//     const res = await axios.post("http://127.0.0.1:8000/users/login/", Querystring.stringify(data)
//     ).then((res) => {
//       setToken("Token", res.data.token);
//       // getToken();
//       console.log(res)
//       return true
//     });
//   } catch (error) {
//     console.log(error)
//     return false
//   }
// }
  const api = axios.create({
    baseURL: `http://127.0.0.1:8000/`,
    headers: {
      post: {
        authorization: "Token e2fa02549694e3ec31f2f475af734feb56842e33",
      },
      // authentication: "Token e2fa02549694e3ec31f2f475af734feb56842e33"
    },
  });

export async function loginUser (email: string, password: string) {
  try {
        var data = { "email": email, "password": password };
        console.log(data);
        const res = await api.post("users/login/",
          Querystring.stringify(data)
        );
        //.then( (res) => {setToken("Token", res.data.token);});
        await setToken("Token", res.data.token);
        var token = await getToken()
        console.log("The token vlaue is: " + token.toString());
        return true;
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

export default axios.create({
  baseURL: `http://127.0.0.1:8000/`,
  // headers: { 'Authentication': 'Token ' }
});


