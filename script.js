(function (window) {
    var names = ["niloo", "chia", "yasi", "mom", "dad", "papa", "jimi", "pari", "jack", "lia"];
  
    for (var i in names) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byesay.speak(names[i]);
      } else {
        hellosay.speak(names[i]);
      }
    }
  })(window);
  
  