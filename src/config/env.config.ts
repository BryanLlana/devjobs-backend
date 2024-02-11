export const EnvConfiguration = () => ({
  PORT: +process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME
})