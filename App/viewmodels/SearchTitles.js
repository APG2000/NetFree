
define(['durandal/app'], function (app) {
    var vm = function () {

        // Variáveis locais
        var self = this;
        self.baseUri = ko.observable('   https://api.themoviedb.org/3/search/multi?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&query=');

        self.displayName = 'Search Titles';
        self.error = ko.observable('');
        self.notFound = ko.observableArray(['No title was found.', 'More details:']);

        self.records = ko.observableArray([]);

        self.query = ko.observable();

        self.first = ko.observable(true);
        
        console.clear()
        getTitles = function () {
            var composedUrl = self.baseUri() + self.query()+"&page=1&include_adult=true";
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.first(false);
                if (data.length != 0) {
  
                   
                    for (var i in data.results) {
                        
                        if (!data.results[i].name) {
                            delete Object.assign(data.results[i], {'name': data.results[i].title})['title'];
                          }

                        if(!data.results[i].poster_path){
                            delete Object.assign(data.results[i], {'poster_path': data.results[i].profile_path})['profile_path'];
                            delete Object.assign(data.results[i], {'overview': data.results[i].popularity+" range"})['popularity'];

                             
                        }
                        //popularity
                      }
                    

                      self.records(data.results)
                     // console.clear()


                      for (var i in data.results) {


                        if(self.records()[i].media_type=="person"){


                             var elem=document.getElementById("ic"+data.results[i].id)
                             var elems=document.getElementById("ip"+data.results[i].id)
                             elem.style.display="none"
                             elems.style.display="none"

                           
                        }
                        //popularity
                      }

                    hideLoading();
                    showfav()
                    
                }
            });

          
        }

      
       
      
        self.activate = function () {
           self.first(true);
         
        }

    };

    return vm
});