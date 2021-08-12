function handleProduct(isIncrise, product){
    const input = document.getElementById(product + '-input');
    const inputNum = parseInt(input.value);
    let totalProduct = inputNum;
    if (isIncrise === true){
        totalProduct = inputNum + 1;
    }
    if (isIncrise === false && totalProduct > 0){
        totalProduct = inputNum - 1;
    }

    document.getElementById(product + '-input').value = totalProduct;

    let totalPrice = 0;

    if (product === 'firstClass'){
        totalPrice = 150 * totalProduct;
    }
    if (product === 'ecoClass'){
        totalPrice = 100 * totalProduct;
    }
    const total =  totalPrice;
    document.getElementById('subtotal').innerText = total;
    const tax = Math.floor(total * 0.1); //10% tax rate
    document.getElementById('tax').innerText = tax;

    const subtotal = total + tax;
    document.getElementById('total').innerText = subtotal;

}