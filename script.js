async function login() {
    let Userid = document.querySelector("#Userid").value;
    let password = document.querySelector("#password").value;

    if (Userid === "") {
        alert("Please Enter user id");
        return;
    }

    if (password === "") {
        alert("Please Enter Password");
        return;
    }

    let response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Userid,
            password
        })
    });

    let result = await response.json();

    if (result.success) {
        alert("Login Success");
        window.location.href = "home.html";
    } else {
        alert("Invalid Userid & password");
    }
}