import React from 'react'
import img1 from '../img/shop1.jpg';
import img2 from '../img/shop2.jpg';
import img3 from '../img/shop3.jpg';
import img4 from '../img/shop4.jpg';
const MainShops = () => {
    return (
         <section class="shops pt-5 mb-5">
        <div class=" container">
            <div class="shop-cards">
                    <div class="card" style={{backgroundImage: `url(${img1})`}}>
                    <span class="card__title  card-1">
                        Store Ryad<br />
                        Men - Women - Child
                    </span>
                </div>
                <div class="card" style={{backgroundImage: `url(${img2})`}}>
                    <span class="card__title  card-2">
                        Store Amir<br />
                        Women
                    </span>
                </div>
                <div class="card" style={{backgroundImage: `url(${img3})`}}>
                    <span class="card__title  card-3">
                        Store ARC<br />
                        House
                    </span>
                </div>
                <div class="card" style={{backgroundImage: `url(${img4})`}}>
                    <span class="card__title  card-4">
                        Store Amir<br />
                        Men
                    </span>
                </div>
                </div>
            </div>
    </section>

    );
}

export default MainShops;
