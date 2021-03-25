const db = firebase.firestore();

const taskForm = document.getElementById('task-form');

const saveTask = (nombre, direccion, telefono, email) =>
    db.collection("tasks").doc().set({
        nombre,
        direccion,
        telefono,
        email,
    });

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = taskForm["task-name"];
    const direccion = taskForm["task-direccion"];
    const telefono = taskForm["task-telefono"];
    const email = taskForm["task-email"];
    
    await saveTask(nombre.value, direccion.value, telefono.value, email.value);

    taskForm.reset();
    nombre.focus();

    console.log(nombre, direccion, telefono, direccion);
});