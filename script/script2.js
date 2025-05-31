let password = '1234'
let count = 3

while (count > 0) {
    let user_password = prompt('enter the password:')
    count--
    if (user_password == password) {
        alert('good man!')
        break
    }
}
