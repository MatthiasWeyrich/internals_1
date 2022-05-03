
const errorMsg = "Login Credentials Incorrect"

const adminCred = "Admin"
const staffCred = "Staff"

let loginFailed = 0 

function checkFailed() {
    loginFailed++
    if(loginFailed >= 3) {
        const staffLogin = document.getElementById("stLogin")
        const adminLogin = document.getElementById("adLogin")

        staffLogin.disabled = true
        adminLogin.disabled = true
    }
}

function checkStaffCred() {
    const staffPassword = document.getElementById("stPassword").value
    const staffUsername = document.getElementById("stUsername").value
    if(staffUsername == staffCred && staffPassword == staffCred && staffLoginFailed < 3) {
        alert("yay")
    } else {
        checkFailed()
        alert(errorMsg)
    }
}

function checkAdminCred() {
    const adminPassword = document.getElementById("adPassword").value
    const adminUsername = document.getElementById("adUsername").value
    if(adminLoginFailed >= 3) {
        alert("Three Login attempts failed")
        return false;
    }
    else if(adminUsername == adminCred && adminPassword == adminCred) {
        alert("yay")
    } else {
        alert(errorMsg)
    }
}