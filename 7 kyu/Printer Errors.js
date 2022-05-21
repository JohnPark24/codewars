function printerError(s) {
    let colors = /[a-m]/g;
    return `${s.search(colors)}/${s.length}`
  }