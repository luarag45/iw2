function banco(){
const dados = [
                {id:1,login:"Luara",senha:"1234",email:"luara@gmail.com"},
                {id:2,login:"Luana",senha:"4321",email:"luana@gmail.com"},
                {id:3,login:"Laura",senha:"1111",email:"laura@gmail.com"}

              ]

    const ds = JSON.stringify(dados)

    localStorage.setItem("bd",ds)

    return ds
}

function converte(){
    const ds = JSON.parse (localStorage.getItem("bd"))
    localStorage.removeItem("bd")
    
    let t = {id:5,login:"Lura",senha:"2222",email:"lura@gmail.com"}
    ds.push()

    const json = JSON.stringify(ds)

    localStorage.setItem("bd", json)
}