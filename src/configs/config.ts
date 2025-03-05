export default () => ({
    port: process.env.PORT,
    database: {
        connectionString: process.env.CONNECTION_STRING
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
})