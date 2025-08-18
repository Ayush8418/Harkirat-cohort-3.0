console.log("hello");

async function getUser(){
    try{
        const res = await axios.get("http://localhost:3000/me",{
            headers: {
                "token": localStorage.getItem("token")
            }
        })  
        console.log(res.data);
        document.querySelector(".user-info").innerHTML = "<h3>username: "+ res.data.user.username+ "</h3>";
        document.querySelector(".auth-div").style.display = "none";
    }
    catch(err){
        console.log("login first");
    }
}
getUser()

async function handleSignup(){
    const username = document.getElementById("up-username").value;
    const password = document.getElementById("up-password").value;
    try{
        const res = await axios.post("http://localhost:3000/signup",
            {
                username: username,
                password: password
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        console.log(res.body);
    }
    catch(err){
        console.log("signup failed");
    }
    
}

async function handleSignin(){
    const username = document.getElementById("in-username").value;
    const password = document.getElementById("in-password").value;
    try{
        const res = await axios.post("http://localhost:3000/signin",
            {
                username: username,
                password: password
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        localStorage.setItem("token", res.data.token);
        getUser()
    }
    catch(err){
        console.log("signin failed");
    }
}

function handleLogout(){
    localStorage.removeItem("token");
    document.querySelector(".auth-div").style.display = "";
}