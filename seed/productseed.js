var Product = require('../models/product');
var mongoose = require('mongoose');


mongoose.connect('mongodb://admin:root@ds129144.mlab.com:29144/ordersys');

var products = [  
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg",
        title: 'Burger and Fries',
        description: 'best burger ever',
        price: 8
    }),
    new Product({
        imagePath: "http://www.wikihow.com/images/8/82/Make-Fish-and-Chips-Step-14.jpg",
        title: 'Fish & Chips',
        description: 'fresh af',
        price: 11
    }),
    new Product({
        imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqe040mtKJ3FPtOamSSI8zEtHrueNmJ0m3l6UvoIkwFIw0KctDv0Agm0M",
        title: 'Pizza',
        description: 'made by nonna',
        price: 16
    }),
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/commons/4/45/La_Banquise_Poutine.jpg",
        title: 'poutine',
        description: 'eh',
        price: 9
    }),
    new Product({
        imagePath: "http://hagerstownpizzabrothers.com/wp-content/uploads/2014/12/Leave-it-on-us-Sub.png",
        title: 'sub',
        description: 'better than subway',
        price: 8
    })
];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++
        if(done === products.length){
            exit()
        }
        if(err){
            console.log(err);
            return;
       }
    }
)}

function exit(){
    mongoose.disconnect();
}
