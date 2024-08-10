// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, set, ref, get , remove} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYCXLlOO4s8bfa_iuQ3_sUkkHLuz4PrvI",
  authDomain: "demoproject-2823a.firebaseapp.com",
  databaseURL: "https://demoproject-2823a-default-rtdb.firebaseio.com",
  projectId: "demoproject-2823a",
  storageBucket: "demoproject-2823a.appspot.com",
  messagingSenderId: "28641499751",
  appId: "1:28641499751:web:a0ce438643736af9ded2c2"
};




const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const db = getDatabase(app);

// Authentication state change
onAuthStateChanged(auth, (user) => {
  if (user) {
    if (window.location.href.includes("index.html")) {
      console.log("index.html");
    }
    if (window.location.href.includes("login.html")) {
      window.location.href = "index.html";
    }
  }
});

// Login functionality
if (window.location.href.includes("login.html")) {
  const loginPage = document.querySelector(".login");
  const loginButton = document.querySelector(".butt");

  loginButton.addEventListener("click", () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    signInWithEmailAndPassword(auth, email, password).then((userInfo) => {
      console.log(userInfo.user.uid);
    });
  });
}

// Post data functionality
if (window.location.href.includes("index.html")) {
  const postPage = document.querySelector("#postPage");
  const servingInput = document.querySelector(".serving");
  const nameInput = document.querySelector(".name");
  const descriptionInput = document.querySelector(".description");
  const priceInput = document.querySelector(".price");
  const postButton = document.querySelector(".button");
  const fileInput = document.querySelector(".image");
  const logoutButton = document.querySelector("#logout");
  const imagePreview = document.querySelector(".image-preview");
  const updateIdField = document.querySelector(".update-id");

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    const fileURL = URL.createObjectURL(file);
    imagePreview.src = fileURL;
    imagePreview.alt = "Selected Image";
    imagePreview.style.display = "block";
    console.log(`Selected file: ${file.name}`);
  });

  postButton.addEventListener("click", async () => {
    const servings = servingInput.value;
    const name = nameInput.value;
    const description = descriptionInput.value;
    const price = priceInput.value;
    const file = fileInput.files[0];
    let imageURL = '';

    if (file) {
      const fileRef = storageRef(storage, 'images/' + file.name);
      await uploadBytes(fileRef, file);
      imageURL = await getDownloadURL(fileRef);
      imagePreview.src = imageURL;
      imagePreview.alt = "Selected Image";
      console.log(`Uploaded file: ${file.name}`);
    }

    const id = Date.now();
    console.log(id);

    set(ref(db, 'dishinfo/' + id), {
      servings,
      name,
      description,
      price,
      imageURL
    });
  });

  postPage.addEventListener('click', () => {
    window.location.href = "hero.html";
  });

  logoutButton.addEventListener("click", () => {
    signOut(auth).then(() => {
      window.location.href = "/user/home.html";
    }).catch((error) => {
      console.log("Error: " + error);
    });
  });

  // Update functionality
  const urlParams = new URLSearchParams(window.location.search);
  const updateId = urlParams.get('updateId');

  if (updateId) {
    const postRef = ref(db, 'dishinfo/' + updateId);
    get(postRef).then((snapshot) => {
      const data = snapshot.val();
      if (data) {
        servingInput.value = data.servings;
        nameInput.value = data.name;
        descriptionInput.value = data.description;
        priceInput.value = data.price;
        imagePreview.src = data.imageURL;
        imagePreview.style.display = "block";
        updateIdField.value = updateId;
      }
    });

    postButton.addEventListener("click", async () => {
      const servingsval = servingInput.value;
      const nameval = nameInput.value;
      const description = descriptionInput.value;
      const priceval = priceInput.value;
      const file = fileInput.files[0];
      let imageURL = '';

      if (file) {
        const fileRef = storageRef(storage, 'images/' + file.name);
        await uploadBytes(fileRef, file);
        imageURL = await getDownloadURL(fileRef);
        imagePreview.src = imageURL;
        imagePreview.alt = "Selected Image";
      }

      set(ref(db, 'dishinfo/' + updateId), {
        servings: servingsval,
        name: nameval,
        description: description,
        price: priceval,
        imageURL: imageURL
      }).then(() => {
        alert("Data updated successfully!");
        window.location.href = "hero.html";
      }).catch((error) => {
        console.error('Error updating data:', error);
      });
    });
  }
}

