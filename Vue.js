var vm = new Vue({
    el: "#app",
    data: {
        allInfo: [],
        search: '',
        link: "https://api.myjson.com/bins/1h3vb3",
    },
    created: function () {
        this.loadData(this.link);
        
        

    },
    computed: {
        filterBooks: function(){
            return this.allInfo.filter((data) =>{
                var mySearch, myBooks;
                mySearch = this.search.toLowerCase();
                myBooks = data.titulo.toLowerCase();
                return myBooks.match(this.search);
            });
        }
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
                    var books;
                    vm.books = data.books;
                    vm.getInformation(data);
                    
                })
                .catch(error => console.log(error));

        },
        getInformation: function (data) {
            var books;
            var newInfo = [];
            books = data.books;
            
            for (var i = 0; i < books.length; i++) {
                newInfo.push(books[i]);
                vm.allInfo = newInfo;

            }
        },
            
        
     


    }
});
