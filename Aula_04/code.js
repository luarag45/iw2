function banco() {
    const ds = [
        {id:1,login:"Luara",senha:"12345",email:"Luara@gmail.com"},
        {id:2,login:"Luana",senha:"54321",email:"Luana@gmail.com"},
        {id:3,login:"Laura",senha:"32451",email:"Laura@gmail.com"}
    ]

    const dados = JSON.stringify(ds)

    localStorage.setItem("dados", dados)

    return dados

}

function cad(){
    let id = document.getElementById("id").value
    let lg = document.getElementById("login").value
    let sn = document.getElementById("senha").value
    let em  = document.getElementById("email").value
    
    let meuId = parseInt(id)

    const ds = {id:meuId,login:lg,senha:sn,email:em,fone:fn}

    alert(ds)



}