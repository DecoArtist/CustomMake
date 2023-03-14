var CampGenerator = [
    {
    //value 0
    'mr':'', // if "value" is equal to an even number 'mr':' ', but if it is an odd number 'mr':'0';
    'name':'Inky in Magic Land',
    'color':'rgb(71, 0, 130)',
    'status':'closed',
    'date':'08/29/2022', //USA date system, month/day/year
    'link':'https://custom-make.netlify.app/campaign/91411/',
    'thumb':'https://custom-make.netlify.app/campaign/91411/assets/InkyCampaingAnnounce.jpg',
    'thumb_detail':'https://custom-make.netlify.app/campaign/91411/assets/InkyCampaign.png',
    'description':`During one of his long journeys , Inky finds himself in a magical land , but in order to enter , he needs a magical skin ! Could that be Sorcerer Inky ? Toad Inky ? Or even a Gnome Inky ! It's up to you to make a cool skin design for Inky inspired by the Magic Theme ! The perfect creation from this campaign will be added to the game!`,
    },

    {
    //value 1
    'mr':'0', // if "value" is equal to an even number 'mr':' ', but if it is an odd number 'mr':'0';
    'name':'Molyan & Sasha:<br>Easter is here!',
    'color':'rgb(35, 59, 164)',
    'status':'closed',
    'date':'01/03/2023', //USA date system, month/day/year
    'link':'https://custom-make.netlify.app/campaign/51192/',
    'thumb':'https://custom-make.netlify.app/campaign/51192/assets/EasterCampaingAnnounce.png',
    'thumb_detail':'https://custom-make.netlify.app/campaign/51192/assets/EasterCampaing.png',
    'description':`In search of more Easter eggs, Molyan called his friend Sasha to get the best outfit for an egg hunt! Did they become rabbits? Or chocolatiers? But it's up to you to decide what they will look like! Vote for your favorite skin and help the Molyan Stars team choose ONE creation to be added to the game.`,
    },

    {
    //value 2
    'mr':'', // if "value" is equal to an even number 'mr':' ', but if it is an odd number 'mr':'0';
    'name':"Dew's Summer Day",
    'color':'rgb(150 141 228)',
    'status':'open',
    'date':'--/04/2023', //USA date system, month/day/year
    'link':'https://custom-make.netlify.app/campaign/45230/',
    'thumb':'https://custom-make.netlify.app/campaign/45230/assets/SummerCampaingAnnounce.png',
    'thumb_detail':'https://custom-make.netlify.app/campaign/45230/assets/SummerCampaing.png',
    'description':`Get ready to make a splash in Dew's Summer Day campaign! Dew is ready to hit the beach and show off her new skin, but she needs your help to make it happen. Will she be a lifeguard in a retro swimsuit, a surfer chick with a cool board, or a beach volleyball player with a winning outfit? The choice is yours! Create the perfect summer look for Dew and one lucky design will be added to Molayn Stars! So grab your sunscreen and let's get designing!`,
    },
];

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
document.body.style.setProperty('--vh', `${vh}px`);
let vw = window.innerWidth * 0.01;
document.body.style.setProperty('--vw', `${vw}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.body.style.setProperty('--vh', `${vh}px`);
  });

window.addEventListener('resize', () => {
    let vw = window.innerWidth * 0.01;
    document.body.style.setProperty('--vw', `${vw}px`);
  });


let total_vh = window.innerHeight;
document.body.style.setProperty('--100vh', `${total_vh}px`);
let total_vw = window.innerWidth;
document.body.style.setProperty('--100vw', `${total_vw}px`);

window.addEventListener('resize', () => {
    let total_vh = window.innerHeight;
    document.body.style.setProperty('--100vh', `${total_vh}px`);
  });

window.addEventListener('resize', () => {
    let total_vw = window.innerWidth;
    document.body.style.setProperty('--100vw', `${total_vw}px`);
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

function closebanner() {

    setTimeout(() => {
        document.getElementById('banner_').remove();
        document.querySelector('.campaingsannounce').style.marginTop = '80px'
      }, 1350);

    document.getElementById('banner_').style = "animation: out_banner 1.4s forwards cubic-bezier(0.53, -0.27, 0.66, 1.21);"
}