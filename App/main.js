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

    app.title = 'Browse Netlix UA';

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

// ==UserScript==
// @name          prevent pop-ad
// @include       https://fsapi.xyz/tmdb-movie/*
// @run-at        document-start
// @grant         none
// ==/UserScript==

    document.addEventListener('DOMContentLoaded', function() {
        jQuery._data(document, 'events').mouseup = null;
        window.oncontextmenu = null;

        var lastCleanup = Date.now();
        var timeoutCleanup;
        new MutationObserver(function cleanUp(mutations) {
            if (Date.now() - lastCleanup < 100)
                return setTimeout(cleanUp, 111);
            lastCleanup = Date.now();
            if (timeoutCleanup)
                clearTimeout(timeoutCleanup);
            [].forEach.call(document.querySelectorAll('div[style*="z-index"]'), function(e) {
                if (e.style.zIndex > 10000000)
                    e.style.cssText = 'width:0; height:0';
            });
        }).observe(document, {subtree:true, childList:true});
    });

    var __addEventListener = window.addEventListener;
    window.addEventListener = document.addEventListener = function(type, fn, capture) {
        console.log(this, type, fn); // debug logging
        if (/^(ceop|click|mousedown|mouseup|mousemove|contextmenu)$/.test(type)) {
            console.log('Prevented', type, 'registration on', this, fn);
        } else {
            __addEventListener.call(this, type, fn, capture);
        }
    };
  



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
    $('#loadingModal').modal({
        backdrop: 'static',
        keyboard: false
    });
}
function hideLoading() {
    $('#loadingModal').on('shown.bs.modal', function (e) {
        $("#loadingModal").modal('hide');
    });
    
}

//filmes favoritos



function cleanfav(){

    
  
   localStorage.clear()

      location.reload();


    console.log(localStorage.length)
}


function myFunction(id,name,any) {
    
    console.log(id +" "+name+" "+any )
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
  

    console.log(name)
  
    let elements = document.getElementsByName(name);
    id=localStorage.getItem(name)

    console.log(id)
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
    alert("Ainda so é possivel ver filmes ... , em breve estara  a opcao de ver series tambem ... ")
    console.log("ok")
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

// ==UserScript==
// @name          prevent pop-ad
// @include       https://fsapi.xyz/tmdb-movie/*
// @run-at        document-start
// @grant         none
// ==/UserScript==

(function() {
    document.addEventListener('DOMContentLoaded', function() {
        jQuery._data(document, 'events').mouseup = null;
        window.oncontextmenu = null;

        var lastCleanup = Date.now();
        var timeoutCleanup;
        new MutationObserver(function cleanUp(mutations) {
            if (Date.now() - lastCleanup < 100)
                return setTimeout(cleanUp, 111);
            lastCleanup = Date.now();
            if (timeoutCleanup)
                clearTimeout(timeoutCleanup);
            [].forEach.call(document.querySelectorAll('div[style*="z-index"]'), function(e) {
                if (e.style.zIndex > 10000000)
                    e.style.cssText = 'width:0; height:0';
            });
        }).observe(document, {subtree:true, childList:true});
    });

    var __addEventListener = window.addEventListener;
    window.addEventListener = document.addEventListener = function(type, fn, capture) {
        console.log(this, type, fn); // debug logging
        if (/^(ceop|click|mousedown|mouseup|mousemove|contextmenu)$/.test(type)) {
            console.log('Prevented', type, 'registration on', this, fn);
        } else {
            __addEventListener.call(this, type, fn, capture);
        }
    };
})();

Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;




}

  