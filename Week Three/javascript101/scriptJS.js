let course = {
  name: 'JavaScript Applications',
  awesome: true,
  teachers: ['Assaf', 'Shane'],
  students: [
    {
      name: 'Steve',
      computer: {
        OS: 'Linux',
        type: 'laptop'
      }
    },
    {
      name: 'Katy',
      computer: {
        OS: 'OSX',
        type: 'macbook'
      }
    },
    {
      name: 'Chuck',
      computer: {
        OS: 'OSX',
        type: 'macbook'
      }
    }
  ],
  preReqs: {
    skills: ['html', 'css', 'git'],
    equipment: {
      laptop: true,
      OSOptions: ['linux', 'osx']
    }
  }
}

console.log(course.name)
console.log(course.teachers[1])
console.log(course.students[0].name)
console.log(course.students[1].computer.type)
console.log(course.preReqs.equipment)
console.log(course.preReqs.equipment.OSOptions[1])
console.log(course.preReqs.equipment.OSOptions.join(' or '))

let osx = []
let students = course.students

for (let i = 0; i < students.length; i++) {
  if (students[i].computer.OS === 'OSX') {
    osx.push(students[i].name)
  }
}

console.log(osx)
