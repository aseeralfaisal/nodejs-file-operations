const fs = require('fs')
const path = require('path')
const { parse } = require('csv-parse')
require('dotenv').config()
const os = require('os')
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

const filePath = `${__dirname}/me.jpg`

const readCSV = async (file) => {
    try {
        const content = await fs.readFile(file, 'utf-8')
        const writeData = await fs.writeFile(`${__dirname}/data_from_csv.txt`, content, { flag: 'w+' })
        console.log(writeData)
    } catch (err) {
        console.log(err)
    }
}

const eventEmit = () => {
    eventEmitter.on('start', (start, end) => {
        console.log(`started from ${start} to ${end}`);
    });

    eventEmitter.emit('start', 1, 100);
}

const fileDescriptor = async () => {
    const file = await fs.open(filePath, 'r')
    // console.log(await fs.readFile(file, { encoding: 'utf8' }))
    console.log(await fs.stat(filePath))
    file.close()
}
const getDirectory = async () => {
    const dir = "/Users/aseer/Code_Projects/read_csv/backup"
    const direc = await fs.readdir(dir)
    console.log(direc)
}


const getIPAddress = () => {
    for (const item of os.networkInterfaces()["Wi-Fi"]) {
        if (item.family == 'IPv4') {
            return item.address
        }
    }
}

const buf = Buffer.from('Hey!');
buf[0] = 73
console.log(buf[0]); // 101
console.log(buf[1]); // 101
console.log(buf[2]); // 121
console.log(buf.toString())

const buf = Buffer.alloc(102400000)
const base64 = fs.readFileSync(filePath, "base64")
const buffer = Buffer.from(base64, "base64")
fs.writeFileSync('image.jpg', buffer)
console.log(buffer.toString())
