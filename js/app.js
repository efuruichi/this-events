//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navElem = document.getElementsByClassName("navi");

for(var i = 0; i<navElem.length; i++){
 
  navElem[i].addEventListener("click", showInner);

  }

function showInner(){
  
  var innerElem = this.querySelectorAll('.inner')[0];
  if(innerElem.style.display === 'block'){
    innerElem.style.display = 'none';
  }else{
    innerElem.style.display = 'block';
  }

}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var nameElem = document.getElementsByClassName("name");
for (var i = 0; i<nameElem.length; i++){
  nameElem[i].addEventListener("click", showMenu);
 
}

function showMenu(){
  var menuElem = this.querySelectorAll(".menu")[0];
  if(menuElem.style.display === "block"){
    menuElem.style.display = "none";
  }else{
    menuElem.style.display = "block";
  }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/
