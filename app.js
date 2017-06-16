const heroes = [
    {
        name:'Spiderman',
        phoneNumber: '555-555-1111',
        comicsAffiliation: 'Marvel',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41Cl6PGFGeL._SY300_.jpg'
    },
    {
        name:'Batman',
        phoneNumber: '555-555-2222',
        comicsAffiliation: 'DC',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfisi2wvquQXLr4G-TEDXVzfjaOgnC1SCg6EVCYbZ6dOi1IZx_A'
    },
    {
        name:'Luke Cage',
        phoneNumber: '555-555-3333',
        comicsAffiliation: 'Marvel',
        imageUrl: 'https://cdn.gamerant.com/wp-content/uploads/luke-cage-300.jpg.optimal.jpg'
    },
    {
        name:'Superman',
        phoneNumber: '555-555-4444',
        comicsAffiliation: 'DC',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgk7rGREr2h89MebpJISDga5UImji-jvnazZJqlcilMZyOBxi'
    },
    {
        name:'Thor',
        phoneNumber: '555-555-5555',
        comicsAffiliation: 'Marvel',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLdrp3RBE020F1fwsABsRQV2Hz3rci_pi7VYZNZAXymlPK6i1Aw'
    },
    {
        name:'The Flash',
        phoneNumber: '555-555-6666',
        comicsAffiliation: 'DC',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkeHRqvxtFKimQDYiaOKFbKrdZEWkRFdJdit2ET6WAF79t1sL5'
    }]

angular
.module('phonebook', [])
.controller('PhonebookController',[phonebookControllerFunction])

function phonebookControllerFunction() {
    this.heroes = heroes;
    this.search = function () {
        let hero = this.searchName;
        console.log(hero);
    }
    // this.name = vm.name;
    // this.phoheNumber = vm.phoheNumber;
    // this.comicsAffiliation = vm.comicsAffiliation;
    // this.imageURL = vm.imageURL;
}