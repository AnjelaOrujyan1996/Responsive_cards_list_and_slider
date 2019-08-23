require('normalize.css/normalize.css');
require('./styles/index.scss');
const data = require('./jsons/cards');
import '../node_modules/owl.carousel';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../node_modules/jquery/dist/jquery';


window.onload = () => {
    let str = '';
    data.cards.map((card, index) => {

        let str1 = `
<div class="mx-auto cards_list_card p-3 my-3">
                 <div class="cards_list_card_img" style="background-image: url(${card.image})"></div>
                 <div  class="cards_list_card_name" onclick="alert('Card Name')"> ${card.cardName} </div>
                 <div class="d-flex justify-content-between">
                 <span class="dark-gray"><i class="fa fa-circle light-gray" onclick="alert('User Name')"></i>  ${card.userName}</span>
                 <span class="dark-gray"><i class="fa fa-star orange"></i>  <span class="orange"><b>${card.rating}</b></span> (${card.likes})</span>                
</div>
 <hr/>
 <div class="d-flex justify-content-between">
                 <span class="heart-gray" onclick="alert('Favorite')"><i class="fa fa-heart heart-gray"></i></span>
                 <span class="dark-green"> <b>от ${card.cost} </b><i class="fas fa-ruble-sign"></i></span>                
</div>
</div>
    
    `;
        str += str1;
    });
    document.getElementById('cards_list').innerHTML = str;

}

$(document).ready(function () {

    $("#owl-demo").owlCarousel({
        jsonPath: 'jsons/cards.json',
        jsonSuccess: customDataSuccess(data),
        responsiveClass: true,
        margin: 10,
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            },
            1500: {
                items: 6,
                nav: true,
                loop: false
            }
        }
    });

    function customDataSuccess(data) {
        var content = "";
        for (var i in data["cards"]) {
            content += `
             <div class="mx-auto cards_list_card p-3 my-3">
                 <div class="cards_list_card_img" style="background-image: url(${data["cards"][i].image})"></div>
                 <div  class="cards_list_card_name" onclick="alert('Card Name')"> ${data["cards"][i].cardName} </div>
                 <div class="d-flex justify-content-between">
                 <span class="dark-gray"><i class="fa fa-circle light-gray" onclick="alert('User Name')"></i>  ${data["cards"][i].userName}</span>
                 <span class="dark-gray"><i class="fa fa-star orange"></i>  <span class="orange"><b>${data["cards"][i].rating}</b></span> (${data["cards"][i].likes})</span>                
</div>
 <hr/>
 <div class="d-flex justify-content-between">
                 <span class="heart-gray" onclick="alert('Favorite')"><i class="fa fa-heart heart-gray"></i></span>
                 <span class="dark-green"> <b>от ${data["cards"][i].cost} </b><i class="fas fa-ruble-sign"></i></span>                
</div>
    </div>
            `
        }
        $("#owl-demo").html(content);
    }
});





