// 1 - inserir dado
localStorage.setItem("user_Comercial_5", "Gerente Loja")

// 2 - restart sem perder dados


// 3 - resgatar item

const perfil = localStorage.getItem("user_Comercial_5")

console.log(perfil);



// 4 - resgatar item que não existe

const demitir = localStorage.getItem("lista de salarios")

console.log(demitir); //null
/*
const checarPerfil = (
  );
*/
if(demitir){
  console.log('Você não pode acessar a demissão de pessoas.');
}

ArrayPermissão = [{
  pessoa: {
    nome: 'ana',
    setor: 'financeiro',
      Empresa: {
        'empresa_1': 'JP',
        'empresa_2': 'JPsX',

      }
    }
}]

// 5 - remover os itens
localStorage.setItem('pessoa', 'XXE' + JSON.stringify(ArrayPermissão));
localStorage.setItem('people', 'Carla');

//localStorage.removeItem()

// 6 limpar todos os itens
localStorage.setItem('a', 1);
localStorage.setItem('b', 2);
//Sempre vai retornar ums string
console.log(typeof localStorage.getItem('a')); 

//Usada para logout->Sair
//localStorage.clear();

// Session Storage

// 7 - Perde os dados ao fechar o navegador.
sessionStorage.setItem('number', 123)
sessionStorage.setItem('car', 'mustang')

// 8 - reiniciar e perder

const storage = sessionStorage.getItem('number');

console.log('storage'+storage);

//sessionStorage.removeItem('number'); //remove apenas 'key'.

//sessionStorage.clear(); //Limpa tudo7.


// 9 - Salvar Objeto

const person = {
  name: 'vinicius',
  age: 27,
  job: 'Developer or Programmer'
};

localStorage.setItem('person', JSON.stringify(person));
//localStorage.clear();

const getPerson = localStorage.getItem('person');
console.log(getPerson); // person {"name":"vinicius","age":27,"job":"Developer or Programmer"}
console.log(getPerson.job);//undefined 
//O certo é:

const getPersonObejct = JSON.parse(getPerson);
console.log(typeof getPersonObejct);//Object
console.log(getPersonObejct.job);// 'Developer or Programmer'




//localStorage.setItem(usuario, "ViniSSantos")
//const usuario = 'usuario';
//localStorage.key()

/*
const http = require('http');

const hostname = '09VM9QARA03615';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/