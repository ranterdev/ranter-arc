import express from 'express'
import baseLogger from '@services/logger'

const startServer = () => {
    const app = express()
    const port = process.env.APP_PORT || 4000

    app.get('/healthz', (_, r) => r.sendStatus(200))
    app.listen(port, () =>
        baseLogger.info(
            '🚀 Server listening on port http://localhost:' + port + '/healthz'
        )
    )
}

if (require.main === module) {
    startServer()
}
