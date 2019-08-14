//Abdullah Arif
//create dynamic html pages
window.onload() = createCommonElements; //Dynamically create page on load
function createCommonElements(){ //create common elements
	 loadCommonHead();
	 loadDynamicNavbar(); //get variable values
	 loadCommonFooter();
}

function loadCommonHead(){
	var commonHeadText = `<link href="https://aarif123456.github.io/HogwartsLibrary/styles/bootstrap.css" rel="stylesheet" type="text/css" media="all">
        <link href="https://aarif123456.github.io/HogwartsLibrary/styles/main.css" rel="stylesheet" type="text/css" media="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="Hogwarts stuff" />
        <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900' rel='stylesheet' type='text/css'>
        <!--<link href='https://fonts.googleapis.com/css?family=Alice' rel='stylesheet' type='text/css'>-->
        <script src="https://aarif123456.github.io/HogwartsLibrary/scripts/jquery/jquery.min.js"></script>
        <script src="https://aarif123456.github.io/HogwartsLibrary/scripts/jquery/jquery.easydropdown.js"></script>
        <link rel="stylesheet" href="https://aarif123456.github.io/HogwartsLibrary/styles/swipebox.css">
        <!------ Light Box ------>
        <script src="https://aarif123456.github.io/HogwartsLibrary/scripts/jquery/jquery.swipebox.min.js"></script> 
        <script type="text/javascript">
            jQuery(function($) {
            	$(".swipebox").swipebox();
            });
        </script>
        <!------ Eng Light Box ------>
        <script type="text/javascript" src="https://aarif123456.github.io/HogwartsLibrary/scripts/imported/easing.js"></script>
        <script type="text/javascript">
            jQuery(document).ready(function($) {
            	$(".scroll").click(function(event){		
            		event.preventDefault();
            		$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
            	});
            });
        </script>`;
    document.getElementById('commonHead').innerHTML = commonHeadText;
}
function loadCommonFooter(){ //load common footer -this makes it easier to make changes 
	footerText = `<div class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="subsc">
                </div>
                <div class="footer-bottom">
                    <div class="footer-nav">
                        <ul>
                            <li><a href="https://aarif123456.github.io/HogwartsLibrary/">home </a></li>
                            <li><a href="https://aarif123456.github.io/HogwartsLibrary/docs/home/contact">contact </a></li>
                            <li><a href="about.html">about</a></li>
                            <div class="clearfix"> </div>
                        </ul>
                    </div>
                    <p>Copyrights © 2015 4useri All rights reserved | Template by <a href="https://w3layouts.com/">W3layouts</a></p>
                </div>
            </div>
        </div>`;
    document.getElementById('commonFooter').innerHTML = footerText;    
}

