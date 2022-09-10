(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  byeSpeaker.speakSimple = function (name) {
    return speakWord + " " + name;
  };

  window.byeSpeaker = byeSpeaker;
})(window);
