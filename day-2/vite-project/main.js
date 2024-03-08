import './style.css'
import png1 from "./public/1.png"
import png2 from "./public/2.png"
import png3 from "./public/3.png"
import png4 from "./public/4.png"
import png5 from "./public/5.png"



const container = document.querySelector('#app');
container.innerHTML=`
<div class="header">
<header>
<nav>
<div>
Italiano
</div>
<div>
<ul>
<li>Home</li>
<li>Contact</li>
<li>Login</li>

</ul>
</nav>
</div>
</header>
</div>
<div class="slider">
<div class='list'>
<div class="item">
<img src ="${png1}"
</div>
<div class="item">
<img src ="${png2}"
</div>
<div class="item">
<img src ="${png3}"
</div>
<div class="item">
<img src ="${png4}"
</div>
<div class="item">
<img src ="${png5}"
</div>

</div>
</div>


<div class='circle'>
Hey there , we have various styles try from them !
</div>
<div class="content">
<div>
Menu
</div>
<div>
restaurant
</div>
<button> see more </button>

</div>
 <div class= "arrow>

<button id ="prev"> btn  </button>
<button id ="next"> btn  </button>


 </div>








</div>
`;
