// const data = [
//   {
//     id: 7,
//     email: "michael.lawson@reqres.in",
//     first_name: "Michael",
//     last_name: "Lawson",
//     avatar: "https://reqres.in/img/faces/7-image.jpg",
//   },
//   {
//     id: 8,
//     email: "lindsay.ferguson@reqres.in",
//     first_name: "Lindsay",
//     last_name: "Ferguson",
//     avatar: "https://reqres.in/img/faces/8-image.jpg",
//   },
//   {
//     id: 9,
//     email: "tobias.funke@reqres.in",
//     first_name: "Tobias",
//     last_name: "Funke",
//     avatar: "https://reqres.in/img/faces/9-image.jpg",
//   },
//   {
//     id: 10,
//     email: "byron.fields@reqres.in",
//     first_name: "Byron",
//     last_name: "Fields",
//     avatar: "https://reqres.in/img/faces/10-image.jpg",
//   },
//   {
//     id: 11,
//     email: "george.edwards@reqres.in",
//     first_name: "George",
//     last_name: "Edwards",
//     avatar: "https://reqres.in/img/faces/11-image.jpg",
//   },
//   {
//     id: 12,
//     email: "rachel.howell@reqres.in",
//     first_name: "Rachel",
//     last_name: "Howell",
//     avatar: "https://reqres.in/img/faces/12-image.jpg",
//   },
// ];

// var container = document.getElementById("di-user");
// for (user of data) {
//   for (var prop in user) {
//     if (Object.prototype.hasOwnProperty.call(user, prop)) {
//       var item = document.createElement("div");
//       item.classList.add(user[prop]);
//       item.innerHTML = user[prop];
//       container.appendChild(item);
//     }
//   }
// }

// // Make a request for a user with a given ID
// axios
//   .get("https://reqres.in/api/users?page=2")
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// function user(name, age) {
//   console.log("nama:", name, "dan usia:", age);
// }

// user("abdel", 28);
// user("dwi", 37);

// const user2 = function (name, age) {
//   const result = `nama: ${name} dan usia: ${age}`;
//   return result;
// };

// const dwi = user2("dwi", 37);
// console.log(dwi);

// const user3 = (nama, usia) => {
//   const result = `nama: ${nama} dan usia: ${usia}`;
//   return result;
// };

// console.log(user3("dwi", 37));
// console.log(user3("agus", 38));
// console.log(user3("joni", 30));

// const elements = document.querySelectorAll(".special option");
// for (const i = 0; i < elements.length; i++) {
//   elements[i].selected = false;
// }

const score = 70;
if (score > 50) {
  console.log("lulus");
} else {
  console.log("tidak lulus");
}

const scoremtk = 40;
if (scoremtk > 80 && scoremtk < 100) {
  console.log("sangat memuaskan");
} else if (scoremtk > 50) {
  console.log("lulus memuaskan");
} else if (scoremtk < 50) {
  console.log("tidak lulus");
}
