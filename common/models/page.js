module.exports = function(Page) {

  Page.readAloud = function (cb) {
    var response = "In the future this could return a audio file reading the requested page";
    cb(null, response);
  }

  Page.remoteMethod('readAloud',
    {
      http: {path: '/readAloud', verb: 'get'},
      accepts: [],
      returns: {arg: 'msg', type: 'string'}
    });
}
