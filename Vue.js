var vm = new Vue({
    el: "#app",
    data: {
        allInfo: [],
        
        link: "https://api.myjson.com/bins/1h3vb3",
    },
    created: function () {
        this.loadData(this.link);
//        this.getCard();
        
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
                        vm.showPicture();
                    })
            .catch(error => console.log(error));

    },
    getInformation: function (data) {
        var books;
        var newInfo = [];
        books = data.books;
    
        for (var i = 0; i < books.length; i++) {
            newInfo.push(books[i]);
            vm.allInfo= newInfo;
     
        }
        console.log(vm.allInfo);
        
    },
    showPicture: function(){
        var button;
        console.log("hey");
    }
//    getCard: function() {
//        var card;
//        card = this.document.querySelector('.card');
//        card.addEventListener("mouseover", function(){
//            card.classList.toggle('is-flipped');
//        });
//        
//        
//           
//    },
        

    
    }
});
