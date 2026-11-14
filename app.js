const createAccountButton = document.getElementById("create-account");

async function checkAccountSession() {
  try {
    const response = await fetch("https://accounts.theegget.com/api/me", {
      method: "GET",
      credentials: "include",
      headers: {
        "Accept": "application/json"
      },
      cache: "no-store"
    });

    if (response.ok) {
      const result = await response.json();
      if (result.user) {
        createAccountButton.hidden = true;
      }
    }
  } catch {
    createAccountButton.hidden = false;
  }
}

checkAccountSession();
