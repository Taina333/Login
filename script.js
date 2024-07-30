const usuarios = [
    {
        usuario: 'taina',
        senha: '1234'
    },
    {
        usuario: 'Suzany',
        senha: '6670'
    },
    {
        usuario: 'admin',
        senha: '0987'
    },
    {
        usuario: 'miku',
        senha: '1010'
    }
]

document.getElementById('formulario').addEventListener('submit',function login(event){
    event.preventDefault();

    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;
    var loginValido = false;

    for (var i in usuarios){
        if (user == usuarios[i].usuario && senha == usuarios[i].senha){
            loginValido = true;
            break;
    }
}

    if(loginValido == true){
        alert('sucesso');
        location.href = "home.html";
    }else{
        alert('usuario ou senha incorreta');
    }});