const isUserYoungerThan18Years = true;
const doesUserLivesOutsideBrazil = true;

if (isUserYoungerThan18Years && doesUserLivesOutsideBrazil) {

}

//Sempre que possivel escreva condicionais sem negação


// Early return vs else.

function isUSerOlderThan18Years(user) {
  if (!user) {
    return { error: true }
  }

  return user.age >= 18
}

//Evite condicionais alinhadas

user.age >= 18 ? user.age === 18 ? : : 

if (user.age > 18){
  return;
}

if ()