import 'dotenv/config'
import { environments } from './config/environments'
import { startApp } from './app'

function main() {
  startApp(environments.port)
}

main()
