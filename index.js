function takeANumber(current_line, new_person) {
  current_line.push(new_person)
  var line_place = current_line.length
  return `Welcome, ${new_person}. You are number ${line_place} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return 'There is nobody waiting to be served!'}
}

function currentLine(current_line) {
  if (current_line.length > 0) {
    var line_string = "The line is currently: "
    var i = 0
    do {
      var lineList = `1. ${line[0]}`
      for (var n = 1; n < line.length; n++) {
        lineList += `, ${n+1}. ${line[n]}`;
      }
  }
    while (i < current_line.length)
  }
  else {
    return "The line is currently empty."
  }
  return line_string
}
