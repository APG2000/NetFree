const PAGE_SIZE = 20;
requirejs.config({
    paths: {
        'text': '../vendors/Scripts/text',
        'durandal': '../vendors/Scripts/durandal',
        'plugins': '../vendors/Scripts/durandal/plugins',
        'transitions': '../vendors/Scripts/durandal/transitions',
        'bootstrap': '../vendors/Scripts/bootstrap.bundle'
    },
    "shim": {
        "bootstrap": ["jquery"]
    }
});

define('jquery', function () { return jQuery; });
define('knockout', ko);

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap'], function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'NETFREE';

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        //app.setRoot('viewmodels/shell', 'entrance');
        app.setRoot('viewmodels/shell');
    });
});





// Specific functions to access the IMDb API data
const imdb_api_url = 'https://sg.media-imdb.com/suggests/';
const imdb_url = 'https://www.imdb.com/';
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
function getIMDbURL(name) {
    name = getIMDbSlug(name);
    return imdb_api_url + name[0] + "/" + name + ".json";
}


function getIMDbSlug(title) {
    return title.trim().normalize("NFKD").replaceAll(/[^\-\w\s]/gi, '').trim().replaceAll(' ', '-').toLowerCase();
}

function ajaxHelper(uri, method, data) {
    return $.ajax({
        type: method,
        url: uri,
        dataType: 'json',
        contentType: 'application/json',
        data: data ? JSON.stringify(data) : null,
        error: function (jqXHR, textStatus, errorThrown) {
           // console.log("AJAX Call[" + uri + "] Fail...");
        }
    });
};

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function getIMDbIndex(data, name) {
    try {

        if (data.d.length == 0) return;

    } catch (err) {
      //  console.error("getIMDbImage ERROR: ", err);
        return;
    }


    if (data.d.length > 1 && name != null) {

        index = data.d.findIndex(i => i.l.toLowerCase() === name.toLowerCase());

        if (index == -1)
            return;

    }
    else
        index = 0;

    return index;
}

function getIMDbImage(data, index) {

    return data.d[index].i[0];
}

function showLoading() {
    console.log('show   ');
    $('#loadingModals').modal('show');
    //$('#loadingModal').modal({
      //  backdrop: 'static',
       // keyboard: false
    //});
}
function hideLoading() {
    $('#loadingModals').on('shown.bs.modal', function (e) {
        $("#loadingModals").modal('hide');
    });
    
}

//filmes favoritos



function cleanfav(){

    
  
   localStorage.clear()

      location.reload();


    console.log(localStorage.length)
}


function myFunction(id,name,any) {
    

   var icon=document.getElementById("ic"+id)
   
   if(localStorage.getItem(name)==null){
       console.log("Adicionando a favorito")
       icon.style.color="purple"
       localStorage.setItem(name , id+'/'+any);


     
   }
   else if(localStorage.getItem(name)!=null){
         localStorage.removeItem(name);
       console.log("Removido do Favorito ")
       icon.style.color="white"
   }
    

  
    }
    function showfav(){
        console.clear()
     

        for (var i = 0; i < localStorage.length; i++){

            var id=localStorage.getItem(localStorage.key(i))
            var fixid=id.split("/")[0]
            var icon=document.getElementById("ic"+fixid)
            
            //console.log(icon)
            if(icon!=null){
                icon.style.color="purple"
            }
          
           
        }

    }

function remove(name){

    localStorage.removeItem(name);

    location.reload();
}

function favinfo(name){
  

    let elements = document.getElementsByName(name);
    id=localStorage.getItem(name)
    var fixid=id.split("/")[0]
    var type=id.split("/")[1]
    elements.href="#TitleDetails/"+fixid+"/"+type

    window.location = elements.href;
}


function cardhide(id){
    var nothide=id
    for(var  i in this.records()){
        if("card"+this.records()[i].id==nothide){
        }
        else{
            var elem=document.getElementById("card"+this.records()[i].id)
                elem.style.opacity=".4"
            
            //console.log(this.records()[i].id)
        }
       
    }



}

function verfilme(){
  
    var elem=document.getElementById("showfilme")
    elem.style.display="block"

}
function cardshow(id){
    var nothide=id
    for(var  i in this.records()){

            var elem=document.getElementById("card"+this.records()[i].id)
            elem.style.opacity=""   
    }
}

Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}

function incrementValue(any)
{
    let totalpade;
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    
    
    value++;
    document.getElementById('number').value = value;
    let link
    if(any=="tv"){
    link='https://api.themoviedb.org/3/tv/popular?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page='+value
    }
    if(any!="tv"){
        link='https://api.themoviedb.org/3/movie/popular?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page='+value
    }
    ajaxHelper(link, 'GET').done(function (data) {
                totalpade=data.total_pages
                hideLoading();
                self.records(data.results);
                

            });


}

