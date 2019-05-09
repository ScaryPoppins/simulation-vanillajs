const budgetTotal = [];
//document.querySelector('ul').innerHTML += '<li>' + "$" + [budgetTotal] + '</li>';
// function getSum(total, budgetTotal) {
//     return total + Math.round(budgetTotal);
// }
//    for (var i = 0; i < budgetTotal.length; i++) {
//         total = total + budgetTotal[i].Amount;
//       return total;

//    }
//    console.log(total);

document.getElementById('submit').addEventListener('click', function(){
    event.preventDefault();
    console.log('working')
    event.stopPropagation;
    // let arr = document.createElement([])
    // document.querySelector('ul').innerHTML += '<li>' + arr + '</li>';
    let inputText = document.getElementsByTagName('input')[0].value
    // let li = document.createElement('li');
    // li.innerText = inputText;
    // document.querySelector('ul').append(li);
    //document.querySelector('ul').innerHTML += '<li>' + inputText + '</li>';
    let inputText2 = document.getElementsByTagName('input')[1].value
    // let li2 = document.createElement('li');
    // li.innerText = inputText2;
    // document.querySelector('ul').append(li2);
    //document.querySelector('ul').innerHTML += '<li>' + "$" + [inputText2] + '</li>';
    let trash_can = document.createElement('trash').src="./assets/trash_can.svg";
    // document.querySelector('ul').innerHTML += '<li>' + trash_can + '</li>';
    var iHateYou = [inputText, "$" + inputText2,trash_can]
   


    //console.log(budgetTotal);

    // for (var i = 0; i < budgetTotal.length; i++) {
    //     total = total + budgetTotal[i].Amount;
    //     // return total;
    //     console.log(total);
    //     return total;
    //   }

    //   return total;
  budgetTotal.push(inputText2);

  totaleded = [inputText2 + budgetTotal]
  console.log(totaleded)

    var total = budgetTotal.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
  
    document.querySelector('ul').innerHTML += '<li>' + iHateYou + '</li>';
    //document.querySelector('figure').innerHTML += budgetTotal;

    document.querySelector('figure').innerHTML = budgetTotal;

    // budgetTotal.split(',').map(function(i){
    //     return parseInt(i, 10);
    // })}
 
    // console.log(parseInt)
    // parseInt.reduce((accumulator, currentValue) => {
    //     return accumulator + currentValue;
    // })   
    console.log(parseInt)


    console.log(budgetTotal > 1)
    console.log(total)
    console.log(totaled)
    console.log(budgetTotal)
})

