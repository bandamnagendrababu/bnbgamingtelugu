async function login() {

    let Userid = document.querySelector("#Userid").value.trim();
    let password = document.querySelector("#password").value;

    // Check empty fields
    if (Userid === "") {
        alert("Please Enter user id");
        return;
    }

    if (password === "") {
        alert("Please Enter Password");
        return;
    }


    // =================================
    // ADMIN LOGIN
    // =================================

    try {

        let response = await fetch("/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                Userid: Userid,
                password: password
            })
        });

        let result = await response.json();

        // Admin login successful
        if (result.success) {

            alert("Admin Login Success");

            window.location.href = "home.html";

            return;
        }

    } catch (error) {

        console.log("Admin login check failed:", error);

    }


    // =================================
    // REGISTERED USER LOGIN
    // =================================

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(function (user) {

        return (
            user.userid === Userid &&
            user.password === password
        );

    });


    // User login successful
    if (user) {

        alert("User Login Success");

        window.location.href = "home.html";

    } else {

        alert("Invalid Userid & password");

    }
}