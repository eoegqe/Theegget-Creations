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

    if (response.status === 401) {
      createAccountButton.hidden = false;
      return;
    }

    if (response.ok) {
      const result = await response.json();
      createAccountButton.hidden = Boolean(result.user);
    }
  } catch {
    createAccountButton.hidden = true;
  }
}

checkAccountSession();
