export const environments = {
  port: parseInt(process.env.PORT || '0') || 3000,
  database: {
    HOST: process.env.MYSQLHOST || 'localhost',
    URL: process.env.MYSQL_URL || 'mysql://username:password@localhost:3306/database',
    PASSWORD: process.env.MYSQLPASSWORD || 'juanjo124',
    USER: process.env.MYSQLUSER || 'root',
    PORT: parseInt(process.env.MYSQLPORT || '0') || 3306,
    DB: process.env.MYSQLDATABASE || 'ClimaDBv1',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://ipfrecaf:recaf12@cluster0.rhyuqe1.mongodb.net/Prueba'
  }
}
