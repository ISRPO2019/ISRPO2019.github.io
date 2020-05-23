function sliderCreate(product) {
	var carouselInner = document.getElementById('car-inner');

	for (var i = 0; i < product.images.length; i++) {
		var carouselItem = document.createElement('div');
		carouselItem.className = "carousel-item";
		var carouselItemImg = document.createElement('img');
		carouselItemImg.className = "img-responsive";
		carouselItemImg.setAttribute('src', product.images[i]);
		if (i == 0) {
			carouselItem.className = "carousel-item active";
		}
		carouselItem.appendChild(carouselItemImg);
		carouselInner.appendChild(carouselItem);
	}
}

function productInit(product) {
	var productBanner = document.getElementById('prod-ban');
	var productBannerImg = document.createElement('img');
	productBannerImg.setAttribute('src', product.slide);
	productBanner.appendChild(productBannerImg);
	var productName = document.getElementById('product-name');
	productName.innerHTML = product.brand + ' ' + product.name;
	var productPrice = document.getElementById('product-price');
	productPrice.innerHTML = "Цена: " + product.price;

	if (product.width != null) {
		var productWidth = document.getElementsByClassName('param-width');
		for (var i = 0; i < productWidth.length; i++) {
			productWidth[i].innerHTML = product.width + "мм";
		}
	}
	if (product.height != null) {
		var productHeight = document.getElementsByClassName('param-height');
		for (var i = 0; i < productHeight.length; i++) {
			productHeight[i].innerHTML = product.height + "мм";
		}
	}
	if (product.depth != null) {
		var productDepth = document.getElementsByClassName('param-depth');
		for (var i = 0; i < productDepth.length; i++) {
			productDepth[i].innerHTML = product.depth + "мм";
		}
	}
	if (product.weight != null) {
		var productWeight = document.getElementsByClassName('param-weight');
		for (var i = 0; i < productWeight.length; i++) {
			productWeight[i].innerHTML = product.weight + "гм";
		}
	}
	if (product.material != null) {
		var productMaterial = document.getElementsByClassName('param-material');
		for (var i = 0; i < productMaterial.length; i++) {
			productMaterial[i].innerHTML = product.material;
		}
	}
	if (product.colour != null) {
		var productColour = document.getElementsByClassName('param-colour');
		for (var i = 0; i < productColour.length; i++) {
			productColour[i].innerHTML = product.colour;
		}
	}
	if (product.gender != null) {
		var productGender = document.getElementsByClassName('param-gender');
		for (var i = 0; i < productGender.length; i++) {
			productGender[i].innerHTML = product.gender;
		}
	}
	if (product.mechanism != null) {
		var productMechanism = document.getElementsByClassName('param-mechanism');
		for (var i = 0; i < productMechanism.length; i++) {
			productMechanism[i].innerHTML = product.mechanism;
		}
	}
	if (product.country != null) {
		var productCountry = document.getElementsByClassName('param-country');
		for (var i = 0; i < productCountry.length; i++) {
			productCountry[i].innerHTML = product.country;
		}
	}

	sliderCreate(product);
	commentsListCreate(catalog.find(product => parseInt(product.id) == parseInt(params["id"])));
}

productInit(productById);