// Navigation functionality in hero.html
if (window.location.href.includes("hero.html")) {
  const backButton = document.querySelector(".backbutt");
  const logoutButton = document.querySelector("#logout");

  backButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  logoutButton.addEventListener("click", () => {
    signOut(auth).then(() => {
      window.location.href = "/user/home.html";
    }).catch((error) => {
      console.log("Error: " + error);
    });
  });

  GetPostData();
}

// Function to get and display post data
function GetPostData() {
  const container = document.querySelector(".container");
  console.log("Fetching post data...");
  let contentHTML = '';
  const userRef = ref(db, 'dishinfo/');
  get(userRef).then((snapshot) => {
    const data = snapshot.val();
    for (const key in data) {
      const { servings, name, description, price, imageURL } = data[key];
      contentHTML += `
        <div class="card">
          <img class="card-image" src="${imageURL}" alt="Dish Image">
          <div class="card-content">
            <h1>Servings: ${servings}</h1>
            <p>Name of Dish: ${name}</p>
            <p>Description: ${description}</p>
            <p>Price: ${price}</p>
          </div>
          <div class="card-buttons">
            <button class="card-button delete-button" data-key="${key}">Delete</button>
            <button class="card-button update-button" data-key="${key}">Update</button>
          </div>
        </div>
      `;
    }
    container.innerHTML = contentHTML;

    // Add event listeners for update and delete buttons
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const key = event.target.getAttribute('data-key');
        deletePost(key);
      });
    });

    const updateButtons = document.querySelectorAll('.update-button');
    updateButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const key = event.target.getAttribute('data-key');
        updatePost(key);
      });
    });
  }).catch((error) => {
    console.error('Error fetching post data:', error);
  });
}

// Function to delete a post
function deletePost(key) {
  const postRef = ref(db, 'dishinfo/' + key);
  remove(postRef).then(() => {
    console.log('Post deleted successfully');
    GetPostData(); // Refresh the list of posts
  }).catch((error) => {
    console.error('Error deleting post:', error);
  });
}

// Function to update a post (Updated implementation)
function updatePost(key) {
  window.location.href = `index.html?updateId=${key}`;
}

// Display orders for admin
function displayOrders() {
  const ordersContainer = document.querySelector(".admin-orders-container");

  let ordersHTML = '';
  const ordersRef = ref(db, 'orders/');
  get(ordersRef).then((snapshot) => {
    const orders = snapshot.val();

    for (const orderId in orders) {
      const { Date, username, userEmail, totalPrice, totalItems, orderid, dishnames } = orders[orderId];

      ordersHTML += `
        <div class="order-card">
          <h2>Order ID: ${orderid}</h2>
          <p>Date: ${Date}</p>
          <p>User: ${username} (${userEmail})</p>
          <p>Total Items: ${totalItems}</p>
          <p>Total Price: Rs ${totalPrice.toFixed(2)}</p>
          <h3>Dishes:</h3>
          <ul>
            ${dishnames.map(dish => `<li>${dish}</li>`).join('')}
          </ul>
          <button class="delete-order" data-order-id="${orderid}">Delete</button>
        </div>
      `;
    }

    ordersContainer.innerHTML = ordersHTML;

    // Add event listeners for delete buttons
    const deleteButtons = document.querySelectorAll('.delete-order');
    deleteButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const orderId = event.target.getAttribute('data-order-id');
        deleteOrder(orderId);
      });
    });
  }).catch((error) => {
    console.error('Error fetching orders:', error);
  });
}

// Function to delete an order
function deleteOrder(orderId) {
  const orderRef = ref(db, 'orders/' + orderId);
  remove(orderRef).then(() => {
    console.log('Order deleted successfully');
    displayOrders(); // Refresh the list of orders
  }).catch((error) => {
    console.error('Error deleting order:', error);
  });
}

// Call displayOrders when the page loads
if (window.location.pathname.endsWith("adminorders.html")) {
  displayOrders();
}

// Cart management
let totalPrice = 0;
let totalItems = 0;
let nameArray = [];
let check = 0;
const pitem = document.querySelector(".pitem");

