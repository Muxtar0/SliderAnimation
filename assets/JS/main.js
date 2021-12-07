// ******************* HAMBURGER MENU

// ************ ICON
const hamburger_menu_icon = document.querySelector('.hamburger--elastic');


hamburger_menu_icon.addEventListener('click' , (e) => {
    hamburger_menu_icon.classList.toggle('is-active')
   
})
///////////////////////////////////////

// SERCH CONTAINER
const Nav_Searh = document.querySelector('.Nav-Searh');
const Search_Container = document.querySelector('.Search-Container');
const Close_Search_Container = document.querySelector('.Close-Search-Container');


Nav_Searh.addEventListener('click' , (e) => {
    Search_Container.classList.toggle('active');
})
Close_Search_Container.addEventListener('click' , (e) => {
    Search_Container.classList.toggle('active');
    
    Search_Input = document.getElementById('btn').value = null;

    
    
}) 


////////////////////////////////////////////////////
// PHONE ANIMATON

const Nav_Phone = document.querySelector('.Nav-Phone');
const Phone_Icon = document.querySelector('.Phone-Icon');
Nav_Phone.addEventListener('mousemove' , (e) => {
    Phone_Icon.classList.add('active');
})
Nav_Phone.addEventListener('mouseout' , (e) => {
    Phone_Icon.classList.remove('active');
})

////////////////////////////// 
/// SLIDEEEE
const Main_Slide = document.getElementById('Main-Slide');
const Main_Slide_Content = document.querySelectorAll('.Slide-Col');
const Slide_Transition_Text_p = document.querySelectorAll('.Slide-Transition-Text p');
const Slide_Col = document.querySelectorAll('.Slide-Col');

var content_lenght = Main_Slide_Content.length;
var cost = 0;
var slide = 100;
var index = 0;

time();
Main_Slide.addEventListener('mousemove' , ClearInterval);
Main_Slide.addEventListener('mouseout' , time);
function slidefun(){
    console.log(-cost * slide);
    Main_Slide.style.transform = 'translateX('+(-cost * slide )+ 'vw)'
    cost++;
    if(cost==content_lenght){
        cost=0;
    }
    for(var i=0 ; i < content_lenght ; i++){
        Slide_Transition_Text_p[i].classList.remove('active');
        Slide_Col[i].classList.remove('active');
    }
    Slide_Transition_Text_p[index].classList.add('active');
    Slide_Col[index].classList.add('active');
    index++;
    if(index == content_lenght){
        index=0;
    }
    
}
function ClearInterval (){
    clearInterval(intervaltime);
}
function time(){
        intervaltime = setInterval(slidefun , 2000);
}

Slide_Transition_Text_p[0].addEventListener('click' , (e) => {
    cost = 0;
    index = 0;
    Slide_Transition_Text_p[index].classList.add('active');
    Main_Slide.style.transform = 'translateX('+(-cost * slide )+ 'vw)';
    Slide_Transition_Text_p[1].classList.remove('active');
    Slide_Transition_Text_p[2].classList.remove('active');
    for(var i=0 ; i < content_lenght ; i++){
        Slide_Col[i].classList.remove('active');
    }
    Slide_Col[index].classList.add('active');


})
Slide_Transition_Text_p[1].addEventListener('click' , (e) => {
    cost = 1;
    index = 1;
    Slide_Transition_Text_p[index].classList.add('active');
    Main_Slide.style.transform = 'translateX('+(-cost * slide )+ 'vw)';
    Slide_Transition_Text_p[2].classList.remove('active');
    Slide_Transition_Text_p[0].classList.remove('active');
    for(var i=0 ; i < content_lenght ; i++){
        Slide_Col[i].classList.remove('active');
    }
    Slide_Col[index].classList.add('active');

})
Slide_Transition_Text_p[2].addEventListener('click' , (e) => {
    cost = 2;
    index = 2;
    Slide_Transition_Text_p[index].classList.add('active');
    Main_Slide.style.transform = 'translateX('+(-cost * slide )+ 'vw)';
    Slide_Transition_Text_p[1].classList.remove('active');
    Slide_Transition_Text_p[0].classList.remove('active');
    for(var i=0 ; i < content_lenght ; i++){
        Slide_Col[i].classList.remove('active');
    }
    Slide_Col[index].classList.add('active');

})


