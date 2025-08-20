async function deleteToDo(task) {
    try {
        const res = await axios.post(
            "/delete",
            {
                todoId: task._id,
            },
            {
                headers: {
                    token: localStorage.getItem("token"),
                },
            }
        );
    } catch (err) {
        console.log("failed to delete");
    }
    getTodos();
}

function createElement(task) {
    const newdiv = document.createElement("div");
    const newP = document.createElement("p");
    const newButton = document.createElement("button");
    newdiv.appendChild(newP);
    newdiv.appendChild(newButton);
    newP.textContent = task.description;
    newButton.textContent = "🗑️";
    newButton.addEventListener("click", () => deleteToDo(task));
    return newdiv;
}

async function getTodos() {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const res = await axios.get("/todos", {
                headers: {
                    token: localStorage.getItem("token"),
                },
            });
            const todoList = res.data.todos;
            const todoListDiv = document.getElementById("todo-list");
            todoListDiv.innerHTML = "";
            todoList.forEach((task) => {
                const newDiv = createElement(task);
                todoListDiv.appendChild(newDiv);
            });
            document.getElementById("auth-div").style.display = "none";
        } catch (err) {
            console.log("cannot Fetch Todos");
            giveMessage("Failed to fetch todos");
        }
    } else {
        document.getElementById("logout-button").style.display = "none";
        console.log("user is Logged out");
    }
}
getTodos();

async function handleSignup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    try {
        const res = await axios.post(
            "/signup",
            {
                email: email,
                password: password,
                username: username,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        giveMessage("Signup successful");
        console.log(res.data.user);
    } catch (err) {
        console.log("failed signup");
        giveMessage("Signup failed");
    }
}

async function handleSignin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    try {
        const res = await axios.post(
            "/signin",
            {
                email: email,
                password: password,
                username: username,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        giveMessage("Login successful");
    } catch (err) {
        console.log("login failed");
        giveMessage("Login failed");
    }
    getTodos();
    document.getElementById("logout-button").style.display = "";

}

async function addTodo() {
    const description = document.getElementById("todo-description").value;
    if (description) {
        try {
            const res = await axios.post(
                "/add",
                {
                    description: description,
                },
                {
                    headers: {
                        token: localStorage.getItem("token"),
                        "Content-Type": "application/json",
                    },
                }
            );
            giveMessage("Todo added successfully");
            console.log(res.data);
        } catch (err) {
            console.log("fail to add todo");
            giveMessage("Failed to add todo");
        }
    }
    else{
        giveMessage("Login first");
    }
    getTodos();

}

function logout(){
    localStorage.removeItem("token");
    document.getElementById("auth-div").style.display = "";
    document.getElementById("todo-list").innerHTML = "";
    getTodos();
    giveMessage("You have been logged out");
}

function giveMessage(message){
    const messageDiv = document.createElement("div");
    const messageP = document.createElement("p");
    messageDiv.appendChild(messageP);
    messageDiv.id = "message-div";
    document.getElementsByTagName("body")[0].appendChild(messageDiv)
    messageP.textContent = message;
    setTimeout(()=>{
        document.getElementsByTagName("body")[0].removeChild(messageDiv);
    }, 3000)
    
}