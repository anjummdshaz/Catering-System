// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// import { getFirestore, setDoc, doc, collection, addDoc, query, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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

//   if (window.location.href.includes('index3.html')) {
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
//             userid: "user" + Math.floor(Math.random() * 1000000)
//           };
//           const docRef = doc(db, "users", user.uid);
//           setDoc(docRef, userData)
//             .then(() => {
//               window.location.href = 'index5.html';
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
//     window.location.href = "index5.html"
//   }

// //   if (window.location.href.includes('index5.html')) {
// //     const signIn = document.getElementById('submitSignIn');

// //     signIn.addEventListener('click', (event) => {
// //       event.preventDefault();
// //       const email = document.getElementById('eemail').value;
// //       const password = document.getElementById('ppassword').value;

// //       signInWithEmailAndPassword(auth, email, password)
// //         .then((userCredential) => {
// //           const user = userCredential.user;
// //           localStorage.setItem('loggedInUserId', user.uid);
// //           localStorage.setItem("username", nameval)
// //           localStorage.setItem("userEmail", emailval)
// //           window.location.href = 'index.html';
// //         })
// //         .catch((error) => {
// //           const errorCode = error.code;
// //           if (errorCode === 'auth/invalid-credential') {
// //             console.log("Incorrect Email or Password");
// //           } else {
// //             console.log("Account does not Exist");
// //           }
// //         });
// //     });
// //   }
// // });

// if (window.location.href.includes('index5.html')) {
//   const signuplink = document.querySelector(".signup-link")
//   signuplink.addEventListener('click',()=>{
//     window.location.href="index3.html"
//   })
//   const signIn = document.getElementById('submitSignIn');

//   signIn.addEventListener('click', (event) => {
//     event.preventDefault();
//     const email = document.getElementById('eemail').value;
//     const password = document.getElementById('ppassword').value;

//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         localStorage.setItem('loggedInUserId', user.uid);
//         localStorage.setItem("userEmail", email);  // Correctly store the email
//         localStorage.setItem("username", user.displayName || '');  // If using Firebase display name, store it, otherwise leave empty
//         window.location.href = 'index.html';
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         if (errorCode === 'auth/wrong-password') {
//           console.log("Incorrect Email or Password");
//         } else if (errorCode === 'auth/user-not-found') {
//           console.log("Account does not Exist");
//         } else {
//           console.log("Login Failed: ", error.message);
//         }
//       });
//   });
// }
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

// if (window.location.href.includes("index1.html")) {
//   const placeorder = document.querySelector(".placeorder");

//   placeorder.addEventListener('click', async () => {
//     const userId = localStorage.getItem('loggedInUserId'); // Get logged in user ID
//     if (!userId) {
//       alert("User is not logged in");
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
//     alert("Order placed successfully");
//     // window.location.href = "index2.html";
//   });
// }

// if (window.location.href.includes("index2.html")) {


//   async function fetchOrders(userId) {
//     try {
//       // Reference to the user's orders sub-collection
//       const ordersRef = collection(doc(db, "users", userId), "orders");

//       // Create a query for all orders
//       const ordersQuery = query(ordersRef);

//       // Get the orders documents
//       const querySnapshot = await getDocs(ordersQuery);

//       // Reference to the container where orders will be displayed
//       const ordersContainer = document.querySelector('.totalorder');

//       // Clear previous orders
//       ordersContainer.innerHTML = '';

//       // Process the results
//       querySnapshot.forEach((doc) => {
//         const orderData = doc.data();
//         const deliverySteps = [
//           "Order Placement",
//           "Order Processing",
//           "Shipping and Delivery",
//           "Order Completion"
//         ];

//         function getRandomStep() {
//           const randomIndex = Math.floor(Math.random() * deliverySteps.length);
//           return deliverySteps[randomIndex];
//         }

//         const randomStep = getRandomStep();
//         // console.log(randomStep); // This will print a random step from the array


//         // Create HTML for each order
//         const orderHTML = `
//           <div class="order-card">
//             <div class="order-header">
//               <h5>Order Number: ${orderData.orderNumber}</h5>
//               <span class="order-status">Status: ${randomStep}</span>
//             </div>
//             <div class="order-details">
//               <div>Date: ${orderData.date}</div>
//               <div>Total Items: ${orderData.totalItems}</div>
//             </div>
//             <div class="order-details">
//               <div class="order-total">Total Price: Rs ${orderData.totalPrice.toFixed(2)}</div>
//             </div>
//             <div class="order-details">
//               <div>Items: ${orderData.items.join(', ')}</div>
//             </div>

//           </div>
//         `;

//         // Append order HTML to the container
//         ordersContainer.insertAdjacentHTML('beforeend', orderHTML);
//       });

//     } catch (error) {
//       console.error("Error fetching orders: ", error);
//     }
//   }


//   document.addEventListener('DOMContentLoaded', () => {
//     const userId = localStorage.getItem('loggedInUserId'); // Replace with actual user ID if needed
//     if (userId) {
//       fetchOrders(userId);
//       // localStorage.removeItem("orderDate");
//       // localStorage.removeItem("totalItems");
//       // localStorage.removeItem("totalPrice");
//       // localStorage.removeItem("orderid");
//       // localStorage.removeItem("dishnames");
//     }
//   });
// }

// if (window.location.href.includes("index1.html" || "index2.html")) {

//   document.getElementById('Logout').addEventListener('click', (event) => {
//     event.preventDefault();
//     signOut(auth).then(() => {
//       console.log('User signed out successfully.');
//       localStorage.removeItem('loggedInUserId');
//       localStorage.removeItem("username");
//       localStorage.removeItem("userEmail");
//       alert("logging out")
//       window.location.href = '/user/index1.html';
//     }).catch((error) => {
//       console.error('Error signing out:', error);
//     });
//   });
// }
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
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

  if (window.location.href.includes('index3.html')) {
    submitbut.addEventListener('click', (event) => {
      event.preventDefault();

      const nameval = name.value;
      const emailval = email.value;
      const numval = phone.value;
      const pass = password.value;
      const confpass = confirmpassword.value;

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
              window.location.href = 'index5.html';
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

  if (window.location.href.includes('index5.html')) {
    const signuplink = document.querySelector(".signup-link a");
    signuplink.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent form submission
      window.location.href = "index3.html"; // Navigate to the sign-up page
    });

    const signIn = document.getElementById('submitSignIn');
    signIn.addEventListener('click', (event) => {
      event.preventDefault();
      const email = document.getElementById('eemail').value;
      const password = document.getElementById('ppassword').value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem('loggedInUserId', user.uid);
          localStorage.setItem("userEmail", email);
          localStorage.setItem("username", user.displayName || '');
          window.location.href = 'index.html';
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/wrong-password') {
            console.log("Incorrect Email or Password");
          } else if (errorCode === 'auth/user-not-found') {
            console.log("Account does not Exist");
          } else {
            console.log("Login Failed: ", error.message);
          }
        });
    });
  }
});