function updateCart(buyButton) {
  const card = buyButton.closest('.card');
  const priceElement = card.querySelector(".price");
  const nameElement = card.querySelector(".nameofdish h1"); // Assuming name is in h1 tag
  const price = parseFloat(priceElement.textContent);
  const name = nameElement.textContent;

  if (isNaN(price)) {
    console.error("Invalid price:", priceElement.textContent);
    return; // Exit the function if the price is invalid
  }

  const cartItemId = Date.now(); // Unique identifier for each cart item

  const newContent = `
    <div class="cartitem" data-id="${cartItemId}">
      <span class="item-name">${name}</span>
      <span class="item-price">Rs ${price.toFixed(2)}</span>
      <button class="cartdelete" data-price="${price}">Delete</button>
    </div>`;
  pitem.innerHTML += newContent; // Append new content to the existing content

  // Update total price
  check += 1;
  console.log(check);
  totalItems += 1;
  totalPrice += price;
  nameArray.push(name);

  localStorage.setItem('totalItems', totalItems);
  localStorage.setItem('totalPrice', totalPrice);
  localStorage.setItem('dishnames', JSON.stringify(nameArray));
  updateTotalPriceDisplay();

  // Add event listener to all delete buttons
  const deleteButtons = document.querySelectorAll('.cartdelete');
  deleteButtons.forEach(button => {
    button.removeEventListener('click', handleDeleteButton); // Prevent multiple bindings
    button.addEventListener('click', handleDeleteButton);
  });

  const placeOrderButton = document.querySelector(".placeorder");
  if (check === 0) {
    console.log("zero");
  }
  placeOrderButton.addEventListener('click', handlePlaceOrder);
}

function handlePlaceOrder() {
  const orderid = Math.floor(Math.random() * 100000);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day}-${month}-${year}`;

  localStorage.setItem('orderDate', currentDate);
  localStorage.setItem('orderid', orderid);
  const username = localStorage.getItem('username');
  console.log(username);
  const userEmail = localStorage.getItem('userEmail');

  const orderDetails = {
    Date: currentDate,
    username: username,
    userEmail: userEmail,
    totalPrice: totalPrice,
    totalItems: totalItems,
    orderid: orderid,
    dishnames: nameArray
  };

  set(ref(db, 'orders/' + orderid), orderDetails)
    .then(() => {
      console.log('Order stored successfully!');
      // Redirect to the admin page or show a success message
    })
    .catch((error) => {
      console.error('Error storing order:', error);
    });
}

function handleDeleteButton(event) {
  check -= 1;
  const button = event.target;
  const price = parseFloat(button.getAttribute('data-price'));
  const cartItem = button.closest('.cartitem');

  if (cartItem) {
    cartItem.remove();
    totalPrice -= price;
    updateTotalPriceDisplay();
  }
}

function updateTotalPriceDisplay() {
  const totalPriceElement = document.querySelector("#totalPrice");
  totalPriceElement.textContent = `Total: Rs ${totalPrice.toFixed(2)}`; // Update total price display
}

// Fetch and display user posts (Products page)
function userPostData() {
  const containerCard = document.querySelector(".containercard");
  let contentHTMLL = '';
  const userRef = ref(db, 'dishinfo/');
  return get(userRef).then((snapshot) => {
    const data = snapshot.val();
    for (const key in data) {
      const { servings, name, description, price, imageURL } = data[key];
      contentHTMLL += `
        <div class="card">
          <div class="servings"><p>This serves ${servings} people</p></div>
          <img class='imageproduct' src="${imageURL}" alt="Dish Image">
          <div class="nameofdish"><h1>${name}</h1></div>
          <div class="description"><h3>${description}</h3></div>
          <div class="price"><p class="price">${price}</p></div>
          <div class="buybutt">
            <button class="productbuybutt">Buy Now</button>
          </div>
        </div>`;
    }
    containerCard.innerHTML = contentHTMLL;
    return Promise.resolve("success");
  }).catch((error) => {
    console.error('Error retrieving data:', error);
  });
}

// Call userPostData and setup cart buy buttons on products.html
if (window.location.pathname.endsWith("products.html")) {
  userPostData().then(() => {
    const buyButtons = document.querySelectorAll(".productbuybutt");
    buyButtons.forEach(buyButton => {
      buyButton.addEventListener("click", () => {
        updateCart(buyButton);
      });
    });
  });
}
if(window.location.href.includes("index.html")){
const showOrders = document.querySelector("#showOrders")
  showOrders.addEventListener('click',()=>{
    window.location.href = "adminorders.html"
  })
}
