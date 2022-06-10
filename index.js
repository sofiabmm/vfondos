let preguntas=['Tell us something about yourself/ How would you describe yourself Can you talk to us about yourself', 'What are your hobbies / interest?', 'What do you do in your free time?', 'Why do want change the job?', 'What are your consider to be your greatest strengths?', 'What are your greatest weaknesses?', 'Why did you leave your previus job?', 'Why are you interested in working here?', 'Who is your current employer?', 'Why are you leaving your current job?']

let index = Math.floor(Math.random()*(preguntas.length - 1) + 1)

console.log(preguntas[index])