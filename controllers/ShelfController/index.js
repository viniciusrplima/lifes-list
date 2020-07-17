const index = require('./actions/index');
const store = require('./actions/store');
const update = require('./actions/update');
const remove = require('./actions/remove');
const placebook = require('./actions/placebook');
const removebook = require('./actions/removebook');

module.exports = {
  store,
  index,
  update,
  remove,
  placebook,
  removebook
}
