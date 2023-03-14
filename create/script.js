NavigationArea(BrawlerGenerator)
function NavigationArea(NavData){
var NavigationTable = document.querySelector('.artcl')

for(var i = 0; i < NavData.length; i++){
var navigator__navigation_button = `
<div class="assets-container" id="${NavData[i].code}">
    <div class="row contain">
        <div class="image-one">
            <div class="brawler ${NavData[i].name}">
                <img src="../assets/renders/${NavData[i].name}.png" style="${NavData[i].style}">
            </div>
        </div>
        <div class="txt-assets">
            <div class="column">
                <div class="codenametitles"><h1>${NavData[i].name}</h1></div>
                
                <div class="submit-btn download-btn">
                    <a href="../assets/brawlers-assets/${NavData[i].name}/${NavData[i].name}'s-Assets.zip">
                         <button>Download</button>
                    </a>
               </div>

               <div class="mbs"><h2>${NavData[i].size}</h2></div>

            </div>
        </div>
    </div>
</div>`
NavigationTable.innerHTML += navigator__navigation_button}}