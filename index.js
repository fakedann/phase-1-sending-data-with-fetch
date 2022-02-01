// Add your code here

function submitData(user, email){
  return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name: `${user}`,
    email: `${email}`,
  }),
})
.then(res => res.json())
.then(usuario => appendToDom(usuario.id))
.catch(error => appendToDom(error.message))

}

function deleteObj(id){
  fetch(`http://localhost:3000/users/${id}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json"
  }
})
.then(res => res.json())
.then( obj => console.log(obj))
}

function appendToDom(value){
  let p = document.createElement('p');
  p.textContent = `${value}`
  let body = document.querySelector('body')
  body.appendChild(p)
}


