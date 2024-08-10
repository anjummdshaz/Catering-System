


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
// import { getDatabase, set, ref, get } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";


// // // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBARyANHxX8ni4HhH1jzSJzA_V0DcCdIEw",
//   authDomain: "userlogin-a8724.firebaseapp.com",
//   projectId: "userlogin-a8724",
//   storageBucket: "userlogin-a8724.appspot.com",
//   messagingSenderId: "126500445850",
//   appId: "1:126500445850:web:791b350279c4f6c3d38923"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const db = getDatabase(app)
// const auth = getAuth();
// const db = getFirestore();

// document.addEventListener("DOMContentLoaded", () => {
//   const name = document.getElementById("name");
//   const email = document.getElementById("email");
//   const phone = document.getElementById("phone");
//   const password = document.getElementById("password");
//   const confirmpassword = document.getElementById("confirm-password");
//   const submitbut = document.getElementById("submitbut");

//   if (window.location.href.includes('register.html')) {
//     submitbut.addEventListener('click', (event) => {
//       event.preventDefault();

//       const nameval = name.value;
//       const emailval = email.value;
//       const numval = phone.value;
//       const pass = password.value;
//       const confpass = confirmpassword.value;
//       console.log(nameval, emailval, numval, pass);



//       createUserWithEmailAndPassword(auth, emailval, pass)
//         .then((userCredential) => {
//           const user = userCredential.user;
//           const userData = {
//             name: nameval,
//             email: emailval,
//             number: numval,
//             password: pass,
//             consumerId :"user"+ Math.floor(Math.random()*100000)
//           };
//           const docRef = doc(db, "users", user.uid);
//           setDoc(docRef, userData)
//             .then(() => {
//               window.location.href = 'userlogin.html';
//             })
//             .catch((error) => {
//               console.error("Error writing document: ", error);
//             });
//         })
//         .catch((error) => {
//           console.error("Error creating user: ", error);
//           console.log("Error code: ", error.code);
//           console.log("Error message: ", error.message);
//           if (error.code === 'auth/email-already-in-use') {
//             console.log("Email Address Already Exists !!!");
//           } else {
//             console.log("Unable to create User");
//           }
//         });
//     });
//   }

//   if (window.location.href.includes('userlogin.html')) {
//     const signIn = document.getElementById('submitSignIn');

//     signIn.addEventListener('click', (event) => {
//       event.preventDefault();
//       const email = document.getElementById('eemail').value;
//       const password = document.getElementById('ppassword').value;
//       const auth = getAuth();

