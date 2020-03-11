


{/* 
<img id="display-pic" src="https://i.imgur.com/rlm5PWt.jpg" alt="shirt"/>
<div id="detail-wrap">
    <h1>Men Navy Blue Solid Sweat Shirt</h1>
    <p>United Colors of Benetton</p>
    <p>
        <span>Price: Rs </span>  <span>2599</span>
    </p>
    <h4>Description</h4>
    <p>Navy solid sweatshirt with patchwork, has a round neck,<br> long sleeves, straight hem</p>
    <h4>Product Preview</h4>
    <div id="product-preview-wrap">
        <div>
            <img class="preview-card" src="https://i.imgur.com/rlm5PWt.jpg"/>
        </div>
        
    </div>
    <button>Add to Cart</button>
</div> */}



function createProductDetailPage(obj){
    var page2Wrap = document.createElement('div');
    page2Wrap.className = "wrapper";

    var displayPic = document.createElement('img');
    displayPic.src = obj.preview;
    displayPic.className = "displayImg";
    page2Wrap.appendChild(displayPic);

    var detailWrap = document.createElement('div');
    detailWrap.id = "detail-wrap";
    page2Wrap.appendChild(detailWrap);

    var productTitle = document.createElement("h1");
    productTitle.innerHTML = obj.name;
    productTitle.id = "product-title";
    detailWrap.appendChild(productTitle)

    var brandName = document.createElement("p");
    brandName.innerHTML = obj.brand;
    brandName.id = "brand-name";
    detailWrap.appendChild(brandName);

    var priceTag = document.createElement("p");
    detailWrap.appendChild(priceTag);

    var priceCons = document.createElement("span");
    priceCons.innerHTML = "Price: Rs ";
    priceTag.appendChild(priceCons);
    
    var priceVar = document.createElement("span");
    priceVar.innerHTML = obj.price;
    priceTag.appendChild(priceVar);
    priceVar.id = "real-price";

    var descriptionTxt = document.createElement("h4");
    descriptionTxt.innerHTML = "Description";
    descriptionTxt.className = "sub-title";
    detailWrap.appendChild(descriptionTxt)

    var fullDescription = document.createElement("p");
    fullDescription.innerHTML= obj.description;
    fullDescription.id = "description";
    detailWrap.appendChild(fullDescription);
    
    var productPreview = document.createElement("h4");
    productPreview.innerHTML = "Product Preview";
    productPreview.className = "sub-title";
    detailWrap.appendChild(productPreview);

    var previewPhotosWrap = document.createElement('div');
    previewPhotosWrap.className = "product-preview-wrap";

    for(var j=0;j<obj.photos.length;j++) {
        var picWrap = document.createElement('div');
        // picWrap.className = "pic-wrap";
        var previewphoto = document.createElement('img');
        previewphoto.className = "preview-card";
        previewphoto.src = obj.photos[j];
        // picWrap.appendChild(previewphoto);

        previewPhotosWrap.appendChild(previewphoto);

        
    }


    previewPhotosWrap.onclick = function(e){
        if(e.target.tagName === 'IMG'){
            displayPic.src = e.target.src;
            // e.target.style.border = "solid #2198e6 2px";
            console.log(previewphoto);
            var parentDiv = e.target.parentElement;
            for(let i=0; i < parentDiv.children.length; i++){
    	        parentDiv.children[i].classList.remove('selected');
            }
            e.target.classList.add('selected');
        }
        
    }
    
    detailWrap.appendChild(previewPhotosWrap);

    var addToCart = document.createElement('button');
    addToCart.innerHTML = 'Add to Cart';
    detailWrap.appendChild(addToCart);

    // var countElement = document.getElementById('item-count');
    // var count = countElement.innerText;


    var itemCount = document.getElementById('item-count');
    count = localStorage.getItem('count') > 0 ? localStorage.getItem('count') : 0;
    itemCount.innerHTML = count;
    var productCount = localStorage.getItem('count'+obj.id);


    addToCart.onclick = function(){
        localStorage.setItem('cardId' + obj.id, obj.id) 
        // location.assign('checkout_page.htm')
        itemCount.innerHTML = ++count;
        localStorage.setItem('count' + obj.id, ++productCount);
        localStorage.setItem('count', count);

    }

       
    

    return page2Wrap;
    
}

 var secondPageMain = document.getElementById("main-div-page2");
var myCart = document.getElementById('kart')
myCart.onclick = function(){
    location.assign('checkout_page.htm')
} 


var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product/', true);
xhttp.onreadystatechange = function() {
    if(this.readyState === 4) {
        var ecomData = JSON.parse(this.responseText);
        for(var i=0; i<ecomData.length; i++) {
            if(ecomData[i].id === localStorage.getItem("cardId")){
                secondPageMain.appendChild(createProductDetailPage(ecomData[i]));
                console.log(ecomData[i])
            }
        }
    }
}
xhttp.send();





