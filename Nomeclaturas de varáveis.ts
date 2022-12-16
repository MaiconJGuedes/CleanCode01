// Nomeclaturas variáveis

const users = ['Diego, Mayk, Rodrigo']

const usersStartingWithLetterD = users.filter(users => {
  return users.startsWith('D')
});


/*

Boas práticas para um código limpo

- Não abreviar (ex: users = u)
- A variável tem que ser auto explicativa, não importa o tamanho dela desde que seja clara.
- Evitar nomes genéricos (data, response, list, args, params)

*/

function getUsers() {
  const data = getUsersFromDataBase()
  
  // validação
  // manipulação dos dados (mapping)

  return data
}

function getCompanies() {
  const data = getUsersFromDataBase ()

  return data
}