/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee.name);
    }
  });
  // ✔️ Using map and filtering developer
}

function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee.name);
    }
  });
  // ✔️ Using forEach and filtering developer
}

function addData() {
  const newEmployee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  };

  arr.push(newEmployee);
  console.log(arr);
  // ✔️ Added new object using push
}

function removeAdmin() {
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
  // ✔️ Filtered out admins
}

function concatenateArray() {
  let arr1 = [
    { id: 4, name: "Aditya", age: "18", profession: "developer" },
    { id: 5, name: "Uday", age: "20", profession: "developer" },
    { id: 6, name: "Myself", age: "19", profession: "admin" },
  ];

  let combinedArray = arr.concat(arr1);
  console.log(combinedArray);
  // ✔️ Concatenated and logged
}
