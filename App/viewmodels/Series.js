define(['durandal/app'], function (app) {
    var page = function () {
        this.displayName = 'Bem vindos ao meu projeto!';
//api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'

        self.records = ko.observableArray([]);
        

        self.activate = function () {
            showLoading();

          
            makepopular("tv")
            
            
            hideLoading();

           
            
            
        };


     

       
        self.activate();


    

    
    };

    getDate = function (date) {
        var d = new Date(date);

        return d.getFullYear().pad(4);
    }

 
   
    return page;

});

       

