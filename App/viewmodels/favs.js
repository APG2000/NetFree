define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
 


        var self = this;
   
       // console.clear()
       
        var dict = []
       // var favs = [];
        //console.log(localStorage)
       
     
       
        Object.keys(localStorage).forEach(function(key){
            if(localStorage.getItem(key)!="index.html#favs"){
               

               
                    dict.push({ name: key })
                    
                 
                   
            }
        
           
         });
         self.favs=ko.observableArray([]);
         self.favs(dict)
        
      


         
       
     
    
    };

    
    
  

   

    return vm

 
  
});