function loadDynamicNavbar(){ //dynamically create navbar using page number 
    var xmlhttp = new XMLHttpRequest();
    var pageCategory =document.getElementById("pageCategory").value.trim();
    var pageNum =document.getElementById("pageNum").value.trim();
    var url="https://arif115.myweb.cs.uwindsor.ca/60334/projects/loadNavbarHeader";
    xmlhttp.open('POST', url, true);
    xmlhttp.onreadystatechange = function() {
    //call function to load the home or custom
      if (this.readyState == 4 && this.status == 200) {
      	if(this.responseText.trim() != "not logged in"){
      		createNavbarHeader(this.responseText);
      	}
      	else{
      		//if we arn't logged in and are not on home category pages then go to sign in page
      		if(!(pageCategory=="home" ||(pageCategory =="catalogue" && pageNum=0 )) {
      			window.location = "https://aarif123456.github.io/HogwartsLibrary/docs/catalogue/signin";
      		}
      	}
      }
    }
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.withCredentials = true;
    xmlhttp.send(); 
    //the function will render a defaultNavbar with a lower priority
    createNavbarHeader(""); 
    
                      
}

function createHomeNavbar(){
	pageNum = document.getElementById("pageNum").value;
	pageTitle = ['Browse catalogue', 'House Fines', 'Reading List','About Us','Contact Us','Hours'] ;
	pageList = [0,0,3,0,0]; //holds the number of page items
	pageLinks = ['search','houseFine','readingList', 'about','contact','hours'];//link to the given page
	pageListTitle = [[],[],['By book category','By student majors', 'All Time'],[],[]]; //sub page title
	pageListLinks =[[],[],['','',''],[],[]];

    //default menu on home pages                 
    var defaultHomeMenu =`<div class="userMenu">
                        <a class="toggleMenu" href="">Menu</a>
                        <ul class="nav">`;
    for(int i=0;i<pageTitle.length ;i++){ 
    	defaultHomeMenu += '<li class="'; //each page is part of the list
    	defaultHomeMenu += (i==0)?"browse ":""; //browse catalogue is special 
    	if(pageNum == i){
    		defaultHomeMenu += "active "; //if on the page make it shine 
    	}
    	// add the link to the page
    	defaultHomeMenu += 'nav-item"><a href="https://aarif123456.github.io/HogwartsLibrary/docs/'; 
    	defaultHomeMenu += (i==0)?'catalogue/':'home/'; //catalogue links to the catalogue pages
    	defaultHomeMenu += pageLinks[i] + '" class="';
    	//if page has sub menu make it root
    	defaultHomeMenu +=(pageList[i]>0)?('root>'+pageTitle +'</a> <ul class="drdw">'):"nav-link>";
    	for(int j=0;j<pageList[i];j++){
    		defaultHomeMenu += '<li><a href="https://aarif123456.github.io/HogwartsLibrary/docs/home/charts/';
    		defaultHomeMenu += pageListLinks[i][j];
    		defaultHomeMenu += '>"' +pageListTitle[i][j] +'</a></li>'; 
    	}
    	defaultHomeMenu +=(pageList[i]>0)?('</ul>'):(pageTitle +"</a>");
    	defaultHomeMenu +='</li>'; //end option
    }          
    //finish default user Menu          
    defaultHomeMenu += `</ul>                       
                        <script type="text/javascript" src="https://aarif123456.github.io/HogwartsLibrary/scripts/imported/nav.js"></script>
                    </div>
                </div>`;
    return defaultHomeMenu ;
}

function createNavbarHeader(navbarText){
	//all navbar start the same
	var navbarStart = `<div class="container">
                    <div class="head-bann">
                        <div class="logo">
                            <a href="https://aarif123456.github.io/HogwartsLibrary/"><img src="https://aarif123456.github.io/HogwartsLibrary/resources/images/logo.png" class="img-responsive" alt="Hogwarts logo"></a>
                        </div>`;                  
    if(navBarText.trim()==""){ //if not logged in use default 
    	navbarText = `
			<div class="head-part">
		        <ul>
		            <li><a href="https://aarif123456.github.io/HogwartsLibrary/docs/home/register">Signup</a></li>
		            <li><a href="https://aarif123456.github.io/HogwartsLibrary/docs/catalogue/signin">Login</a></li>
		            <div class="clearfix"> </div>
		        </ul>
		    </div>
		    <div class="clearfix"> </div>
		</div>`;
	}
    renderNavbar(navbarStart +navbarText);

}

function renderNavbar(navBarText){
	if(document.getElementById("pageCategory").value.trim()=="home"){
		document.getElementById("dynamicNavbar").innerHTML = navBarText+createHomeNavbar();
	}
	else{ //if in catalogue use custom options
		var xmlhttp = new XMLHttpRequest();
		var url="https://arif115.myweb.cs.uwindsor.ca/60334/projects/loadNavbarMenu";
		xmlhttp.open('POST', url, true);
		xmlhttp.onreadystatechange = function() {
		//call function to load the home or custom
		  if (this.readyState == 4 && this.status == 200) {
		  	if(this.responseText.trim()!="Invalid User"){
		  		document.getElementById("dynamicNavbar").innerHTML = navBarText +this.responseText;
		  	}
		  	else{
		  		window.location = "https://aarif123456.github.io/HogwartsLibrary/docs/catalogue/signin";
		  	}
		  }
		}
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.withCredentials = true;
		xmlhttp.send(); 
	}
}