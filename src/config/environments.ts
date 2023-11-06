export const environments = {
  port: parseInt(process.env.PORT || '0') || 3000,
  database: {
    HOST: process.env.MYSQLHOST || '',
    URL: process.env.MYSQL_URL || '',
    PASSWORD: process.env.MYSQLPASSWORD || '',
    USER: process.env.MYSQLUSER || 'root',
    PORT: parseInt(process.env.MYSQLPORT || '0') || 3306,
    DB: process.env.MYSQLDATABASE || '',
    MONGODB_URI: process.env.MONGODB_URI || ''
  }
}
