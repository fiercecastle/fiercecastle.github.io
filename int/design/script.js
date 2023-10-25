const reference = document.querySelector('.reference');
const heading = document.querySelector('h1');
const smirkCat = document.getElementById("smirk-cat");
const body = document.querySelector('body');
let isSmirkCatShowing = false;

reference.addEventListener('click', function(event) {
  event.preventDefault();
  
  if (!isSmirkCatShowing) {
    heading.textContent = 'Smirk Cat Reference';
    smirkCat.setAttribute("src", "../../img/Smirkin.png");
    body.classList.add("smirk-theme"); // add the dark-theme class
    isSmirkCatShowing = true;
  } else {
    heading.textContent = 'Apollo';
    smirkCat.setAttribute("src", "../../img/smirk.png");
    body.classList.remove("smirk-theme"); // remove the dark-theme class
    isSmirkCatShowing = false;
  }
});

const settingsBtn = document.getElementById('settings-btn');
const settingsUI = document.getElementById('settings-ui');

function toggleSettingsUI() {
  settingsUI.classList.toggle('settings-ui-open');
}

settingsBtn.addEventListener('click', toggleSettingsUI);

var saveSettingsBtn = document.getElementById('save-settings-btn');
saveSettingsBtn.addEventListener('click', toggleSettingsUI);
