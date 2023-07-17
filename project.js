const nameForm = document.querySelector("#name-form"); // add element htm identado por id 
const welcomeContainer = document.querySelector("#welcome");
const logoutBtn = document.querySelector("#logout");

//localStorage.clear();
// As funnçoes devem ficar no começo do código, como Boas Práticas.
function checkUser(){
    const userName = localStorage.getItem("name");

    if(userName) { // Ou seja -> Se existir userName populado
        nameForm.style.display = "none";
        welcomeContainer.style.display = "block"; // Esconde card. semelhante aos states do React kkk

        const elementoNomeUsuario = document.querySelector("#userName");
        elementoNomeUsuario.textContent = userName;
    }else{
        nameForm.style.display = "block";
        welcomeContainer.style = "none";
    }
}

// addEventListener -> Add um (e) evento a nameForm
nameForm.addEventListener("submit", (e) => { 
    e.preventDefault(); // preventDefault -> Cancela o evento se for cancelável, sem parar a propagação do mesmo

    const nameInput = document.querySelector("#name");
    // localStorage.setItem("name" , nameInput); // object.Object
    localStorage.setItem("name" , nameInput.value); // Usa o .value (propriedade para passar o valor)
    
    nameInput.value = ""; // Zera o valor

    checkUser();
});

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("name");
    checkUser();
});


// Application start (No começo da aplicação)
checkUser();
// function checkUser(){ ... Levamos para o topo, Boas Práticas.
