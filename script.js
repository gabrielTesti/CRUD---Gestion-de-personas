let listaEmpleados = [];

const objEmpleado={
    id: " ",
    nombre: " ",
    apellido:" ",
    edad: " "
};

let editando = false //Sirve para detectar cuando tiene que agregar y cuando tiene que actualizar la informacion

const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const edadInput = document.querySelector("#edad");
const botonAgregar = document.querySelector("#botonAgregar")

formulario.addEventListener("submit", validarInformacion);

function validarInformacion(e){
    e.preventDefault();


    if(nombreInput.value ===" "|| apellidoInput.value===" "  || edad.value===" "){
        alert("Todos los campos son obligatorios")
        return; 
    }

    if(editando){
        editando=false
    }
    else{
        objEmpleado.id=Date.now();
        objEmpleado.nombre=nombreInput.value;
        objEmpleado.apellido=apellidoInput.value;
        objEmpleado.edad=edadInput.value;

        agregarEmpleado();
    }
    
};


function agregarEmpleado(){
    listaEmpleados.push({...objEmpleado});

    mostrarEmpleados();
};

function mostrarEmpleados(){
    const divEmpleados = document.querySelector(".div-empleados");
    listaEmpleados.forEach(empleado=>{
        const {id, nombre, apellido, edad} = empleado;
        const parrafo = document.createElement("p");

        parrafo.textContent=`${id} - ${nombre} ${apellido} - ${edad} -`
        parrafo.dataset.id = id;
        
        const editarBoton = document.createElement("button")
        /* editarBoton.onclick = () => cargarEmpleado(empleado) */
        editarBoton.textContent="Editar"
        editarBoton.classList.add("btn", "btn-editar")
        parrafo.append(editarBoton)

        const eliminarBoton = document.createElement("button")
        /* eliminarBoton.onclick = () => eliminarEmpleado(empleado) */
        eliminarBoton.textContent="Eliminar"
        eliminarBoton.classList.add("btn", "btn-eliminar");
        parrafo.append(eliminarBoton);


        const hr = document.createElement("hr");

        divEmpleados.appendChild(parrafo)
        divEmpleados.appendChild(hr)

    });



};




