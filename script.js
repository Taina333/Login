document.getElementById('formulario').addEventListener('submit',function login(event){
    event.preventDefault();

    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;

    if (user === "taina" && senha === "1234"){
        alert('Sucesso');
        location.href = "home.html";
    }else{
        alert('Usuário ou senha incorreto');
    }
});