window.onload = function() {
    let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
    let action = ['ate ', 'peed ', 'crushed ', 'broke '];
    let what = ['my homework ', 'my phone ', 'the car '];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
    let part1 = Math.floor(Math.random() * who.length);
    let part2 = Math.floor(Math.random() * action.length);
    let part3 = Math.floor(Math.random() * what.length);
    let part4 = Math.floor(Math.random() * when.length);

    document.querySelector("#excuse").innerHTML = who[part1] + action[part2] + what[part3] + when[part4];
    
  }
