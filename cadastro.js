function cadastrar() {
        let user = document.getElementById('user').value;
        let senha = document.getElementById('password').value;
        let confirmeSenha = document.getElementById('confirmPassword').value;
      
        if (user === "" || senha === "" || confirmeSenha === "") {
          alert('Preencha todos os campos');
        }else if(senha!==confirmeSenha){
            alert('Confirmação de senha invalida')
        } else {
          alert('Cadastro realizado com sucesso');
        } 
      }
      
        
