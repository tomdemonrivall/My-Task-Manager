const time = () => {
  let today = new Date();
  let date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log("We are the " + date + " and it's " + time);
};
time();

// [x] 0. take input
// [x] 0.1 5 different if +1 else
// [x] 0.2 create array of different task
// [x] 1.1 print array as vertical list
// [x] 2.0 create a var new task
// [x] 2.1 ask for input for new task
// [x] 2.2 add the new var to task array + empty  "[]" in front
// [x] 3.0 print existing task
// [x] 3.1 ask for input for desired deletion
// [x] 3.2 delete the task if the number match an index
// [x] 4.0 print existing array
// [x] 4.1 ask for input
// [x] 4.2 replace [ ] by [x]
// [x] 5.0 end the function
// [x] 6.0 print "command not found" an rerun

let taskarr = [];
const taskman = () => {
  console.log(`

    "Welcome to your task manager, Press:

    1. to see all your tasks
    2. to add a task
    3. to delete a task
    4. to mark a task as done
    5. to Exit the task manager"

  `);

  let integers = require(`prompt-sync`)();
  let choice = integers(`Enter your action's number: `);

  if (choice == 1) {
    if (taskarr.length > 0) {
      for (i = 0; i < taskarr.length; i++) {
        console.log(`(${i + 1}) -  ${taskarr[i]}`);
      }
    } else {
      console.log(`
    There is currently no task on the list`);
    }
    taskman();
  } else if (choice == 2) {
    taskarr.length = taskarr.length;
    let newtask = integers(`What is the new task: `);
    taskarr.push(`"[] ${newtask}"`);
    for (i = 0; i < taskarr.length; i++) {
      console.log(`(${i + 1}) -  ${taskarr[i]}`);
    }
    taskman();
  } else if (choice == 3) {
    for (i = 0; i < taskarr.length; i++) {
      console.log(`(${i + 1}) -  ${taskarr[i]}`);
    }
    let deltask = integers(`
    What task do you want to delete: `);
    if (deltask > 0 && deltask <= taskarr.length) {
      taskarr.splice(`${deltask - 1}`, 1);
    } else {
      console.log(`
      Command remove task not found`);
    }
    taskman();
  } else if (choice == 4) {
    for (i = 0; i < taskarr.length; i++) {
      console.log(`(${i + 1}) -  ${taskarr[i]}`);
    }
    let oktask = integers(`enter the number of the task you finished: `);
    if (oktask > 0 && oktask <= taskarr.length) {
      let finishtask = `"${taskarr[oktask - 1]}"`;
      taskarr[oktask - 1] = taskarr[oktask - 1].replace("[]", "[x]");
      console.log(`check selected finished task${taskarr[oktask - 1]}`);
    } else {
      console.log(`
        Command remove task not found`);
    }
    taskman();
  } else if (choice == 5) {
    console.log("Thank you for using the task manager, bye bye.");
  } else {
    console.log(`
      Error command not found, exiting program, auto destructin initialized`);
    // taskman()
  }
};

taskman();
