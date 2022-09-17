const btnRegister = document.getElementById("btn-register")

btnRegister?.addEventListener("click", async () => {
    console.log("enviando registro....")
    const nombreInput = document.getElementById("name")
    const apellidoInput = document.getElementById("last-name")
    const correoInput = document.getElementById("email")
    const contraseñaInput = document.getElementById("password-register")

    

    if (nombreInput.value === "" || apellidoInput.value === "" || correoInput === "" || contraseñaInput === "") {
        alert("Todos los campos tienen que estar llenos")
        return
    }


    const dataToSend = {
        name: nombreInput.value,
        lastName: apellidoInput.value,
        email: correoInput.value,
        password: contraseñaInput.value
    }
    console.log(dataToSend)

    try {
        
        const response = await fetch("https://graco-task-list.herokuapp.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( dataToSend )
        })

        const data = await response.json()
        
        if(response.status === 200){
            location.href = 'index.html'
            Swal.fire("Usuario creado con éxito")
        // }else if(response.status)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe llenar los espacios vacios',
              })
        }

    } catch (error) {
        alert(error)
    }

})