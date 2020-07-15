const btnClick=document.getElementById('btn');

//add EventListener
btnClick.addEventListener('click', () => {
    searchPeople();
})


const searchPeople=async RandomPeople => {
    const fetchData=await fetch('./data.json');
    const states=await fetchData.json();
    const AnyOne=parseInt(Math.random()*states.length)
    //console.log(states[AnyOne])
    document.getElementById('num').innerHTML='#EMP '+states[AnyOne].no;
    document.getElementById('first').innerHTML=states[AnyOne].name;
    document.getElementById('phone').innerHTML=states[AnyOne].Number;
    document.getElementById('email').innerHTML=states[AnyOne].Email;
}
