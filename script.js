const pages=["signupPage","authPage","homePage"];
let users=JSON.parse(localStorage.getItem("users"))||{};
let loggedIn=localStorage.getItem("loggedIn")||null;
function showOnly(pageId){pages.forEach(p=>document.getElementById(p).classList.add("hidden"));document.getElementById(pageId).classList.remove("hidden");}
function signup(){const u=document.getElementById("newUser").value.trim();const p=document.getElementById("newPass").value.trim();if(!u||!p){alert("Fill all fields");return;}users[u]={password:p};localStorage.setItem("users",JSON.stringify(users));alert("Account created");showOnly('authPage');}
function login(){const u=document.getElementById("username").value.trim();const p=document.getElementById("password").value.trim();if(users[u]&&users[u].password===p){loggedIn=u;localStorage.setItem("loggedIn",u);showOnly('homePage');}else{alert("Invalid credentials");}}
if(loggedIn){showOnly('homePage');}else{showOnly('signupPage');}