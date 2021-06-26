import React from 'react'

const MainSlider = () => {
    return (
        <>
            <section class="hero_section">
        <div id="carousel" class="carousel slide hero-slides" data-ride="carousel">
            <ol class="carousel-indicators">
                <li class="active" data-target="#carousel" data-slide-to="0"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active boat">
                    <div class="container h-100 d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item sea">
                    <div class="container h-100 d-none d-md-block">

                    </div>
                </div>
                <div class="carousel-item river">
                    <div class="container h-100 d-none d-md-block">

                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </section>     
        </>
    );
}

export default MainSlider;
