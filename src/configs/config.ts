export default () => ({
    port: process.env.PORT,
    database: {
        connectionString: process.env.CONNECTION_STRING
    }
})