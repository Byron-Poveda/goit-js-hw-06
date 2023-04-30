const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const {
      elements: { email, password },
    } = e.currentTarget;
    if (email.value === "" || password.vale === ""){
        alert("Todos los espacios del formulario deben ser rellenados")
    }else{
        console.log(`Su correo es: ${email.value}`);
        console.log(`Su contraseña es: ${password.value}`)
        e.target.reset();
    }
});
