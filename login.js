const btnLogin = document.getElementById("btn-login")

btnLogin?.addEventListener("click", async () => {
    console.log("iniciando sesión...")

    const correoInput = document.getElementById("email")
    const contraseñaInput = document.getElementById("password-register")

    if (correoInput === "" || contraseñaInput === "") {
        alert("Ambos campos tienen que estar llenos")
        return
    }

    const dataToSend = {
        email: correoInput.value,
        password: contraseñaInput.value
    }
    console.log(dataToSend)

    try {
        
        const response = await fetch("https://graco-task-list.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( dataToSend )
        })

        const data = await response.json()

        const jwt = data.token
        localStorage.setItem('token', jwt)

        if(response.status === 200){
            location.href = 'tarea.html'
            Swal.fire('Good job!',
            'Inicio de sesión exitoso')
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salió mal:(',
        //         // footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    } catch (error) {
        alert(error)
    }

})