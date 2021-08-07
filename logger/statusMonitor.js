
// for server status monitoring

const statusMonitor = require('express-status-monitor')({
                        chartVisibility: {
                            cpu: true,
                            mem: true,
                            load: true,
                            eventLoop: true,
                            heap: true,
                            responseTime: true,
                            rps: true,
                            statusCodes: true
                        }});

module.exports = statusMonitor;
 