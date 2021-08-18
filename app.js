function updateNumber(product,price,isIncreasing){
    const inputValue = document.getElementById(product+'-number');
    let inputNumber = inputValue.value;
    if(isIncreasing == true){
        inputNumber = parseInt(inputNumber)+1;
    }
    else if(inputNumber > 0){
        inputNumber = parseInt(inputNumber)-1; 
    }
    inputValue.value = inputNumber; //increasin mobile case number
    const money = document.getElementById(product+'-money');  // getting money of case
    // const moneyValue = money.innerText;
    money.innerText = inputNumber * price;  //updating total case money

    //calling subtotal in just one function + - button
    totalAmount();
}
function productAmount(product){
    //debugger;
    const productTotal = parseInt(document.getElementById(product+'-number').value); //getting id with value and parsing Integer
    
    return productTotal;
}
function totalAmount(){
    // const phoneTotal = parseInt(document.getElementById('phone-number').value);
    const phonePrice = productAmount('mobile') * 1219; // calling or returning phone-number values

    // const caseTotal = parseInt(docuemnt.getElementById('case-number').value);
    const casePrice = productAmount('case') * 59; // calling or returning case-number values

    const totalPrice = phonePrice + casePrice; //adding up phone and case price 
    const tax= totalPrice/10;
    const finalTotal = totalPrice + tax;
    console.log(totalPrice);
    document.getElementById('sub-total').innerText = totalPrice;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = finalTotal;
    
}

document.getElementById('mobile-plus').addEventListener('click',function(){
    updateNumber('mobile',1219,true);
    //calling subtotal in each + - button
    //totalAmount(); 
});
document.getElementById('mobile-minus').addEventListener('click',function(){
    updateNumber('mobile',1219,false);
    //calling subtotal in each + - button
    //totalAmount(); 
});
// getting case number and updating number with price
document.getElementById('case-plus').addEventListener('click',function(){
    //debugger;
    updateNumber('case',59,true);  
    //calling subtotal in each + - button
    //totalAmount(); 
});
document.getElementById('case-minus').addEventListener('click',function(){  
    updateNumber('case',59,false); 
    
    //totalAmount(); 
})

