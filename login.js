//login 
function LookintoStorage(){
    let user_password = document.getElementById("password").value
    // console.log(user_name)

    let user_email = document.getElementById("email").value
    // console.log(user_email)
    let user_records = []
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    // user_records.push({
    //     "user":user_name,
    //     "email":user_email
    // })
    // localStorage.setItem("users",JSON.stringify(user_records))
    // user_records = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
    
    if(user_records.some((v)=>{return v.password == user_password && v.email == user_email}))
    {
        alert("Login Success")
        window.location.href="profile.html"
    }else
    {
        alert("Failed Login")
    }

    
    // if(return_user.user == user_name && return_user.email == user_email)
    // {
    //     alert("Login successfully!")
    //     window.location.href = "profile.html"
    // }
    // else
    // {
    //     alert("Wrong password or Email")
    // }
    // localStorage.setItem("user",user_name)
    // localStorage.setItem("email",user_email)

    
}

