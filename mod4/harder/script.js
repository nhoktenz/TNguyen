// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************

(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];
  console.log(
    "--------------------SOLUTION FOR COURSERA REQUIREMENT------------------------"
  );
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLocaleLowerCase();
    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

  console.log(
    "---------------------USING CALLBACK MAP FUNCTION------------------------"
  );

  /***  CALLBACK FUNCTION MAP  *****/
  function helloByeFuc(e) {
    var firstLetter = e.charAt(0).toLocaleLowerCase();
    if (firstLetter === "j") {
      return byeSpeaker.speak(e);
    } else {
      return helloSpeaker.speak(e);
    }
  }
  names.map(helloByeFuc);

  console.log(
    "----------------------------USING INLINE MAP FUNCTION------------------"
  );

  /*** BONUS: INLINE MAP  *****/
  names.map(function (e) {
    var firstLetter = e.charAt(0).toLocaleLowerCase();
    if (firstLetter === "j") {
      byeSpeaker.speak(e);
    } else {
      helloSpeaker.speak(e);
    }
  });
  console.log(
    "------------BONUS: USING REDUCE TO MAKE HELLO AND GOODBYE SEPERATE-----------"
  );

  /*** BONUS: USE REDUCE TO CREATE HELLO and GOODBYE SEPERATELY *****/
  var initialValue = { hello: [], bye: [] };
  var ini = "";
  names.reduce(function (previousValue, currentValue, i) {
    var firstLetter = names[i].charAt(0).toLocaleLowerCase();
    if (firstLetter === "j") {
      initialValue.bye.push(names[i]);
    } else {
      initialValue.hello.push(names[i]);
    }
  }, ini);
  initialValue.hello.map((e) => console.log(helloSpeaker.speakSimple(e)));
  initialValue.bye.map((e) => console.log(byeSpeaker.speakSimple(e)));
})();
