


(function getApi() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = this.responseText;
            var ail = JSON.parse(result);
            var mohamed=ail.products;
            var basket = "";
            for (var i = 0; i < mohamed.length; i++) {

                var cartoona = `

                 <div class="col-md-4 text-center mb-5">  
                    <img src="${mohamed[i].images[0]}" class='w-100' style='height:350px'>
                    <h4>Name:${mohamed[i].title}</h4>
                    <h6>Category:${mohamed[i].category}</h6>
                    <h6>Brand:${mohamed[i].brand}</h6>
                    <h6>Stock:${mohamed[i].stock}</h6>
                    <h6>Rating${mohamed[i].rating}of5</h6>
                    <h6>Price${mohamed[i].price}$</h6>
                    <h6>id${mohamed[i].id}</h6>
                 </div>
                `;
                basket = basket + cartoona;
            }
            document.querySelector(".test").innerHTML =basket;
        }
    }

    xhttp.open("GET", "https://dummyjson.com/products", true);
    xhttp.send();
})();