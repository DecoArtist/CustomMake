NavigationArea(CampGenerator)
function NavigationArea(NavData){
var NavigationTable = document.querySelector('.grid-layout')

for(var i = 0; i < NavData.length; i++){
var navigator__navigation_button = `
<li class="grid-item">
    <a href="${NavData[i].link}">
        <div class="p-relative w-100 d-block">
            <div class="campaignItem__main">
                <div class="campaignItem__content ${NavData[i].status}">
                    <div class="cover-bg p-absolute grid-bgr">
                        <img src="${NavData[i].thumb}" class="cover-bg">
                    </div>

                    <div class="text_wrapper">
                        <div class="campaignItem_info">
                            <div class="d-flex" style="margin-bottom: 8px;">
                                <div class="campaignMarker--md --${NavData[i].status} p-relative">
                                    <img src="../assets/UIUX/voting/winner-badge-bordered.112cde01.svg">
                                </div>
                                <p class="campaignItem_status">${NavData[i].status}</p>
                            </div>
                            <p>${NavData[i].name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </a>
</li>`
NavigationTable.innerHTML += navigator__navigation_button}}