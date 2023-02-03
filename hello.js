(function (window) {
    var say = "Hello";
    var hellosay = {
      speak: function (name) {
        console.log(say + " " + name);
      }
    };
    window.hellosay = hellosay;
  })(window);
  
  