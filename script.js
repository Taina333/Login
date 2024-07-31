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
        alert('Sucesso');
        location.href = "home.html";
    }else{
        alert('Usuário ou senha incorreta');
    }});

    document.getElementById('registrar').addEventListener('click',function(){
        var user = document.getElementById('user').value;
        var senha = document.getElementById('senha').value;

        if (user && senha === usuarios){
            alert('Usuário existente');
        
        }else if (user && senha != usuarios){
            usuarios.push({ usuario: user, senha: senha});
            alert('Usuário registrado com sucesso');
        }else{
            alert('Preencha ambos os campos para registrar');
        }
        }
    );

/*
    document.getElementById('registrar').addEventListener('click',function(){
        var user = document.getElementById('user').value;
        var senha = document.getElementById('senha').value;

        if (user && senha){
            usuarios.push({ usuario: user, senha: senha});
            alert('Usuário registrado com sucesso');
        }else{
            alert('Preencha ambos os campos para registrar');
        }
        }
    );*/