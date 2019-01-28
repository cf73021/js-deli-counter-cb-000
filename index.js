function takeANumber(current_line, new_person) {
  current_line.push(new_person)
  var line_place = current_line.length
  return `Welcome, ${new_person}. You are number ${line_place} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  }
  else {
    return 'There is nobody waiting to be served!'}
}
