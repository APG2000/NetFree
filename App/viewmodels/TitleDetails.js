define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');

        var self = this;
        self.baseUri = ko.observable('http://192.168.160.58/netflix/api/titles/');

        self.displayName = 'Title Details';
        self.error = ko.observable('');
        self.passingMessage = ko.observable('');

        self.actors = ko.observableArray('');
        self.categories = ko.observableArray('');
        self.categoria = ko.observableArray('');
        self.countries = ko.observableArray('');
        self.dateAdded = ko.observable('');
        self.description = ko.observable('');
        self.directors = ko.observableArray('');
        self.duration = ko.observable('');
        self.id = ko.observable('');
        self.name = ko.observable('');
        self.rating = ko.observable('');
        self.releaseYear = ko.observable('');
        self.overview=ko.observableArray('')
        self.type = ko.observable('');
        self.videos= ko.observable('');
        self.keys= ko.observable('');
        self.tipo= ko.observable('');
        self.getDateAdded = () => {
           // console.log('date added', self.dateAdded());
            if (self.dateAdded() == null) return '';
            var d = new Date(self.dateAdded());

            var day = d.getDay();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            return day.pad(2) + '/' + month.pad(2) + '/' + year.pad(4);
        }


        self.activate = function (id) {
            console.log('CALL: getTitle...');
            var composedUri = self.baseUri() + id;
            
           
            
         
         
            console.clear()
            console.log(" tentando com o api da tmdb...")
            let location=window.location.href.split("/")

            let tmdbid
            let type
            if(location[location.length -1]=="tv"){
                tmdbid=location[location.length -2]
                type=location[location.length -1]
            }
            else if(location[location.length -1]=="movie"){
                tmdbid=location[location.length -2]
                type=location[location.length -1]
            }
            else {
                tmdbid=location[location.length -1]
                type="movie"}


                self.id (tmdbid)
          
            const api_movie_url = "https://api.themoviedb.org/3/"+type+"/"+tmdbid+"?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US";
            



            $.ajax({url: api_movie_url, success: function(data){
                self.rating(data.vote_average)
                self.overview(data.overview)
                if(type=="tv"){
                    self.tipo="tv"

                    //series em implementacao api ex:( https://fsapi.xyz/tv-tmdb/60735-5-1) tmdbid-temporada-episodio
                     self.name(data.name);
                     self.dateAdded(data.first_air_date);
                     self.duration(data.episode_run_time+" mim");
                     tmdbImage(data.name,"tv", false);                        
                    
                    console.clear()
                   

              
                   // document.getElementById("verfilmebtn").style.display="none"
                }

                if(type=="movie"){
                self.tipo="movie"
                self.name(data.title);
                self.dateAdded(data.release_date);
                tmdbImage(data.original_title,"movie", false);
             
                
                self.duration(data.runtime+" mim");
             
                self.categoria(data.genres)
                }
               
                var videoapi="https://api.themoviedb.org/3/"+type+"/"+tmdbid+"/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US"



                    //seacrh video on api
                    $.ajax({url: videoapi, success: function(result){
                        if(result.results.length>0){
                            document.getElementById("displayvideos").style.visibility="visible";
                        }
                        self.videos(result.results)
                        self.keys(result.results.key)
                      }});


              }});

            
            hideLoading();
            

    
              

        };
        console.clear()
        
        self.enlargeImage = function (name) {

            var id = getIMDbSlug(name);
            

            if (id == '') return;

            var image = document.getElementById(id);

            image.classList.toggle('img-modal');

        }
    };

    

    return vm
});