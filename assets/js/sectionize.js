function signify() {
  const tableBody = document.querySelector('tbody')
  if (!tableBody) return
  const rows = tableBody.querySelectorAll('tr')
  for (const row of rows) {
    const signatureCell = row.children.item(1)
    signatureCell?.classList.add('signature')
  }
}

signify()

function sectionize() {
  const main = document.querySelector('main')
  if (!main) return
  const sections = []
  const children = Array.from(main.children)
  for (const child of children) {
    if ((child instanceof HTMLElement) && child.tagName === 'H3') {
      const section = document.createElement('section')
      section.appendChild(child)
      sections.push(section)
      continue
    }
    let section = sections[sections.length - 1]
    if (!section) {
      section = document.createElement('section')
      sections.push(section)
    }
    section.appendChild(child)
  }
  main.replaceWith(...sections)
}

sectionize()
