import 'dotenv/config'
import { environments } from './config/environments'
import { startApp } from './app'
import fs from 'fs'
import path from 'path'
import { WindDirection, WindForce, FakeData } from './entities/entities'

function main() {
  getDataFiles()
  // startApp(environments.port)
}

main()

function getWindForceReference(str: String) {

}

function getDataFiles() {
  const myPath = path.join(__dirname, 'datos', 'data_1.txt')
  const data1 = fs.readFileSync(myPath, 'utf8')

  const headers = data1.split('\n')[0].split(',').map((header) => header.trim())
  const rows: Array<FakeData> = data1.split('\n').slice(1)
    .map((row) => row.split(',')
      .map((value) => value.trim()))
    .map((row) => {
      const obj: FakeData = {
        temperature: Number(row[0]),
        humidity: Number(row[1]),
        precipitations: Number(row[2]),
        windDirection: row[3] as WindDirection,
        windForce: row[4] as WindForce,
        windSpeed: Number(row[5])
      }
      console.log(row)
      return obj
    })

  console.log(headers)
}