function makepopular(any){
   
        ajaxHelper('https://api.themoviedb.org/3/'+any+'/popular?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1', 'GET').done(function (data) {
        

        
            
        hideLoading();
        self.records(data.results);
        

    });
            
          
}

function showserie(id){
    var episodes=document.getElementById("episodes").value
    var seasons=document.getElementById("seasons").value
    var linkserie=document.getElementById("verfilme")
    document.getElementById("verfilmebtn").style.display="none"
    if(episodes && seasons){
        console.log(episodes+ " " + seasons + " "+ id)
        var link= "https://www.2embed.ru/embed/tmdb/tv?id="+id+"&s="+seasons+"&e="+episodes
        linkserie.src=link
        
        var elem=document.getElementById("showfilme")
        elem.style.display="block"

     
    }
  
   
}


function getreviews(id,any){
    
    var link="https://api.themoviedb.org/3/"+any+"/"+id+"/reviews?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1"
  
    self.resultados=ko.observableArray('');
    self.pics=ko.observableArray('');
    
    $.ajax({url: link, success: function(data){
       
       
        for (var i in data.results) {
            
            if (!data.results[i].author_details.avatar_path) {
                delete Object.assign(data.results[i], {'avatar_path': data.results[i].author_details.avatar_path})[''];
              
            }
            if (data.results[i].author_details.avatar_path) {
                delete Object.assign(data.results[i], {'avatar_path': data.results[i].author_details.avatar_path})[''];
              
            }
            
            if(data.results[i].avatar_path!=null){
                data.results[i].avatar_path=data.results[i].avatar_path.substring(1)
                
                if(!data.results[i].avatar_path.includes("https://www.gravatar.com/")){
                    data.results[i].avatar_path='https://www.gravatar.com/avatar/'+ data.results[i].avatar_path
                }
                
            }
           
         
        }
        self.resultados(data.results)
       
        //console.log(data.results[1].avatar_path.substring(1))
      
      }});
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function submiteform(){

    var nome=document.getElementById("fullname").value
    var email=document.getElementById("email").value

    if(validateEmail(email)){
        var form=document.getElementById("algin-form")
        form.target="_blank"
        form.action="https://formsubmit.co/80c091cdbb3b3b2aafea1fe888b46d2d"
        form.method="POST"
    }
    
        
      
           
  
      
    
   
    
  


}

//prevent-

!function() {

    const input = prompt("What's your name?");
   
    if(input=="dovas"){
            alert("Debug allowed , Dovas press de key z to allow ")
            return
        }
   
	function detectDevTool(allow) {
  	if(isNaN(+allow)) allow = 100;
    var start = +new Date();
    debugger;
    var end = +new Date();
    if(isNaN(start) || isNaN(end) || end - start > allow) {
    
      document.write('');
    }
  }
  if(window.attachEvent) {
  	if (document.readyState === "complete" || document.readyState === "interactive") {
    	detectDevTool();
      window.attachEvent('onresize', detectDevTool);
      window.attachEvent('onmousemove', detectDevTool);
      window.attachEvent('onfocus', detectDevTool);
      window.attachEvent('onblur', detectDevTool);
    } else {
    	setTimeout(argument.callee, 0);
    }
  } else {
  	window.addEventListener('load', detectDevTool);
    window.addEventListener('resize', detectDevTool);
    window.addEventListener('mousemove', detectDevTool);
    window.addEventListener('focus', detectDevTool);
    window.addEventListener('blur', detectDevTool);
  }
}();



document.addEventListener('keydown', function() {
  
    if(event.keyCode==90){
        window.value=1; 
        console.log("Dev mode allowed")

     
    }


    
   
    if (event.keyCode == 123) {
    
        
         if(window.value!=1){
            console.clear()
            for (let i =0; i < 5; i++) {
                document.write(``)
            }
         }
     
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
       
        if(window.value!=1){
            console.clear()
            for (let i =0; i < 5; i++) {
               document.write(``)
           }
            }
   
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
      
        if(window.value!=1){
            console.clear()
            for (let i =0; i < 5; i++) {
               document.write(``)
           }
            }
   
      return false;
    }
  }, false);
  
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    }, false);
    if(window.value!=1){
        console.clear()
        for (let i =0; i < 5; i++) {
           document.write(``)
       }
        }

  } else {
    document.attachEvent('oncontextmenu', function() {
      
      window.event.returnValue = false;
    });
    if(window.value!=1){
        console.clear()
        for (let i =0; i < 5; i++) {
           document.write(``)
       }
        }

  }
  