var app;
window.onload = function () {
    app = new Vue({
        el: '#weatherApp', // cible l'élement HTML où nous pourrons utiliser toutes les variables ci-dessous
        data: {
            // sera utilisé comme indicateur de chargement de l'application
            loaded: false,

            // cityName, variable utilisé dans le formulaire via v-model
            formCityName: '',

            message: 'WebApp Loaded.',
            messageForm: '',

            // liste des villes saisies, initialiser avec Paris
            cityList: [{
                name : 'Paris'
            }],

            // cityWeather contiendra les données météo reçus par openWeatherMap
            cityWeather : null,

            // indicateur de chargement
            cityWeatherLoading : false
        },

        // 'mounted' est exécuté une fois l'application VUE totalement disponible
        // Plus d'info. sur le cycle de vie d'une app VUE : 
        // https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
        mounted : function(){
            this.loaded = true;
            this.readData();
        },

        // ici, on définit les methodes qui vont traiter les données décrites dans DATA
        methods: {
            readData: function (event) {
                console.log('JSON.stringify(this.cityList)', JSON.stringify(this.cityList)); // va afficher la liste des villes
                // JSON.stringify permet transfomer une liste en chaine de caractère

                console.log('this.loaded:', this.loaded); // va afficher 'this.loaded: true'
            },
            addCity: function (event) {
                event.preventDefault(); // pour ne pas recharger la page à la soumission du formulaire

 if(this.isCityExist(this.formCityName)){
              return this.messageForm = 'existe déjà';
            }else{
                this.cityList.push({name : this.formCityName});
            }
                // remise à zero du message affiché sous le formulaire
              
                // remi  this.messageForm = '';
                this.messageForm = '';
                this.formCityName = '';
                console.log('formCityName:',this.formCityName)
            },
          
        

        isCityExist: function (_cityName){

            // la méthode 'filter' retourne une liste contenant tous les items ayant un nom égale à _cityName
            // doc. sur filter : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
            if( this.cityList.filter(item => 
                                        item.name.toUpperCase() == _cityName.toUpperCase()
                                    ).length>0){
                return true;
            }else{
                return false;
            }
        },

               
                // A compléter dans la suite du TP  
           
            remove: function (_city) {      
                // A compléter dans la suite du TP  
                 // on utilise 'filter' pour retourne une liste avec tous les items ayant un nom différent de _city.name
    this.cityList = this.cityList.filter(item => item.name != _city.name);        
            }, 
            meteo: function (_city) {  
                // A compléter dans la suite du TP    
                this.cityWeatherLoading = true;

    // appel AJAX avec fetch
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+_city.name+'&units=metric&lang=fr&apikey=f8ff975d04985b455b5d0fe1d61d044a')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            app.cityWeatherLoading = false;

            // test du code retour
            // 200 = OK
            // 404 = city not found 
            if(json.cod === 200){
                // on met la réponse du webservice dans la variable cityWeather
                app.cityWeather = json;
                app.message = null;
            }else{
                app.cityWeather = null;
                app.message = 'Météo introuvable pour ' + _city.name 
                                + ' (' + json.message+ ')';
            }        
        });        
              
            }
        }
    });
}