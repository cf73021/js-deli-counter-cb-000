function takeANumber(current_line, new_person) {
  current_line.push(new_person)
  var line_place = current_line.length
  return `Welcome, ${new_person}. You are number 10 in line.`
}
