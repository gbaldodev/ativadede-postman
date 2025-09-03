
const cadastros = document.getElementById("CadastrosLista");
fetch("https://crudcrud.com/api/ad2ec300a2c44d1588d0db5cceb3ca6c/ids")
  .then((response) => response.json())
  .then(ListaCadastros => {


    ListaCadastros.forEach(cadastro => {

     const item = document.createElement("li");
     item.innerHTML = "Nome:" + "  " + cadastro.nome + " ------ " + "   " + "   " + "Email :" + " " +cadastro.email + ` <button onclick="remove('${CadastrosLista._id}', this)">X</button>`;
     cadastros.appendChild(item);

    });
  }
)

document.getElementById("add").addEventListener("click", ()=>{

    const nome = document.getElementById("nomeIds").value;
    const email = document.getElementById("emailIds").value;
    fetch("https://crudcrud.com/api/ad2ec300a2c44d1588d0db5cceb3ca6c/ids", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nome,email})
    })
    .then(response => response.json())
    .then(CadastrosLista => {                                                                                                 
        const item = document.createElement("li");
        item.innerHTML = "Nome:" + "  " + CadastrosLista.nome + " " + "- - - |||| - - -" + "  " + "Email :" + CadastrosLista.email + ` <button  onclick="remove('${CadastrosLista._id}', this)">X</button>`;
        cadastros.appendChild(item);
    }
    ) 
  });

  function remove(ids, btn) {
    fetch(`https://crudcrud.com/api/ad2ec300a2c44d1588d0db5cceb3ca6c/ids/${ids}`,{
        method: "DELETE"
    })
    .then(response =>{
        if(response.ok){
            alert("Cadastro removido com sucesso!");
            btn.parentElement.remove();
        }else
            alert("Erro ao remover cadastro.");
    })
}