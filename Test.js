// Input lists
const list1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
const list2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

// Function to get elements from List1 that are not in List2
const finalList1NotInList2 = list1.filter((user) => !list2.includes(user));

// Function to get elements from List2 that are not in List1
const finalList2NotInList1 = list2.filter((user) => !list1.includes(user));

// Function to get elements from List2 that are also present in List1
const finalList2IntersectionList1 = list2.filter((user) =>
  list1.includes(user)
);

// Output
console.log("Final List1 elements not in List2:", finalList1NotInList2);
console.log("Final List2 elements not in List1:", finalList2NotInList1);
console.log(
  "Final List2 intersection with List1:",
  finalList2IntersectionList1
);
