
var humbuger = document.querySelector('.humbuger-menu');
var link = document.querySelector('.links-container');
var bar = document.querySelector('.bars');


bar.addEventListener('click',function(){
    let svg = bar.querySelector('svg');
    if(svg.classList.contains("fa-bars")){
        svg.classList.replace('fa-bars',"fa-times")
    }
    else{
        svg.classList.replace('fa-times',"fa-bars")
    }
link.classList.toggle('effect')

})


// var humbuger = document.querySelector('.menu');
// var link = document.querySelector('.links-container');
// var closedTag_ = document.querySelector('.times_');

// humbuger.addEventListener('click',function(){
//     humbuger.classList.add('hide');
//     closedTag_.style.display='block';
//     link.classList.add('effect');
// })
// closedTag_.addEventListener('click',function(){
//     humbuger.classList.remove('hide');
//     closedTag_.style.display='none';
//     link.classList.remove('effect');
// })


// document.querySelector('.humbuger-menu').onclick=()=>{
//     document.querySelector('.links-container').classList.toggle('effect')
// }
// // document.querySelector('.closedTag_').onclick=()=>{
// //     document.querySelector('.links-container').classList.toggle('effect')
// // }

// humbuger.addEventListener('click',function(){
//     link.classList.remove('hide');
//     bar.classList.add('hide');
//     closedTag_.classList.remove('hide');
    

// })
// closedTag_.addEventListener('click',function(){
//     link.classList.add('hide');
//     bar.classList.remove('hide');
//     closedTag_.classList.add('hide');
// })

// humbuger.onclick = (clicked) => {
//    let target = clicked.target;
//    console.dir(target);
//    if ((target.nodeName == 'svg' && target.parentElement.class == 'bar') 
//    || target.nodeName == 'path' && target.parentElement.parentElement.class == 'bar')
//    {
//     humbuger.classList.replace('fa-times')


//    }
//    if(target.Nodename=='path'&& target.parentElement)||
//    target.nodeName == 'path' && target.parentElement.parentElement.id == 'close'{
//     humbuger.classList.toggle('fa fa-times')

   

