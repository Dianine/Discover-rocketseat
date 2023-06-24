function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /*Pega tag IMG*/
  const img = document.querySelector("#profile img")

  /*Substituir imagem*/
  if (html.classList.contains("light")) {
    /*Se tiver light mode, adiconar a imagem light*/
    img.setAttribute("src", "./assets/perfil_2.png")
  } else {
    /*Se tiver sem light mode, manter imagem normal*/
    img.setAttribute("src", "./assets/perfil.png")
  }
}
