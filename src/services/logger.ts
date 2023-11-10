import pino from 'pino'

const baseLogger = pino({
    level: process.env.LOGLEVEL || 'info'
})

export default baseLogger
