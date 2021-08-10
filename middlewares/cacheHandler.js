
const NodeCache = require( "node-cache" );
const myCache = new NodeCache( { stdTTL: 1130 } );

module.exports = myCache;