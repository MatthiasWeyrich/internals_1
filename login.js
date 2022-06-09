
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

function filter() {
    const students = Array.from(document.querySelectorAll(".entry"))
    const fb = document.getElementById("FB").value
    const sem = document.getElementById("sem").value
    students.forEach(student => student.style.display = "")
    students.filter(student => {
            const month = new Date(student.querySelectorAll("td")[4].textContent).getMonth()
            const summer = sem == "Summer"
            return student.querySelectorAll("td")[6].textContent != fb || (month >= 4 && month <= 9) != summer})
            .forEach(student => student.style.display = "none")

}

function validDate() {
    yesterday = new Date(Date.now() - 854e5).toISOString().split("T") [0]
    document.getElementById("DOB").setAttribute("max", yesterday)
    document.getElementById("joiningDate").setAttribute("min", "2015-01-01")
    document.getElementById("joiningDate").setAttribute("max", "2015-12-31")    
}

function checkAge() {
    const dob = document.getElementById("DOB").value
    const date = new Date(dob)
    const currentDate = Date.now()
    const age = (currentDate - date) / (31557600000)
    if(age < 17 || age > 60) {
        alert("Invalid DOB")
    } else {
        window.location.href = "students.html";
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