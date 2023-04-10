function savedata(){

let btn = document.getElementsByClassName("btn").textcontent = "Hello"
let user_name = document.getElementById("user").value
let user_email = document.getElementById("email").value
let user_password = document.getElementById("password").value

let user_records = []

user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

if(user_records.some((v)=>{return v.email == email}))
{
    alert("Email already Registered !")
    // window.location.href = ""
}
else
{
    user_records.push({
        "user":user_name,
        "email":user_email,
        "password":user_password
    })

    user_records =localStorage.setItem("users",JSON.stringify(user_records))

    
}


}