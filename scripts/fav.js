import { places } from "./elements.js";


 export let cards;
 
    cards = JSON.parse(localStorage.getItem('cards')) || [];

   
 
    
export function saveToStorage(){
    localStorage.setItem('cards', JSON.stringify(cards));
}



 export function favLodder() {
       let cardsHTML = '';
        
       cards.forEach((cartIteam) =>{

           const placeId = cartIteam.placeId
           const machingPlace = getPlace(placeId)
           
           
           cardsHTML += `
           <div class="cards 
           js-cards-delete-${machingPlace.id} ">

           <div class="card-heading">
           ${machingPlace.Header}
           </div>
           <div class="card-img">
           <img src="${machingPlace.Image}" alt="#" >
           </div>
           <div class="card-rating">
           <img src="assets/RatingStars/rating-${machingPlace.rating * 10}.png" alt="#">
           </div>
           <div class="delete-btn js-delete-btn"
            data-place-id="${machingPlace.id}">
           <button>Delete</button>
           </div>
           <div class="card-loaction">
           Location: ${machingPlace.location}
           </div>
           </div>
           `;
           
        });
        
        document.querySelector('.js-card-cont')
           .innerHTML = cardsHTML;

           
           
           document.querySelectorAll('.js-delete-btn')
           .forEach((button) => {
               button.addEventListener('click', () => {
                const placeId = button.dataset.placeId;
                
                favDeleting(placeId);
   
                const container = document.querySelector
                (`.js-cards-delete-${placeId}`);
   
                   container.remove()
               });
   
           });
           
        }
        
        
        
        function getPlace(placeId){
            let machingPlace;
            
            places.forEach((place) =>{
                if (place.id === placeId) {
                    machingPlace = place;
                }
            });
           
            return machingPlace;        
    }

    
 export function favDeleting(placeId) {

    const newCart = [];
 
    cards.forEach((item) =>{
     if (item.placeId !== placeId) {
         newCart.push(item);
     }
 
    });
 
    cards = newCart;
 
    saveToStorage();
 }



