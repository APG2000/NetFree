define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
 

        var basiurl= "http://192.168.160.58/netflix/api/Titles/"

        var self = this;
        var url=document.URL
       
        console.clear()
       
        var dict = []
       // var favs = [];
        //console.log(localStorage)
       

       
        Object.keys(localStorage).forEach(function(key){
            if(localStorage.getItem(key)!="index.html#favs"){
               

               
                    dict.push({ name: key  })
                    //console.log(key)
                    //dict.push({id:localStorage.getItem(key)})
                   
            }
        
           
         });
      
         self.favs=ko.observableArray([]);
         self.favs(dict)
       
         
      
        
        
        // start ....
        
     
    
    };
  

   
    

    return vm
});