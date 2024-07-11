'use strict';

function getShippingCost(country) {
    let price;

    switch (country) {
        case 'China':
            price = 100;
        case 'Chile':
            price= 250;
        case 'Australia':
            price = 170;
        case 'Jamaica':
            price = 120;
        default: "Sorry, there is no delivery to your country"
        }
    return `Shipping to ${country} will cost ${price} credits`;    
    
}
