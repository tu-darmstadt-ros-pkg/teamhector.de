function deobfuscate() {
  document.body.removeEventListener("mousemove", deobfuscate)
  for (let el of document.getElementsByClassName("obfuscated")) {
    let obfuscated = el.getAttribute("data-obfuscated")
    let data = atob([...obfuscated].reverse().join(''))
    let target = el.getAttribute("data-target") || "innerText"
    if (el[target].indexOf(":data:") == -1) {
      el[target] = data
    } else {
      el[target] = el[target].replace(":data:", data)
    }
  }
}

document.body.addEventListener("mousemove", deobfuscate)

function toggleNavigation() {
  let navigation = document.getElementById("navigation_wrap")
  if (navigation.classList.contains('open')) {
    navigation.classList.remove('open')
  } else {
    navigation.classList.add('open')
  }
}
