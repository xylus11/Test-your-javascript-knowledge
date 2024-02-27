const container = document.getElementById("container");
const namee = document.getElementById("namee");
const inp = document.getElementById("text");
const item = document.getElementById('nigh-mode');
const move = document.querySelector('.night-mode')
const ins  = document.querySelector(".movable-item");
// console.log(item.value);

inp.addEventListener('input', (e) => {
    namee.innerHTML = `${e.target.value}`;
});  

function handleChange() {
    // Get the input element by ID
    
    // Get the value of the input element
    const inputValue = inp.value;
    
    // Log the input value to the console
    console.log("Submitted name:", inputValue);
}

// function nightmode(e)
// {
//     let 
// }
// item.addEventListener('click',nightmode);

function moved(e)
{ console.log("clikc"); 
console.log("click");
if (ins.classList.contains('movedd')) {
    // If the element is already moved, remove the 'movedd' class
    ins.classList.remove('movedd');
    container.classList.remove('bg-night');

} else {
    // If the element is not moved, add the 'movedd' class
    ins.classList.add('movedd');
    container.classList.add('bg-night');
}
e.preventDefault();

}
move.addEventListener('click',moved)

// Add an event listener to the button to call the handleChange function when clicked
const button = document.getElementById("Button");
button.addEventListener('click', handleChange);
