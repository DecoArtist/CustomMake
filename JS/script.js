function OpenSelectBar() {
	document.querySelector(".selectionbar").style = "-webkit-animation: enterselec 0.3s linear forwards;";
    document.querySelector(".closemenu").style = "display:block;";
    document.querySelector(".openmenu").style = "display:none;";
    document.querySelector("#app").style = "overflow:hidden;"
}

function CloseSelectBar() {
	document.querySelector(".selectionbar").style = "-webkit-animation: backselec 0.3s linear forwards;";
    document.querySelector(".closemenu").style = "display:none;";
    document.querySelector(".openmenu").style = "display:block;";
    document.querySelector("#app").style = "overflow:visible;overflow-x:hidden;"
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
let vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty('--vh-', `${vw}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

window.addEventListener('resize', () => {
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh-', `${vw}px`);
  });

const nav = `
<div class="navcontainer">
    <div class="navleft">
        <div class="row" style="gap:24px;">
            <a href="https://custom-make.netlify.app/">
                <div class="logo"><img src="https://custom-make.netlify.app/assets/logos/custom-logo.png"></div>
            </a>

            <div class="row campaingstypes" style="margin-top: 30px;">
                <a href="https://custom-make.netlify.app/" class="campnav"><p>Home</p></a>
                <a href="https://custom-make.netlify.app/campaign/all" class="campnav"><p>Campaigns</p></a>
                <a href="https://custom-make.netlify.app/create/" class="creatnav"><p>Create</p></a>
            </div>
        </div>
    </div>

    <div class="navright row">
        <div class="submit-btn">
            <a href="https://custom-make.netlify.app/create/submit">
                <button>submit</button>
            </a>
        </div>

        <a target="_blank" href="https://discord.gg/8GwZXJk7wu" title="download Molyan Stars" style="margin-top: 16px;margin-left: 10px;height: 40px;">
            <div class="dowloadmolyanstarts">
                <div class="molyanlogo">
                    <img src="https://custom-make.netlify.app/assets/UIUX/icons/Molyan-stars.jpg" style="border-radius:999px;width:40px;">
                </div>
            </div>
        </a>
    </div>

    <div class="navselectoptions">
        <div class="clickbar">
            <img onclick="OpenSelectBar()" src="https://custom-make.netlify.app/assets/UIUX/nav/icon-menu-open-black.2c7dc236.svg" class="openmenu">
            <img onclick="CloseSelectBar()" src="https://custom-make.netlify.app/assets/UIUX/nav/icon-menu-close-black.41318a73.svg" class="closemenu" style="display:none;">
        </div>
    </div>
</div>`

const navselector = `
<div class="column itensselectbar">

<a href="https://custom-make.netlify.app/">
    <div class="column">
        <p><strong>Home</strong></p>
        <p>Browse submitted Creations</p>
    </div>
</a>

<a href="https://custom-make.netlify.app/campaign/all">
    <div class="column">
        <p><strong>Campaigns</strong></p>
        <p>Browse all Campaigns</p>
    </div>
</a>

<a href="https://custom-make.netlify.app/create/" onclick="CloseSelectBar()">
    <div class="column">
        <p><strong>Create</strong></p>
        <p>Make your own Creations</p>
    </div>
</a>

<a href="https://custom-make.netlify.app/create/submit">
    <div class="column">
        <p><strong>Submit</strong></p>
        <p>Submit you Creation</p>
    </div>
</a>

<a target="_blank" href="https://discord.com/8GwZXJk7wu">
    <div class="column">
        <p><strong>Molyan Stars</strong></p>
        <p>Download Molyan stars</p>
    </div>
</a>

</div>`

function loadnav() {
    document.querySelector('nav').innerHTML = nav,
    document.querySelector('.selectionbar').innerHTML = navselector;
}