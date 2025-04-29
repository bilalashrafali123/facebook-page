var username = document.querySelector("#userName")
var passkey = document.querySelector("#password")

function Login(){
let uservalue = username.value
let passvalue = passkey.value;

if(uservalue == "" && passvalue == ""){
    alert("Please Enter the Required Information....")
}
if(uservalue == "admin" && passvalue == "admin"){
    alert("login succesfully")
}else{
    alert("login failed")
}
username.value = ""
passkey.value = ""

}
