function task1 (){
    var n1, n2, res;
    n1 = document.getElementById('field1').value;
    n2 = document.getElementById('field2').value;
    
    
    if ((n1<1) || (n2<1))
    {
    alert("Неккоректный запрос, проверьте чтобы оба значения были положитенльными числами");
    return false;
    }
    
    alert("Ваш запрос выполняется");
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    res = n1 * n2;
    document.getElementById('output').innerHTML = "Итоговая цена: " + res;
    
    }
    
    
