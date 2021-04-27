import axios from "axios";
const { REACT_APP_API } = process.env;
let tkn = localStorage.getItem("token");
const headers = {};
if(tkn){
  headers["Authorization"] = 'Bearer '+ tkn;
}
console.log("http common headers:", headers);
let httpCommon = axios.create({
  baseURL: "http://"+REACT_APP_API+"/api",
  headers
});

const changeToken = (token) => {
  localStorage.setItem("token", token);
  window.location.reload(); 
};


export default httpCommon;
export {changeToken}