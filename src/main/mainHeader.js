import React from 'react';
import img from '../img/Capture.png';
import './mainHeader.css';

const MainHeader = () => {
    return (
        <>
        <header class="header sticky">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="#"> <img src={img} alt="logo" class="img-fluid" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="has-search col-lg-7 col-md-6 col-sm-12">
                        <span class="fa fa-search form-control-feedback"></span>
                        <input type="text" class="form-control" placeholder="Search, Category, City .." />
                    </div>
                    <div class="header_right col-lg-5  col-md-6 col-sm-12 d-flex">
                        <button class="btn btn-sm mr-2">Client Access </button>
                        <button class="btn btn-sm">Pro Access </button>
                        <a href="./my_cart.html"><i class="fas fa-cart-plus fa-2x text-dark"></i></a>
                    </div>
                </div>
            </nav>

            <ul class="nav mt-2 justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="#">All</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ready To Wear</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">House</a>
                </li>
            </ul>
            <hr />
        </div>
    </header> 
        </>
    );
}

export default MainHeader;
