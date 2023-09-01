menuListArray = ["Pizza de manteiga",
                 "pizza de pão de queijo",
				 "pizza de yakult",
				 "pizza de salgadinho"
                ];

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="images/pizzaImg.png"/>'  
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for (let i = 0; i < menuListArray.length; i++) {
htmldata = htmldata + imgtags + menuListArray[i]+"<br>";
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function getMenu(){
htmldata="";
 menuListArray.sort(); 
for (let i = 0; i < menuListArray.length; i++) {
htmldata = htmldata + menuListArray[i]+"<br>";	
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);

document.getElementById("addItem").value="";
addItem();
}
