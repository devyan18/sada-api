export const environments = {
  port: parseInt(process.env.PORT || '0') || 3000,
  database: {
    HOST: process.env.MYSQLHOST || 'localhost',
    URL: process.env.MYSQL_URL || 'mysql://username:password@localhost:3306/database',
    PASSWORD: process.env.MYSQLPASSWORD || 'password',
    USER: process.env.MYSQLUSER || 'username',
    PORT: parseInt(process.env.MYSQLPORT || '0') || 3306,
    DB: process.env.MYSQLDATABASE || 'database',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/database'
  }
}