async function placeOrder(userId, orderData) {
  try {
    const ordersRef = collection(doc(db, "users", userId), "orders");
    await addDoc(ordersRef, orderData);
    console.log("Order placed successfully");
  } catch (error) {
    console.error("Error placing order: ", error);
  }
}

if (window.location.href.includes("index1.html")) {
  const placeorder = document.querySelector(".placeorder");

  placeorder.addEventListener('click', async () => {
    const userId = localStorage.getItem('loggedInUserId');
    if (!userId) {
      alert("User is not logged in");
      return;
    }

    const currentDate = localStorage.getItem('orderDate');
    const totalItems = localStorage.getItem('totalItems');
    const totalPrice = localStorage.getItem('totalPrice');
    const orderid = localStorage.getItem('orderid');
    const dishnames = JSON.parse(localStorage.getItem('dishnames'));

    const orderData = {
      orderNumber: orderid,
      date: currentDate,
      totalItems: parseInt(totalItems, 10),
      totalPrice: parseFloat(totalPrice),
      items: dishnames
    };

    console.log("Placing order with data:", orderData);

    await placeOrder(userId, orderData);
    alert("Order placed successfully");
    window.location.href = "index2.html";
  });
}

if (window.location.href.includes("index2.html")) {
  async function fetchOrders(userId) {
    try {
      const ordersRef = collection(doc(db, "users", userId), "orders");
      const ordersQuery = query(ordersRef);
      const querySnapshot = await getDocs(ordersQuery);
      const ordersContainer = document.querySelector('.totalorder');
      ordersContainer.innerHTML = '';

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

        ordersContainer.insertAdjacentHTML('beforeend', orderHTML);
      });

    } catch (error) {
      console.error("Error fetching orders: ", error);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('loggedInUserId');
    if (userId) {
      fetchOrders(userId);
    }
  });
}

if (window.location.href.includes("index1.html") || window.location.href.includes("index2.html")) {
  document.getElementById('Logout').addEventListener('click', (event) => {
    event.preventDefault();
    signOut(auth).then(() => {
      console.log('User signed out successfully.');
      localStorage.removeItem('loggedInUserId');
      localStorage.removeItem("username");
      localStorage.removeItem("userEmail");
      alert("Logging out");
      window.location.href = '/user/index1.html';
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  });
}
