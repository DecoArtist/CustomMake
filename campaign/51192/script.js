NavigationArea(CampGenerator)
function NavigationArea(NavData){
var NavigationTable = document.querySelector('.campaingheader')
campvalue = 1

{
var navigator__navigation_button = `
<div class="campaingcontainer-m16">
    <div class="campaingimage" style="background-image: url(${NavData[campvalue].thumb});">
        <div class="textalingabsolute">
            <div class="campaingstate row">
                <div class="winnerMarker ${NavData[campvalue].status}"><img class="openorclose" src="../../assets/UIUX/voting/winner-badge-bordered.112cde01.svg" style="opacity: 1;"></div>
                <p class="campaingopenorclose">${NavData[campvalue].status}</p>
            </div>

            <p>${NavData[campvalue].name}</p>
        </div>

        <img src="${NavData[campvalue].thumb}">
    </div>

    <div class="campainginformation">
        <img src="${NavData[campvalue].thumb}" style="display:none;">

        <div class="whatisthecamp">
            <div class="textaling">
                <p><strong>Campaign Background</strong></p>
                <p>${NavData[campvalue].description}</p>
            </div>
        </div>
    </div>
</div>
`
NavigationTable.innerHTML += navigator__navigation_button}}