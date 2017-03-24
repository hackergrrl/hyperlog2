var hypercore = require('hypercore')

function Hyperlog (dir, opts) {
  if (!(this instanceof Hyperlog)) return new Hyperlog(opts)
  if (!dir) throw new Error('dir param must be set')
  opts = opts || {}
  opts.valueEncoding = opts.valueEncoding || 'utf-8'

  this.core = hypercore(dir, opts)
}

Hyperlog.prototype.add = function (links, value, opts, cb) {
}

Hyperlog.prototype.append = function (value, opts, cb) {
}

Hyperlog.prototype.batch = function (docs, opts, cb) {
}

Hyperlog.prototype.heads = function (opts, cb) {
}

Hyperlog.prototype.createReadStream = function (opts) {
}

Hyperlog.prototype.replicate = function (opts) {
}
