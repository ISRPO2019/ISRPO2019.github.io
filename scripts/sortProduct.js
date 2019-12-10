include("./scripts/output.js");


function Merge(arr, index, by, lowToHigh)
{
	var newarr = [];
	var len = arr.length;
    var i = 0, j = 0;
	var l = 0, r = index; // l - left, r - right
	var ls = false;	//ls - left stopped
	var rs = false;	//rs - right stopped
	
	var dataL;
	var dataR;


    if(lowToHigh == true)
    {
        while (i < len)
        {
            if(r < len && l < len)
            {
                if(by == 0)
                {
                    dataL = +arr[l].price;
                    dataR = +arr[r].price;
                }
                else 
                {
                    dataL = arr[l].name;
                    dataR = arr[r].name;
                }
    
                
            }
                    
            if ((r >= len || dataR == null || dataL <= dataR || rs) && !ls)
            {
                newarr[i] = arr[l++];
                
    
                if (l % index == 0)
                {
                    ls = true;
                    if (l != len - 1)
                        l = l + index;
                }
                i++;
            }
            else if ((l >= len || dataL == null || dataL >= dataR || ls) && !rs)
            {
                newarr[i] = arr[r++];
                if (r % index == 0)
                {
                    rs = true;
                    if (r != len - 1)
                        r = r + index;
                }
                i++;
            }
            else if (rs && ls)
            {
                rs = false;
                ls = false;
            }
    
        }
    
    }
    else if(lowToHigh == false)
    {
        while (i < len)
        {
            if(r < len && l < len)
            {
                if(by == 0)
                {
                    dataL = +arr[l].price;
                    dataR = +arr[r].price;
                }
                else 
                {
                    dataL = arr[l].name;
                    dataR = arr[r].name;
                }
            }
                    
            if ((r >= len || dataR == null || dataL >= dataR || rs) && !ls)
            {
                newarr[i] = arr[l++];
                
    
                if (l % index == 0)
                {
                    ls = true;
                    if (l != len - 1)
                        l = l + index;
                }
                i++;
            }
            else if ((l >= len || dataL == null || dataL <= dataR || ls) && !rs)
            {
                newarr[i] = arr[r++];
                if (r % index == 0)
                {
                    rs = true;
                    if (r != len - 1)
                        r = r + index;
                }
                i++;
            }
            else if (rs && ls)
            {
                rs = false;
                ls = false;
            }
    
        }
    }
 	return newarr;
}

function MergeSort(array, by, lowToHigh = true) 
{
	var i = 1;
	var len = array.length;

    if(by == "price")
        by = 0;
    else if(by == "name")
        by = 1;
	while (i < len) 
	{	
		array = Merge(array, i, by, lowToHigh);
		i *= 2;
	}

    cardList(array);//  <====  пример вызова функции вывода элементов
    console.log(array);

	return array;
}

MergeSort(catalog, "price", false);//  <====  пример вызова функции вывода сортировки от большего к меньшему
//MergeSort(catalog, "name");//  <====  пример вызова функции вывода сортировки от мень