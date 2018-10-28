var vm = new Vue({
    el: "#app",
    data: {
        allInformation: [],
        descriptions: [],
        pictures: [],
        titles: [],
        books: [],
        images: [],
        link: "https://api.myjson.com/bins/1h3vb3",
    },
    created: function () {
        this.loadData(this.link);

    },
    methods: {

        loadData: function (link) {
                var fetchConfig =
                    fetch(link, {
                        method: "GET",
                    })

                    .then(function (response) {
                        return response.json();


                    })
                    .then(function (data) {
                        vm.getInformation(data);
                       


                    })
            .catch(error => console.log(error));

    },
    getInformation: function (data) {
        var books;
        
        var newTitles = [];
        var newDescriptions = [];
        var newPictures = [];
        var newImages = [];
        books = data.books;
    
        
        for (var i = 0; i < books.length; i++) {
            newTitles.push(books[i].titulo);
            newDescriptions.push(books[i].descripcion);
            newPictures.push(books[i].portada)
            newImages.push(books[i].detalle)
            vm.titles = newTitles;
            vm.descriptions = newDescriptions;
            vm.pictures = newPictures;
            vm.images = newImages;
            
        }
        
    },
//    appendTitles: function(){
//        var books;
//        books=data.books;
//        console.log(books.length)
//        var titles;
//        titles = document.getElementById("titles");
//        for (var i=0; i<books.lenght; i++){
//            
//        }
//    },
    
    }
});
//filterTableByState: function () {
//            var allRows = app.allMembers;
//            var myArray = [];
//            for (var i = 0; i < allRows.length; i++) {
//                myArray.push(allRows[i].state);
//                app.statesArray = myArray.filter((element, index) => (myArray.indexOf(element) == index));
//            }
//            app.statesArray.sort()
