contar = () => {
  var numIni = document.getElementById('numIni')
  var numFin = document.getElementById('numFin')
  var interval = document.getElementById('interval')
  var res = document.getElementById('res')

  if (numIni.value.length == 0 || numFin.value.length == 0 || interval.value.length == 0) {
    res.innerHTML = `Impossível contar...`
    alert("Faltam Dados")

  } else {
    res.innerHTML = `Contando...<br/>`

    let ini = Number(numIni.value)
    let fim = Number(numFin.value)
    let inter = Number(interval.value)

    if (inter <= 0) {
      alert("intervalo inválido... Considerando 1 como valor")
      inter = 1
    }


    if (ini <= fim) {
      for (let i = ini; i <= fim; i+= inter) {
        res.innerHTML += `\u{1F449} ${i} ` 
      }
    } else {
      for (let i = ini; i >= fim; i-= inter) {
        res.innerHTML += `\u{1F449} ${i} ` 
      }
    }
    res.innerHTML += ` \u{1F449}  \u{1F3C1}` 
  }
}