//       signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           const user = userCredential.user;
//           localStorage.setItem('loggedInUserId', user.uid);
//           window.location.href = 'home.html';
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           if (errorCode === 'auth/invalid-credential') {
//             console.log("Incorrect Email or Password");
//           } else {
//             console.log("Account does not Exist");
//           }
//         });
//     });
//   }
// });

// function getuserdata() {
//   const container = document.querySelector(".container")
//   console.log("hshahsh")
//   let contentHTML = '';
//   const user_ref = ref(db, 'users')
//   get(user_ref).then((snapshot) => {
//     const userdata = snapshot.val()
//     for (const key in userdata) {
//       const { consumerId } = userdata[key]
//       console.log(consumerId)
//       // contentHTML += `<div class="contents"><h1>servings : ${servings}</h1><p>nameo of dish : ${name}</p><p>description : ${description}</p><p>price of dish ${price}</p><img class="adminimageprev" src="${imageURL}" alt=""><div class="herobuttondiv"><button class="butthe herodelete">delete</button><button class = "butthe heroupdate">Update</button></div>
//       // </div>`;
//       // container.innerHTML = contentHTML
//     }
//   })
// }
// getuserdata()

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// import { getFirestore, setDoc, doc, getDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBARyANHxX8ni4HhH1jzSJzA_V0DcCdIEw",
//   authDomain: "userlogin-a8724.firebaseapp.com",
//   projectId: "userlogin-a8724",
//   storageBucket: "userlogin-a8724.appspot.com",
//   messagingSenderId: "126500445850",
//   appId: "1:126500445850:web:791b350279c4f6c3d38923"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore();

// document.addEventListener("DOMContentLoaded", () => {
//   const name = document.getElementById("name");
//   const email = document.getElementById("email");
//   const phone = document.getElementById("phone");
//   const password = document.getElementById("password");
//   const confirmpassword = document.getElementById("confirm-password");
//   const submitbut = document.getElementById("submitbut");

//   if (window.location.href.includes('register.html')) {
//     submitbut.addEventListener('click', (event) => {
//       event.preventDefault();

//       const nameval = name.value;
//       const emailval = email.value;
//       const numval = phone.value;
//       const pass = password.value;
//       const confpass = confirmpassword.value;
//       console.log(nameval, emailval, numval, pass);

//       createUserWithEmailAndPassword(auth, emailval, pass)
//         .then((userCredential) => {
//           const user = userCredential.user;
//           const userData = {
//             name: nameval,
//             email: emailval,
//             number: numval,
//             password: pass

//           };
//           const docRef = doc(db, "users", user.uid);
//           setDoc(docRef, userData)
//             .then(() => {
//               window.location.href = 'userlogin.html';
//             })
//             .catch((error) => {
//               console.error("Error writing document: ", error);
//             });
//         })
//         .catch((error) => {
//           console.error("Error creating user: ", error);
//           if (error.code === 'auth/email-already-in-use') {
//             console.log("Email Address Already Exists !!!");
//           } else {
//             console.log("Unable to create User");
//           }
//         });
//     });
//   }

//   if (window.location.href.includes('userlogin.html')) {
//     const signIn = document.getElementById('submitSignIn');

//     signIn.addEventListener('click', (event) => {
//       event.preventDefault();
//       const email = document.getElementById('eemail').value;
//       const password = document.getElementById('ppassword').value;

//       signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           const user = userCredential.user;
//           localStorage.setItem('loggedInUserId', user.uid);
//           window.location.href = 'home.html';
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           if (errorCode === 'auth/invalid-credential') {
//             console.log("Incorrect Email or Password");
//           } else {
//             console.log("Account does not Exist");
//           }
//         });
//     });
//   }
// });


// async function placeOrder(userId, orderData) {
//   try {
//     // Reference to the orders sub-collection under the user document
//     const ordersRef = collection(doc(db, "users", userId), "orders");

//     // Add the order to the orders sub-collection
//     await addDoc(ordersRef, orderData);

//     console.log("Order placed successfully");
//   } catch (error) {
//     console.error("Error placing order: ", error);
//   }
// }
// if (window.location.href.includes("products.html")){
//   const placeorder = document.querySelector(".placeorder")
//   placeorder.addEventListener('click',()=>{
//     async function placeOrder(userId, orderData) {
//       try {
//         // Reference to the user document
//         const userDocRef = doc(db, "users", userId);

//         // Reference to the orders sub-collection under the user document
//         const ordersRef = collection(userDocRef, "orders");

//         // Add the order to the orders sub-collection
//         await addDoc(ordersRef, orderData);

//         console.log("Order placed successfully");
//       } catch (error) {
//         console.error("Error placing order: ", error);
//       }
//     }

//     // Example usage
//     const userId = "user123"; // This should be the actual user ID from your authentication
//     const orderData = {
//       orderNumber: Date.now(),
//       date: new Date().toISOString(),
//       totalItems: 3,
//       totalPrice: 59.99,
//       items: [
//         { name: "Dish 1", price: "19.99" },
//         { name: "Dish 2", price: "19.99" },
//         { name: "Dish 3", price: "19.99" }
//       ]
//     };
//   })
// }



// placeOrder(userId, orderData);

// // document.addEventListener("DOMContentLoaded", () => {
// //   if (window.location.href.includes("orderplaced.html")) {
// //     updateOrderDetails();
// //   }
// // });


// function updateOrderDetails(){
//   const currentDate = localStorage.getItem('orderDate');
//   const totalItems = localStorage.getItem('totalItems');
//   const totalPrice = localStorage.getItem('totalPrice');
//   const dishnames = localStorage.getItem('dishnames');

//   console.log(currentDate)
//   console.log(totalItems)
//   console.log(totalPrice)
// }


// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// import { getFirestore, setDoc, doc, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBARyANHxX8ni4HhH1jzSJzA_V0DcCdIEw",
//   authDomain: "userlogin-a8724.firebaseapp.com",
//   projectId: "userlogin-a8724",
//   storageBucket: "userlogin-a8724.appspot.com",
//   messagingSenderId: "126500445850",
//   appId: "1:126500445850:web:791b350279c4f6c3d38923"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore();

// document.addEventListener("DOMContentLoaded", () => {
//   const name = document.getElementById("name");
//   const email = document.getElementById("email");
//   const phone = document.getElementById("phone");
//   const password = document.getElementById("password");
//   const confirmpassword = document.getElementById("confirm-password");
//   const submitbut = document.getElementById("submitbut");

//   if (window.location.href.includes('register.html')) {
//     submitbut.addEventListener('click', (event) => {
//       event.preventDefault();

//       const nameval = name.value;
//       const emailval = email.value;
//       const numval = phone.value;
//       const pass = password.value;
//       const confpass = confirmpassword.value;
//       console.log(nameval, emailval, numval, pass);

//       createUserWithEmailAndPassword(auth, emailval, pass)
//         .then((userCredential) => {
//           const user = userCredential.user;
//           const userData = {
//             name: nameval,
//             email: emailval,
//             number: numval,
//             password: pass
//           };
//           const docRef = doc(db, "users", user.uid);
//           setDoc(docRef, userData)
//             .then(() => {
//               window.location.href = 'userlogin.html';
//             })
//             .catch((error) => {
//               console.error("Error writing document: ", error);
//             });
//         })
//         .catch((error) => {
//           console.error("Error creating user: ", error);
//           if (error.code === 'auth/email-already-in-use') {
//             console.log("Email Address Already Exists !!!");
//           } else {
//             console.log("Unable to create User");
//           }
//         });
//     });
//   }

//   if (window.location.href.includes('userlogin.html')) {
//     const signIn = document.getElementById('submitSignIn');

//     signIn.addEventListener('click', (event) => {
//       event.preventDefault();
//       const email = document.getElementById('eemail').value;
//       const password = document.getElementById('ppassword').value;

//       signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           const user = userCredential.user;
//           localStorage.setItem('loggedInUserId', user.uid);
//           window.location.href = 'home.html';
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           if (errorCode === 'auth/invalid-credential') {
//             console.log("Incorrect Email or Password");
//           } else {
//             console.log("Account does not Exist");
//           }
//         });
//     });
//   }
// });

// async function placeOrder(userId, orderData) {
//   try {
//     // Reference to the orders sub-collection under the user document
//     const ordersRef = collection(doc(db, "users", userId), "orders");

//     // Add the order to the orders sub-collection
//     await addDoc(ordersRef, orderData);

//     console.log("Order placed successfully");
//   } catch (error) {
//     console.error("Error placing order: ", error);
//   }
// }

// if (window.location.href.includes("products.html")) {
//   const placeorder = document.querySelector(".placeorder");

//   placeorder.addEventListener('click', async () => {
//     const userId = localStorage.getItem('loggedInUserId'); // Get logged in user ID
//     if (!userId) {
//       console.error("User is not logged in");
//       return;
//     }

//     const currentDate = localStorage.getItem('orderDate');
//     const totalItems = localStorage.getItem('totalItems');
//     const totalPrice = localStorage.getItem('totalPrice');
//     const orderid = localStorage.getItem('orderid');
//     const dishnames = JSON.parse(localStorage.getItem('dishnames')); // Ensure it's parsed as an array

//     const orderData = {
//       orderNumber: orderid,
//       date: currentDate,
//       totalItems: parseInt(totalItems, 10),
//       totalPrice: parseFloat(totalPrice),
//       items: dishnames
//     };

//     console.log("Placing order with data:", orderData); // Debug log

//     await placeOrder(userId, orderData);
//     alert("order placed succesfully")
//     window.location.href = "orderplaced.html";

//   });
// }

// if(window.location.href.includes("orderplaced.html"))
// async function fetchOrders(userId) {
//   try {
//     // Reference to the user's orders sub-collection
//     const ordersRef = collection(doc(db, "users", userId), "orders");

//     // Create a query for all orders
//     const ordersQuery = query(ordersRef);

//     // Get the orders documents
//     const querySnapshot = await getDocs(ordersQuery);

//     // Process the results
//     querySnapshot.forEach((doc) => {
//       console.log("Order ID:", doc.orderNumber);
//       // console.log("Order Data:", doc.data());
//       // You can access fields like doc.data().orderNumber, doc.data().date, etc.
//     });

//   } catch (error) {
//     console.error("Error fetching orders: ", error);
//   }

// const userId = localStorage.getItem('loggedInUserId'); // Replace with actual user ID if needed
// if (userId) {
//   fetchOrders(userId);
// }
// }

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, setDoc, doc, collection, addDoc, query, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBARyANHxX8ni4HhH1jzSJzA_V0DcCdIEw",
  authDomain: "userlogin-a8724.firebaseapp.com",
  projectId: "userlogin-a8724",
  storageBucket: "userlogin-a8724.appspot.com",
  messagingSenderId: "126500445850",
  appId: "1:126500445850:web:791b350279c4f6c3d38923"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

document.addEventListener("DOMContentLoaded", () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const confirmpassword = document.getElementById("confirm-password");
  const submitbut = document.getElementById("submitbut");

  if (window.location.href.includes('register.html')) {
    submitbut.addEventListener('click', (event) => {
      event.preventDefault();

      const nameval = name.value;
      const emailval = email.value;
      const numval = phone.value;
      const pass = password.value;
      const confpass = confirmpassword.value;
      console.log(nameval, emailval, numval, pass);


      createUserWithEmailAndPassword(auth, emailval, pass)
        .then((userCredential) => {
          const user = userCredential.user;
          const userData = {
            name: nameval,
            email: emailval,
            number: numval,
            password: pass,
            userid: "user" + Math.floor(Math.random() * 1000000)
          };
          const docRef = doc(db, "users", user.uid);
          setDoc(docRef, userData)
            .then(() => {
              window.location.href = 'userlogin.html';
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        })
        .catch((error) => {
          console.error("Error creating user: ", error);
          if (error.code === 'auth/email-already-in-use') {
            console.log("Email Address Already Exists !!!");
          } else {
            console.log("Unable to create User");
          }
        });
    });
  }

  if (window.location.href.includes('userlogin.html')) {
    const signIn = document.getElementById('submitSignIn');

    signIn.addEventListener('click', (event) => {
      event.preventDefault();
      const email = document.getElementById('eemail').value;
      const password = document.getElementById('ppassword').value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem('loggedInUserId', user.uid);
          localStorage.setItem("username", nameval)
          localStorage.setItem("userEmail", emailval)
          window.location.href = 'home.html';
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/invalid-credential') {
            console.log("Incorrect Email or Password");
          } else {
            console.log("Account does not Exist");
          }
        });
    });
  }
});

async function placeOrder(userId, orderData) {
  try {
    // Reference to the orders sub-collection under the user document
    const ordersRef = collection(doc(db, "users", userId), "orders");

    // Add the order to the orders sub-collection
    await addDoc(ordersRef, orderData);

    console.log("Order placed successfully");
  } catch (error) {
    console.error("Error placing order: ", error);
  }
}

if (window.location.href.includes("products.html")) {
  const placeorder = document.querySelector(".placeorder");

  placeorder.addEventListener('click', async () => {
    const userId = localStorage.getItem('loggedInUserId'); // Get logged in user ID
    if (!userId) {
      alert("User is not logged in");
      return;
    }

    const currentDate = localStorage.getItem('orderDate');
    const totalItems = localStorage.getItem('totalItems');
    const totalPrice = localStorage.getItem('totalPrice');
    const orderid = localStorage.getItem('orderid');
    const dishnames = JSON.parse(localStorage.getItem('dishnames')); // Ensure it's parsed as an array

    const orderData = {
      orderNumber: orderid,
      date: currentDate,
      totalItems: parseInt(totalItems, 10),
      totalPrice: parseFloat(totalPrice),
      items: dishnames
    };

    console.log("Placing order with data:", orderData); // Debug log

    await placeOrder(userId, orderData);
    alert("Order placed successfully");
    // window.location.href = "orderplaced.html";
  });
}

if (window.location.href.includes("orderplaced.html")) {


  async function fetchOrders(userId) {
    try {
      // Reference to the user's orders sub-collection
      const ordersRef = collection(doc(db, "users", userId), "orders");

      // Create a query for all orders
      const ordersQuery = query(ordersRef);

      // Get the orders documents
      const querySnapshot = await getDocs(ordersQuery);

      // Reference to the container where orders will be displayed
      const ordersContainer = document.querySelector('.totalorder');

      // Clear previous orders
      ordersContainer.innerHTML = '';

      // Process the results
      querySnapshot.forEach((doc) => {
        const orderData = doc.data();
        const deliverySteps = [
          "Order Placement",
          "Order Processing",
          "Shipping and Delivery",
          "Order Completion"
        ];

        function getRandomStep() {
          const randomIndex = Math.floor(Math.random() * deliverySteps.length);
          return deliverySteps[randomIndex];
        }

        const randomStep = getRandomStep();
        // console.log(randomStep); // This will print a random step from the array


        // Create HTML for each order
        const orderHTML = `
          <div class="order-card">
            <div class="order-header">
              <h5>Order Number: ${orderData.orderNumber}</h5>
              <span class="order-status">Status: ${randomStep}</span>
            </div>
            <div class="order-details">
              <div>Date: ${orderData.date}</div>
              <div>Total Items: ${orderData.totalItems}</div>
            </div>
            <div class="order-details">
              <div class="order-total">Total Price: Rs ${orderData.totalPrice.toFixed(2)}</div>
            </div>
            <div class="order-details">
              <div>Items: ${orderData.items.join(', ')}</div>
            </div>

          </div>
        `;

        // Append order HTML to the container
        ordersContainer.insertAdjacentHTML('beforeend', orderHTML);
      });

    } catch (error) {
      console.error("Error fetching orders: ", error);
    }
  }


  document.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('loggedInUserId'); // Replace with actual user ID if needed
    if (userId) {
      fetchOrders(userId);
      // localStorage.removeItem("orderDate");
      // localStorage.removeItem("totalItems");
      // localStorage.removeItem("totalPrice");
      // localStorage.removeItem("orderid");
      // localStorage.removeItem("dishnames");
    }
  });
}

if (window.location.href.includes("products.html" || "orderplaced.html")) {

  console.log("OOOOOOOORRRRRRRR")
  document.getElementById('Logout').addEventListener('click', (event) => {
    event.preventDefault();
    signOut(auth).then(() => {
      console.log('User signed out successfully.');
      localStorage.removeItem('loggedInUserId');
      localStorage.removeItem("username");
      localStorage.removeItem("userEmail");
      alert("logging out")
      window.location.href = '/user/products.html';
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  });
}