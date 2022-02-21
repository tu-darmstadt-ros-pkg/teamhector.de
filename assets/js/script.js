let deobfuscated = false
let deobfuscatedAt = null

function deobfuscate(evt) {
  if (deobfuscated) {
    // Block events for 100ms to make sure on mobile devices tap to load doesn't also trigger link
    if (evt && evt.type === 'click' && new Date() - deobfuscatedAt < 100) evt.preventDefault()
    return
  }
  document.body.removeEventListener("mousemove", deobfuscate)
  let elements = []
  for (let el of document.getElementsByClassName("obfuscated")) {
    let obfuscated = el.getAttribute("data-obfuscated")
    let data = atob([...obfuscated].reverse().join(''))
    let target = el.getAttribute("data-target") || "innerText"
    if (el[target].indexOf(":data:") == -1) {
      el[target] = data
    } else {
      el[target] = el[target].replace(":data:", data)
    }
    elements.push(el)
  }

  for (let el of elements) { el.classList.remove('obfuscated') }

  deobfuscated = true
  deobfuscatedAt = new Date()
  if (evt && evt.type === 'click') {
    evt.preventDefault()
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
