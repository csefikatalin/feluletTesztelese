$(function () {
  $('#ok').on('click', nevkiir)
})
function nevkiir() {
  let nev = $('#nev').val()
  let nevtomb = atalakit(nev)

  nevtomb.forEach((element) => {
    $('.eredmeny').append('<p>' + element + '</p>')
  })
}

function atalakit(nev) {
  console.log(nev.split(' '))
  return nev.split(' ')
}
