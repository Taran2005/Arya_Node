const amount = 9

if (amount < 10) {
    console.log('small number')
} else {
    console.log('large number')
}

console.log(`hey it's my first node app!!!`)

console.log(__dirname)

const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter'

module.exports = [john, peter]

const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)

const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')

const names = require('./names')
console.log(names)

const { readFile, writeFile } = require('fs').promises;

const start = async () => {
    try {
        console.log('start');
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`);
        console.log('done with this task');
    } catch (err) {
        console.error(err);
    }
    console.log('starting next task');
};

start();
