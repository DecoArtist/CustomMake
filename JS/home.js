
NavigationArea(CampGenerator)
function NavigationArea(NavData){
var NavigationTable = document.querySelector('.campaingsannounce')

{
var navigator__navigation_button = `
<div style="position:absolute;top:-104px;" id="campaings"></div>
    
    <div class="campaigns-container">
        <a href="${NavData[campvalue].link}">

            <div class="campaing-img" style="background-image:url(${NavData[campvalue].thumb})"></div>

            <div class="camptext row">
                <img src="assets/logos/custom-logo_icon.png"><p>NEW CAMPAING</p>
            </div>

            <div class="under-logos">
                <div class="row flex-nowrap">
                    <img src="assets/logos/custom-logo_b.png" class="1">
                    <img src="assets/logos/molyan-stars-logo.png" class="2">
                </div>
            </div>

            <div class="campaigns-announce"></div>
        </a>
    </div>
`
NavigationTable.innerHTML += navigator__navigation_button}}

function loadnav() {
    document.querySelector('nav').innerHTML = nav,
    document.querySelector('.selectionbar').innerHTML = navselector;
    setTimeout(() => {
        document.querySelector('.camptext').style = "position:relative;"
    }, 2);
    setTimeout(() => {
        document.querySelector('.camptext').style = "position:absolute;"
    }, 3);
}
