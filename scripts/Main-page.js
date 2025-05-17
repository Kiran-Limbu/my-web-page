    import { places } from "./elements.js";
    import { favAdding } from "./cart.js";

    function mainPageRender() {
        let placeHTML = '';
        
        
        places.forEach((place) => {
            placeHTML += `
                <div class="cardes">
                <h3> ${place.Header} </h3>
                <div class="fav-img">
                <div class="fav-text">
                    ADD In favourite
                </div>

                <img class="js-fav-adding js-add-colour"
                data-place-id="${place.id}" 
                src="assets/pictures/heart-regular-24.png" alt="#" >                
                </div>
                    <img src="${place.Image}" alt="">
                    <div class ="para">${place.para}</div>               
                    <div class ="RatingStars">
                    <img src="assets/RatingStars/rating-${place.rating * 10}.png">
                    </div>
                    <div class="Location-Tag">
                    Location: ${place.location}
                    </div>
                    </div>
                    `;
                    
                });
                document.querySelector('.js-cardecont')
                .innerHTML = placeHTML;
                
                document.querySelectorAll('.js-fav-adding')
                .forEach((button) =>{
                    button.addEventListener('click', ()=>{

                        const placeId = button.dataset.placeId;
                        favAdding(placeId);
                        
                    })
                })
                
              const mobileMenu =  document.querySelector('.js-mobile-png')
              const nav = document.querySelector('.js-nav2')

                mobileMenu.addEventListener('click', ()=>{
                    nav.classList.toggle('show')                                        
                    
                })
                
            }

            
            mainPageRender();

            redHeart();
            
    function redHeart() {

     document.querySelectorAll('.js-add-colour')
        .forEach((heart) =>{
            heart.addEventListener('click', () =>{

                heart.classList.add('fav-img-active');
                
            setTimeout(() => {
                heart.classList.remove('fav-img-active')
            }, 2200);
        })
    })
    
}

    btn_Home()


    function btn_Home(){
        document.querySelector('.js-home-link')
        .addEventListener('click', () =>{
            alert('You are allready in home page 😅😅😅')
            
        })
    }



