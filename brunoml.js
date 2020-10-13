var BrunoML = {
  bold: function(elem, txt) {
    var i = document.qureySelectorAll(elem)
    this.repeat(i, "<b>" + txt + "</b>")
  },
  repeat: function(i, innerhtm) {
    for (var j = 0; j < i.length; j++) {
      i[j].innerHTML = innerhtm;
    }
  },
  italic: function(elem, txt) {
    var i = document.querySelectorAll(elem)
    this.repeat(i, "<i>" + txt + "</i>")
  },
  addElem: function(elem, elemn, txt) {
    var i = document.qureySelectorAll(elem)
    this.repeat(i, "<" + elemn + ">" + txt + "</" + elemn + ">")
  }
}
