const arrayPerson = ['Your mother ', 'Your friend ', 'Your sister ', 'Your partner ',
'Your boss ']
const arrayTime = ['will be ', 'is ']
const arrayAdj = ['friendly', 'beautiful', 'kind', 'clever', 'smart', 'polite']

function getMessage() {

            let firstIndex = Math.floor(Math.random() * arrayPerson.length)
            let secondIndex = Math.floor(Math.random() * arrayTime.length)
            let thirdIndex = Math.floor(Math.random() * arrayAdj.length)
            return `${arrayPerson[firstIndex]} ${arrayTime[secondIndex]} ${arrayAdj[thirdIndex]}` 


}
console.log(getMessage())
