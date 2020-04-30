include("./scripts/localStorage.js");

//filteringReset - функция для сброса фильтров
function filteringReset() {
    filteredArr=catalog;
    cardListCreate(filteredArr, 'productCard');
    return filteredArr;
};

function checkedFiltersListCreate(filters, checkedList) {
    removeList(checkedList);
    var listDiv = document.getElementById(checkedList);

    filterArr = [];
    var count = 0;
    for (let key in filters) {
        if (filters[key] != 0) {
            for (var i = 0; i < filters[key].length; i++) {
                var list = document.createElement('div');
                list.className = "d-flex";
                var closeImageWrapper = document.createElement('div');
                closeImageWrapper.className = "ml-2";
                var closeImage = document.createElement('img');
                closeImage.className = "cross filter-cross";
                closeImage.setAttribute('src', 'assets/cross.png');
                closeImage.setAttribute('data-filter', filters[key][i]);
                closeImage.setAttribute('data-filter-name', key);
                closeImageWrapper.appendChild(closeImage);
                list.appendChild(closeImageWrapper);

                var nameWrapper = document.createElement('div');
                nameWrapper.className = "ml-3";
                var name = document.createElement('p');
                name.textContent = filters[key][i];

                nameWrapper.appendChild(name);
                list.appendChild(nameWrapper);
                listDiv.appendChild(list);
                count++;
            }
        }
    }

    $('.filter_count p').text(count);
}

//filtering - функция для фильтрации
function filtering(filter, filterArr) {
    filterArr = [];
    for (var item of catalog) {
        if ((filter.gender.length != 0) && (filter.gender.includes(item.gender) == false)) continue;
        if ((filter.price.length != 0) && ((parseInt(item.price,10) < filter.price[0]) || (parseInt(item.price,10) > filter.price[1]))) continue;
        if ((filter.brand.length != 0) && (filter.brand.includes(item.brand) == false)) continue;
        if ((filter.country.length != 0) && (filter.country.includes(item.country) == false)) continue;
        if ((filter.material.length != 0) && (filter.material.includes(item.material) == false)) continue;
        if ((filter.mechanism.length != 0) && (filter.mechanism.includes(item.mechanism) == false)) continue;
        if ((filter.colour.length != 0) && (filter.colour.includes(item.colour) == false)) continue;
        filterArr.push(item);
    };
    if (sort != null) {
        sortCardList(sort, filterArr);
    }
    cardListCreate(filterArr, 'productCard');
    filteredArr = filterArr;
    return filteredArr;
};

function removeElementAtCheckedFiltersList(el, filters) {
    var name = $(el).attr('data-filter-name');
    var filter = $(el).attr('data-filter');
    
    filters[name] = jQuery.grep(filters[name], function(value) {
        return value != filter;
    });
    
    filtering(productFilters,filteredArr);
    checkedFiltersListCreate(productFilters, 'filters-dropdown-menu');
    $("input[value='"+ filter +"']").prop("checked", false);
}

function sortCardList(sort, productList) {
    switch(sort) {
        case 'asc':
            productList.sort(function (a, b) {
                if (parseInt(a.price) > parseInt(b.price)) {
                    return 1;
                }
                if (parseInt(a.price) < parseInt(b.price)) {
                    return -1;
                }
                return 0;
            });
            console.log("работает аск");
            break;
        case 'desc':
            productList.sort(function (a, b) {
                if (parseInt(a.price) < parseInt(b.price)) {
                    return 1;
                }
                if (parseInt(a.price) > parseInt(b.price)) {
                    return -1;
                }
                return 0;
            });
            console.log("работает desc");
            break;
        case 'brand':
            productList.sort(function (a, b) {
                if (a.brand > b.brand) {
                    return 1;
                }
                if (a.brand < b.brand) {
                    return -1;
                }
                return 0;
            });
            console.log("работает brand");
            break;
    }
}

var productFilters = {
  'brand': [],
  'gender': [],
  'mechanism': [],
  'colour': [],
  'material': [],
  'price': [],
  'country': []
}

var sort = null;

$('#sort1, #sort2, #sort3').on('click', function() {
    sort = $(this).val();
    sortCardList(sort, filteredArr);
    filtering(productFilters, filteredArr);
    console.log(sort);
});

$('.checkbox').on('click', function() {
    var checkboxName = $(this).attr('name');

    switch(checkboxName) {
        case 'brand[]':
            productFilters.brand = [];
            $("input[name='brand[]']").each(function () {
                if ($(this).is(":checked")) {
                    productFilters.brand.push($(this).val());
                }
            });
            break;
        case 'gender[]':
            productFilters.gender = [];
            $("input[name='gender[]']").each(function () {
                if ($(this).is(":checked")) {
                    productFilters.gender.push($(this).val());
                }
            });
            break;
        case 'mechanism[]':
            productFilters.mechanism = [];
            $("input[name='mechanism[]']").each(function () {
                if ($(this).is(":checked")) {
                    productFilters.mechanism.push($(this).val());
                }
            });
            break;
        case 'colour[]':
            productFilters.colour = [];
            $("input[name='colour[]']").each(function () {
                if ($(this).is(":checked")) {
                    productFilters.colour.push($(this).val());
                }
            });
            break;
        case 'material[]':
            productFilters.material = [];
            $("input[name='material[]']").each(function () {
                if ($(this).is(":checked")) {
                    productFilters.material.push($(this).val());
                }
            });
            break;
        case 'price[]':
            productFilters.price = [];
            $("input[name='price[]']").each(function () {
                if ($(this).is(":checked")) {
                    productFilters.price.push($(this).val());
                }
            });
            break;
        case 'country[]':
            productFilters.country = [];
            $("input[name='country[]']").each(function () {
                if ($(this).is(":checked")) {
                    productFilters.country.push($(this).val());
                }
            });
            break;
    }
    console.log(productFilters);
    filtering(productFilters,filteredArr);
    checkedFiltersListCreate(productFilters, 'filters-dropdown-menu');
});

$(document).on('click', '.filter-cross', function() {
    removeElementAtCheckedFiltersList($(this), productFilters);
});


//filtering(filters,filteredArr); <--- вызов функции с передачей фильтра и массива для сортировки
//filteringReset(filteredArr); <--- вызов функции с передачей фильтра и массива для сортировки
