let personName = " ";
let toDoList = [];

function getReply(command) {
  if (command.startsWith("Hello my name is")) {
    const name = command.split("Hello my name is ")[1].trim();
    if (personName === name) {
      return `We have met before, ${name}`;
    } else {
      personName = name;
      return `Nice to meet you ${name}`;
    }
  } else if (command === "What is my name?") {
    if (personName) {
      return `Your name is ${personName}`;
    } else {
      return "I don't know your name yet";
    }
  }
  // Add a todo to your todo list
  if (command.startsWith("Add ")) {
    const todo = command.split("Add ")[1].split(" to my todo")[0].trim();
    toDoList.push(todo);
    return `${todo} added to your todo`;
  } else if (command.startsWith("Remove ")) {
    const todo = command.split("Remove ")[1].split(" from my todo")[0].trim();
    const index = toDoList.indexOf(todo);
    if (index > -1) {
      toDoList.splice(index, 1);
      return `Removed ${todo} from your todo`;
    } else {
      return `${todo} is not in your todo`;
    }
  } else if (command === "What is my todo?") {
    if (toDoList.length === 0) {
      return "You have no todo";
    } else {
      return `You have ${toDoList.length} todos - ${toDoList.join(" and ")}`;
    }
  }

  //command to tell todays date
  if (command === "What date is it today?") {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();
    return `${day}. of ${month} ${year}`;
  }

  //command to perform simple maths
  if (command.startsWith("What is ")) {
    const mathExpression = command.split("What is ")[1].replace("?", "").trim();
    try {
      const result = eval(mathExpression);
      return `${result}`;
    } catch (error) {
      return "I cannot compute that";
    }

    //command to set timer
  } else if (command.startsWith("Set a timer for ")) {
    const minutes = parseInt(
      command.split("Set a timer for ")[1].split(" minutes")[0].trim(),
      10
    );
    if (!isNaN(minutes)) {
      setTimeout(() => {
        console.log("Timer done");
      }, minutes * 60000);
      return `Timer set for ${minutes} minutes`;
    } else {
      return "Invalid time format";
    }
  } else {
    return "I don't understand that command";
  }
  //additional command
  if (command === "How can I make Jollof rice?") {
    return `To make Jollof rice, you will need the following ingredients:
        - 2 cups of rice
        - 1/4 cup of vegetable oil
        - 1 onion, chopped
        - 2 cloves of garlic, minced
        - 1 teaspoon of ginger, minced
        - 2 bell peppers, chopped
        - 2 tomatoes, chopped
        - 2 tablespoons of tomato paste
        - 2 cups of chicken or vegetable broth
        - 1 teaspoon of curry powder
        - 1 teaspoon of thyme
        - Salt and pepper to taste`;
  } else {
    return "I don't understand that command";
  }
}

console.log(getReply("Hello my name is Hussein"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What date is it today?"));
console.log(getReply("Set a timer for 1 minutes"));
console.log(getReply("What is 5 / 3?"));
console.log(getReply("How can I make Jollof rice?"));
