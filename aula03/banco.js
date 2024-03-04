function dados(){

    const ds = [
                {id:1,login:"Luara",senha:"12345",email:"Luara@gmail.com"},
                {id:2,login:"Luana",senha:"54321",email:"Luana@gmail.com"},
                {id:3,login:"Laura",senha:"32451",email:"Laura@gmail.com"}
              ]

     const dados = JSON.stringify(ds) //passa para o formato JSON - texto

     localStorage.setItem("nome", dados) //insere no armazenamento do navegador

    return dados
}

function removerbd(){

    localStorage.removeItem("nome")

}
