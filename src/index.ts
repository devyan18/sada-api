import 'dotenv/config'
import { environments } from './config/environments'
import { startApp } from './app'
import { v1 as router } from './api/v1'

function main () {
  startApp(environments.port, router)
}

main()
