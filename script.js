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

/* login com sucesso */
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
        alert('Sucesso');
        location.href = "home/home.html";
    }else{
/* login informação incorreta */
        alert('Usuário ou senha incorreta');
    }});

/* registrar erro */
document.getElementById('registrar').addEventListener('click', function() {
    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;

    if (!user || !senha) {
        alert('Preencha ambos os campos para registrar');
        return;
    }
/* registrar usuário existente */
    var usuarioExistente = usuarios.some(u => u.usuario === user);

    if (usuarioExistente) {
        alert('Usuário já registrado');
    } else {
/* registrar com sucesso */
        usuarios.push({ usuario: user, senha: senha });
        alert('Usuário registrado com sucesso');
    }
    });
