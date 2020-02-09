$(Document).ready(function(){
    $(".carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    })
})

// {/* <div class="cards">
//     <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"/>
//     <h4>Men Navy Blue Solid Sweatshirt</h4>
//     <p>United Colors of Benetton</p>
//     <p>Rs 2599</p>
// </div> */}

function createClothesCard(obj){
    var clothCardWrap = document.createElement('div');
    clothCardWrap.className = 'cards';

    var clothImage = document.createElement('img');
    clothImage.src = obj.preview;
    clothCardWrap.appendChild(clothImage);

    var clothName = document.createElement('h4');
    clothName.innerHTML = obj.name;
    clothName.className = 'product-name';
    clothCardWrap.appendChild(clothName);

    var clothBrandName = document.createElement('p');
    clothBrandName.innerHTML = obj.brand;
    clothBrandName.className = 'brand';
    clothCardWrap.appendChild(clothBrandName);

    var clothPriceTag = document.createElement('p');
    clothPriceTag.innerHTML = 'Rs.' + obj.price;
    clothPriceTag.className = 'price';
    clothCardWrap.appendChild(clothPriceTag);

    clothCardWrap.onclick = function() {
        localStorage.setItem('cardId', obj.id);
        console.log(obj.id);
        location.assign("product_details.htm");
    }


    return clothCardWrap;


}

function createAccessoriesCard(obj){
    var accessoryCardWrap = document.createElement('div');
    accessoryCardWrap.className = 'cards';

    var accessoryImage = document.createElement('img');
    accessoryImage.src = obj.preview;
    accessoryCardWrap.appendChild(accessoryImage);

    var accessoryName = document.createElement('h4');
    accessoryName.innerHTML = obj.name;
    accessoryName.className = 'product-name';
    accessoryCardWrap.appendChild(accessoryName);

    var accessoryBrandName = document.createElement('p');
    accessoryBrandName.innerHTML = obj.brand;
    accessoryBrandName.className = 'brand';
    accessoryCardWrap.appendChild(accessoryBrandName);

    var accessoryPriceTag = document.createElement('p');
    accessoryPriceTag.innerHTML = 'Rs.' + obj.price;
    accessoryPriceTag.className = 'price';
    accessoryCardWrap.appendChild(accessoryPriceTag);

    accessoryCardWrap.onclick = function() {
        localStorage.setItem('cardId', obj.id);
        console.log(obj.id);
        location.assign("product_details.htm");
    }
    

    return accessoryCardWrap;


}



var productCountItems = document.getElementById("item-count");
productCountItems.innerHTML = productCount;

localStorage.setItem("productCount", cartItems.innerHTML);


var clothCardSection = document.getElementById('cloth-cards-wrap');
var accessoreyCardSection = document.getElementById('access-cards-wrap');

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product/', true);
xhttp.onreadystatechange = function() {
    if(this.readyState === 4){
        var ecomData = JSON.parse(this.responseText);
        for(var i=0; i<ecomData.length; i++){
            if(ecomData[i].isAccessory == false){
                clothCardSection.appendChild(createClothesCard(ecomData[i]));
            }
            else{
                accessoreyCardSection.appendChild(createAccessoriesCard(ecomData[i]));
            }
        }
    }
}

xhttp.send()

