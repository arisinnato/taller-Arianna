
const deleteTask = async (id) =>{
    console.log("eliminando..", id)
    const taskListElement = document.getElementById("task-list")
    const elementToDelete = document.getElementById(id)
    const token = localStorage.getItem('token')

    Swal.fire({ 
        title: 'Are you sure?', 
        text: "You won't be able to revert this!", 
        icon: 'warning', 
        showCancelButton: true, 
        confirmButtonColor: '#3085d6', 
        cancelButtonColor: '#d33', 
        confirmButtonText: 'Yes, delete it!' 
    }).then(async (result) => { 
            if (result.isConfirmed) { 
            const response = await fetch('https://graco-task-list.herokuapp.com/task/'+id, { 
            method: "DELETE", 
            headers: { 
            "Content-Type": "application/json", 
            'Authorization': Bearer ${token}
            }
        }) 
        
        if(response.status === 200){ 
        taskListElement.removeChild(elementToDelete) 
        } 
        Swal.fire( 
        'Deleted!', 
        'Your file has been deleted.', 
        'success') 
        } 
        })
    

    // taskListElement.removeChild(elementToDelete)

    const taskListElementCont = document.getElementById("task-total")
    taskListElementCont.innerHTML = ":" + taskListElement.children.length
}

 const deleteAll = () =>{
    if(result.isConfirmed){
        const token = localStorage.getItem('token')
        const response = await fetch('https://graco-task-list.herokuapp.com/task/delete/all', {
            method: "delete",
            headers:{
                "Content-Type": "application/json", 
                'Authorization': Bearer ${token}
            }
        })
        if(response.status !== 200){
            const data = response.json() 
            Swal.fire( 
            'Algo salio mal', 
            ${data.error}, 
            'error') 
        return 
        }
        
        Swal.fire( 
        'Deleted!', 
        'Your file has been deleted.', 
        'success' 
        ) 
        init() 
    }
 }
    
     if(response.status !== 200){
     function alerta()
     {
     var mensaje;
     var opcion = confirm("Clicka en Aceptar o Cancelar");
     if (opcion == true) {
         mensaje = "Has clickado OK";
 	} else {
	    mensaje = "Has clickado Cancelar";
	}
 	document.getElementById("ejemplo").innerHTML = mensaje;
 }
}

//codigo de ejemplo
const btnElement = document.getElementById('task-delete')
// console.log(btnElement)

if(btnElement){
    btnElement.addEventListener("click", function(){
        // console.log("enviando tarea...")
    const resp =  alert("seguro que quieres eliminar?")
    {
    var mensaje;
    var opcion = confirm("Clicka en Aceptar o Cancelar");
    if (opcion == true) {
        mensaje = "Has clickado OK";
	} else {
	    mensaje = "Has clickado Cancelar";
	}
	document.getElementById("borrar todo").innerHTML = mensaje;
}
    })
}

//agarrar el elemento form

const formElement = document.getElementById("task-form")
// if (formElement) {
//     console.log("Formulario funcionando...")
//     //modificar el evento
    
//     formElement.addEventListener("submit", function(event){
//         event.preventDefault()

//         //extraer los datos nombre de la tarea y prioridad
//         const inputElement = document.getElementById("taskName")
//         const inputElementD = document.getElementById("taskDate")
        

//         if (inputElement.value !== ""){
//             //buscar el select
//             const selectElement = document.getElementById("taskPriority")

//             //valores de input y select
//             console.log(selectElement.value)
//             console.log(inputElement.value)

//             //agregar nuevo li de la lista

//             const taskListElement = document.getElementById("task-list")

//             let mayorID = 1
//             //verificar cantidad de hijos de una etiqueta 
//             if(taskListElement.children.length > 0){
//                 const ultimoHijo = taskListElement.children[taskListElement.children.length - 1]
//                 mayorID += parseInt (ultimoHijo.id)
//             }


//             let bkgColor = ""
//             if(selectElement.value <= 2){
//                 bkgColor = "background-color: #005EA8; color: white;"
//             }else if(selectElement.value > 2 && selectElement.value < 5){
//                 bkgColor = "background-color: #FBA402; color:white"
//             }else{
//                 bkgColor = "background-color: #FF0000; color: white;"
//             }


//             taskListElement.innerHTML += 
//             `<li id= "${mayorID}" class= "list-group-item d-flex justify-content-between align-items-center"
//                         style="word-break: keep-all; ${bkgColor}">
//                         <div class="mx-2 text-start" style="flex: 1;">
//                             <div class="fw-bold">${inputElement.value}</div>
//                             <div class="fw-bold">${inputElementD.value}</div>
//                         </div>
                        

//                         <span class="badge bg-primary rounded-pill mx-1">${selectElement.value}</span>

//                         <button onclick="deleteTask(${mayorID})" type="button" class="btn btn-outline-danger btn-sm">
//                             <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px"
//                                 height="20px">
//                                 <path
//                                     d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
//                             </svg>

//                         </button>
//                     </li>
//                 `

    //             const taskListElementCont = document.getElementById("task-total")

    //             taskListElementCont.innerHTML = ":" + taskListElement.children.length

    //     }else{
    //         alert("debes especificar esta tarea")
    //     }
    // })
