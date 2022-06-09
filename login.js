
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

function checkAge() {
    const dob = document.getElementById("DOB").value
    const date = new Date(dob)
    const currentDate = Date.now()
    const age = (currentDate - date) / (31557600000)
    const join = checkJoin()
    if(!join) {
        alert("Invalid joining year")
    } 
    else if(age < 17 || age > 60) {
        alert("Invalid DOB")
    } else {
        window.location.href = "students.html";
    }   
}

function checkJoin() {
    const join = document.getElementById("joiningDate").value
    const joinDate = new Date(join)
    joinYear = joinDate.toISOString().split('-')[0]

    if(joinYear != 2015) {
        return false
    } else {
        return true
    }

}

function checkStaffCred() {
    const staffPassword = document.getElementById("stPassword").value
    const staffUsername = document.getElementById("stUsername").value
    if(!(staffUsername == staffCred && staffPassword == staffCred)) {
        checkFailed()
        alert(errorMsg)
        return false
    }
    return true
}

function checkAdminCred() {
    const adminPassword = document.getElementById("adPassword").value
    const adminUsername = document.getElementById("adUsername").value
    if(!(adminUsername == adminCred && adminPassword == adminCred)) {
        checkFailed()
        alert(errorMsg)
        return false
    }
    return true
}