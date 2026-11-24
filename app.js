const createAccountButton = document.getElementById("create-account");

async function checkAccountSession() {
  if (!createAccountButton) return;

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

const subscriptionMessage = document.getElementById("subscription-message");

if (subscriptionMessage) {
  const messages = [
    "Sorry, I couldn't find your subscription. Oh, that's right, there are none.",
    "Were you looking for a subscription? Well, we couldn't find it because they don't exist.",
    "Error 404: Subscription not found. We checked. We really don't sell subscriptions."
  ];

  subscriptionMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
}
