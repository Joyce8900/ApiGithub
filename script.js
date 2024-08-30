const div = window.document.getElementById("div")
const buscar = () => {
  div.innerHTML = ""
  let nome = document.getElementById("input").value.trim()
  // const userName = "Joyce8900"
  fetch(`https://api.github.com/users/${nome}`, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  }).then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
  }).then((data) => {
    if(data.status === '404'){
      let h2 = document.createElement("h2")
      h2.innerHTML = `Usuário não encontrado! ${nome}`
      div.appendChild(h2)
    }else{
      let img = document.createElement("img")
      img.src = `${data.avatar_url}`
      img.style.width = "150px"
      img.style.height = "150px"
      img.style.borderRadius = "50%"
      img.style.border = "2px solid #000" 
      img.style.objectFit = "cover"
      div.appendChild(img)
      let h2 = document.createElement("h2")
      h2.innerHTML = `${data.name}`
      div.appendChild(h2)
      let p = document.createElement("p")
      p.innerHTML = `Id: ${data.id}<br> Bio: ${data.bio}<br>Compania: ${data.company}<br> Local: ${data.location}`

      div.appendChild(p)
      console.log(data)
    }
    
  }).catch((err) => {
    h2.innerHTML = `Ops! Tivemos um erro, digite novamente.`
    console.log("Erro: " + err)
  })
}
