function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance<=400){
    return ("This one is on me!");
  }

  else if (distance>2000 && distance < 2500){
    return ("I will gladly take your thirty bucks.");
  }

  else if (distance>2500) {
    return ("No can do.");
  }
}

function ternaryCheckCity(n){
  // Write your code here!
  return n==="NYC"?"Ok, sounds good.":"No go.";
}

function switchOnCharmFromTip(a){
  // Write your code here!
  switch (a) {
    case "generous":
      return "Thank you so much."
      break;

    case "not as generous":
        return "Thank you."
      break;

    default:
      return "Bye."
  }
}