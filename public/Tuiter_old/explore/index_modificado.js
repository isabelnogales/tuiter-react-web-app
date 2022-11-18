console.log("hello from javascript")
console.log(jQuery)
const lists=jQuery(".list-group")
console.log(lists)
//lists.remove()

//get me the h1 with id title//
// ES NECESARIO EL H1??)
const title = jQuery ("#title")
//title.remove()
//add title to html //
title.html ("Welcome to Explore Screen")
// accede to css para cambiar los estilos //
title.css({
        //no necesitas comillas porque color es una palabra sola //
        color:"red",
        // necesitas comillas porque son dos palabras separadas por un guion //
        "background-color":"yellow"
    })

//access to the list with id =some_list//
// tambien se puede utilizar el dolar
//const someList =$ ("#some-list");
const someList =jQuery ("#some-list");
//crea una nueva "variable" y la añade
const newItem = jQuery ("<li>Some new line item<li>")
someList.append(newItem)


//----//

const navItems = ["Home","Explore","Notification","Messages","Bookmarks","Lists","Profile","More"]
const navigationSideBar = () => `
<div class="list-group">
    ${
        navItems.map(item => (`
            //para cambiar los emoticonos podemos crear una lista con el nombre de los elementos???
            <a href="home.html" class="list-group-item position-relative fa fa-home"> ${item} </a>            
          `)).join("")
    }  
</div>
<button class="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>
`;


//longer way - reusing what we had
//const navigationSideBar = () => `
//<div class="list-group">
    //<a class="list-group-item position-relative fab fa-twitter"></a>
    //<a href="home.html" class="list-group-item position-relative fa fa-home" > Home </a>
    //<!--span class="position-absolute wd-nudge-up fa fa-home">️Home</span-->
    //<a href="explore.html" class="list-group-item active fa fa-hashtag"> Explore</a>
    //<a href="notification.html" class="list-group-item fa fa-bell "> Notification</a>
    //<a href="messages.html" class="list-group-item fa fa-envelope"> Messages</a>
    //<a href="bookmarks.html" class="list-group-item fa fa-bookmark"> Bookmarks</a>
    //<a href="lists.html" class="list-group-item fa fa-list"> Lists</a>
    // <a href="profile.html" class="list-group-item fa fa-child"> Profile</a>
    //<a href="more.html" class="list-group-item fa fa-dot-circle"> More</a>
//</div>
//<button class="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>
//`;

$('#nav-side-bar').append(navigationSideBar)