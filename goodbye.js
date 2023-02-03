(function (window) {
    var say = "Good Bye";
    var byesay = {
      speak: function (name) {
        console.log(say + " " + name);
      }
    };
    window.byesay = byesay;
  })(window);
  