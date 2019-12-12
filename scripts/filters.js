include("./scripts/localStorage.js");

//filteringReset - функция для сброса фильтров
function filteringReset() {
    filteredArr=catalog;
    cardList(filteredArr);
    return filteredArr;
};

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
    cardList(filterArr);
    filteredArr = filterArr;
    return filteredArr;
};


//filtering(filters,filteredArr); <--- вызов функции с передачей фильтра и массива для сортировки
//filteringReset(filteredArr); <--- вызов функции с передачей фильтра и массива для сортировки


