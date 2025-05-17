import { cards } from "./fav.js";
import { saveToStorage } from "./fav.js";


export function favAdding(placeId) {
    let matchingPlace;
    cards.forEach((item) => {
        if (placeId === item.placeId) {
            matchingPlace = item;
        }
    });
    
    if (matchingPlace) {
        matchingPlace.quantity += 1;
    } else {
        cards.push({
            placeId: placeId,
            quantity: 1
        });
    }
    saveToStorage();

}

