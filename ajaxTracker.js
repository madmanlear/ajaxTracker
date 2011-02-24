function ajaxTracker() {
  var that = this;
  this.active = {};
  this.start_callback = function() {};
  this.stop_callback = function() {};
  this.clear = function() {
    that.active = {};
  }
  this.complete_call = function(id) {
    delete that.active[id];
    if(that.is_empty(that.active)) {
      that.stop();
    }
  }
  this.is_empty = function(ob) {
    for(var i in ob){ return false;}
    return true;
  }
  this.makeid = function(length) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for(var i=0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  this.register_call = function() {
    id = that.makeid(8);
    if(isEmpty(that.active)) {
      that.start();
    }
    that.active[id] = id;
    return id;
  }
  this.start = function() {
    that.start_callback();
  }
  this.stop = function() {
    that.stop_callback();
    that.start_callback = function() {};
    that.stop_callback = function() {};
  }
}