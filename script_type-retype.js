
jQuery(function($) {


var top_100_english_words = ["Liquid for Water", "Liquid for fluidity", "Liquid for liquidation", "Liquid for living organisms", 
  "Liquid for the dead", "Liquid for circulation", "Liquid for every timeline in history", "Liquid for all living matters", "Liquid for all the dead things in the cosmos", "Liquid for all things not solid" ,
  "Liquid for body", "Liquid for region", "Crystal for rocks", "Crystal for quartz", "Crystal for lithium", "Crystal for gems" ,
  "Crystal for diamonds", "Crystal for ice", "Crystal for very hard things", "Crystal for refelctions", "Crystal for refelctive materials",
  "Crystal for the precious", "Crystal for metal", "Crystal for capitalism", "Crystal for neo-liberalist solutions", "Crystal for quantitative easing",
  "Crystal for hidden structures", "Display for liquids","Display for solids", "Display for semi-conductors", "Display for amorphous behaviors" ,
  "Display for visco elastic states", "Display for cyborgs", "Display for trans-human strategies", "Display for remembering", "Display for history",
  "Display for co-extinction", "Display for co-existence", "Display for co-evolution"




];



 function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

  // setInterval(function() {
  //   $("#left").text(top_100_english_words[Math.floor(Math.random() * top_100_english_words.length)]);
  // }, 3000);
  var words = shuffle(top_100_english_words);
  words.unshift("website coming soon");

  var text = document.querySelector("#left");
  var colors = ["blue", "green", "yellow", "red"];

  // Generator (iterate from 0-3)
  function* generator() {
    var index = 0;
    while (true) {
      yield index++;

      if (index > top_100_english_words.length) {
        index = 0;
      }
    }
  }

  // Printing effect
  function printChar(word) {
    let i = 0;
    text.innerHTML = "";
    
    let id = setInterval(() => {
      if (i >= word.length) {
                
        clearInterval(id);
        
        setTimeout(() => {
          
          // $("<span class='fixed'>"+ $("#left").text() + " Capitalism</span>").css({
          //   top: Math.floor(Math.random() * $(window).height()),
          //   left: Math.floor(Math.random() * $(window).width())
          // }).appendTo($("body"));
          deleteChar();

          if($("body").hasClass("bw")) {
            $("body").removeClass("bw");
          } else {
            $("body").addClass("bw");
          }
        }, 2500);

      } else {
        text.innerHTML += word[i];
        i++;
      }
    }, Math.floor(Math.random() * 200)+100);
  }

  // Deleting effect
  function deleteChar() {
    let word = text.innerHTML;
    let i = word.length - 1;
    let id = setInterval(() => {
      if (i >= 0) {
        text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
        i--;
      } else {
        printChar(words[gen.next().value]);
        clearInterval(id);
      }
    }, Math.floor(Math.random() * 100)+100);
  }

  // Initializing generator
  let gen = generator();

  printChar(words[gen.next().value]);

});