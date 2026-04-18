// These grab the forms and page elements from index.html.
const registerForm = document.querySelector("#register-form");
const loginForm = document.querySelector("#login-form");
const treeForm = document.querySelector("#tree-form");
const treeList = document.querySelector("#tree-list");
const statusMessage = document.querySelector("#status-message");
const currentUserMessage = document.querySelector("#current-user-message");

// This stores the logged-in user in the browser while the page is open.
let currentUser = null;

// This updates the status message on the page.
function setStatus(message) {
  statusMessage.textContent = message;
}

// This shows the list of trees on the page.
function renderTrees(trees) {
  // This clears the old list before rendering again.
  treeList.innerHTML = "";

  // This loops through each tree and adds it to the page.
  trees.forEach((tree) => {
    const listItem = document.createElement("li");
    listItem.className = "tree-item";
    listItem.innerHTML = `
      <h3>${tree.title}</h3>
      <p>${tree.description || "No description yet."}</p>
    `;
    treeList.appendChild(listItem);
  });
}

// This loads the current user's trees from the server.
async function loadTrees() {
  // This stops the function if no one is logged in.
  if (!currentUser) {
    return;
  }

  // This sends a request to get the user's trees.
  const response = await fetch(`/api/trees?userId=${currentUser.id}`);
  // This turns the response into JSON.
  const data = await response.json();
  // This shows the trees on the page.
  renderTrees(data.trees);
}

// This runs when the register form is submitted.
registerForm.addEventListener("submit", async (event) => {
  // This stops the page from reloading.
  event.preventDefault();

  // This sends the register form values to the server.
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.querySelector("#register-name").value,
      email: document.querySelector("#register-email").value,
      password: document.querySelector("#register-password").value,
    }),
  });

  // This turns the response into JSON.
  const data = await response.json();

  // This shows an error message if the request failed.
  if (!response.ok) {
    setStatus(data.error);
    return;
  }

  // This shows a success message.
  setStatus("Account created. You can log in now.");
  // This clears the form fields.
  registerForm.reset();
});

// This runs when the login form is submitted.
loginForm.addEventListener("submit", async (event) => {
  // This stops the page from reloading.
  event.preventDefault();

  // This sends the login form values to the server.
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: document.querySelector("#login-email").value,
      password: document.querySelector("#login-password").value,
    }),
  });

  // This turns the response into JSON.
  const data = await response.json();

  // This shows an error message if the request failed.
  if (!response.ok) {
    setStatus(data.error);
    return;
  }

  // This saves the logged-in user in memory.
  currentUser = data.user;
  // This updates the dashboard message.
  currentUserMessage.textContent = `Welcome, ${currentUser.name}.`;
  // This shows the tree form after login.
  treeForm.classList.remove("hidden");
  // This shows a success message.
  setStatus("Logged in successfully.");
  // This clears the login form.
  loginForm.reset();
  // This loads the user's trees.
  await loadTrees();
});

// This runs when the tree form is submitted.
treeForm.addEventListener("submit", async (event) => {
  // This stops the page from reloading.
  event.preventDefault();

  // This sends the tree form values to the server.
  const response = await fetch("/api/trees", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: currentUser.id,
      title: document.querySelector("#tree-title").value,
      description: document.querySelector("#tree-description").value,
      isPublic: document.querySelector("#tree-public").checked,
    }),
  });

  // This turns the response into JSON.
  const data = await response.json();

  // This shows an error message if the request failed.
  if (!response.ok) {
    setStatus(data.error);
    return;
  }

  // This shows a success message.
  setStatus("Tree created.");
  // This clears the form.
  treeForm.reset();
  // This reloads the tree list.
  await loadTrees();
});
