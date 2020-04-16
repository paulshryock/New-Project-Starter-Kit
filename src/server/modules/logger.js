const { createLogger, format, transports } = require('winston')
const path = require('path')

let log_level = ''
let logPath = '_logs'

const log = createLogger({
  level: log_level,
  format: format.combine(
    format.timestamp(),
    format.prettyPrint()
  ),
  transports: [
    new transports.File({
      filename: path.join(logPath, 'access.log'),
      level: log_level
    }),
    new transports.File({
      filename: path.join(logPath, 'error.log'),
      level: 'error'
    })
  ]
})

// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (process.env.NODE_ENV !== 'production') {
  log.add(new transports.Console({
    format: format.cli()
  }))
}

module.exports = {
  log: log
}