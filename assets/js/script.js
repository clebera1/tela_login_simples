// Função Login
function login() {
  let usuario = document.getElementById('usuario').value;
  let senha = document.getElementById('senha').value;

  if (usuario === "" || senha === "") {
    alert('Preencha todos os campos');
    return;
  }

  let cadastroArmazenado = localStorage.getItem('cadastro');
  if (cadastroArmazenado === null) {
    alert('Usuário não cadastrado');
    return;
  }

  let dadosCadastro = JSON.parse(cadastroArmazenado);
  if (usuario === dadosCadastro.username && senha === dadosCadastro.password) {
    alert('Bem-vindo!');
    location.href = '/home.html'; // Redirecionar para a página "home.html"
  } else {
    alert('Nome de usuário ou senha inválidos');
  }
}


//Função Cadastro 
function cadastrar() {
  let user = document.getElementById('user').value;
  let senha = document.getElementById('password').value;
  let confirmeSenha = document.getElementById('confirmPassword').value;

  if (user === "" || senha === "" || confirmeSenha === "") {
    alert('Preencha todos os campos');
    return;
  }

  if (senha !== confirmeSenha) {
    alert('Confirmação de senha inválida');
    return;
  }

  let dadosCadastro = {
    username: user,
    password: senha
  };

  localStorage.setItem('cadastro', JSON.stringify(dadosCadastro));
  console.log(localStorage.getItem('cadastro'));

  alert('Usuário criado com sucesso');
  location.href = 'home.html';
}
