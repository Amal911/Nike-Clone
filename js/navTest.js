const navbarHtml = `
<div class="navAndDrop" id="navAndDrop1">
<nav class="navbar fixed-top navbar-expand-lg bg-white p-0">
    <div class="container">

        <a href="index.html" class="navbar-brand mb-0 h1">

            <img class="d-inline-block align-top" src="../assets/images/home/ticklogo.svg" width="50"
                height="50">
        </a>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav nav-underline">
                <li class="nav-item active">
                    <a href="#" class="nav-link" id="featureDropDown">
                        New & Featured
                    </a>

                </li>
                <li class="nav-item active">
                    <a href="#" class="nav-link" id="menDropDown">
                        Men
                    </a>
                </li>
                <li class="nav-item active">
                    <a href="#" class="nav-link" id="womenDropDown">
                        Women
                    </a>
                </li>
                <li class="nav-item active">
                    <a href="#" class="nav-link" id="kidsDropDown">
                        Kids
                    </a>
                </li>
                <li class="nav-item active">
                    <a href="#" class="nav-link" id="salesDropDown">
                        Sales
                    </a>
                </li>
                <li class="nav-item active">
                    <a href="#" class="nav-link">
                        Customize
                    </a>
                </li>
                <li class="nav-item active">
                    <a href="#" class="nav-link">
                        SNKRS
                    </a>
                </li>
            </ul>
        </div>
        <div class="nav-bar-all-icons d-flex flex-row">
            <div class="d-flex flex-direction-row navBtnDiv"></div>
            <form class="form-inline">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                            <img class="nav-icon d-inline-block align-top m-2"
                                src="../assets/images/home/search.svg" width="25" height="25">
                        </span>
                    </div>
                    <div class="text-area">
                        <input type="text" class="form-control" placeholder="Search" aria-label="Username"
                            aria-describedby="basic-addon1" style="width:100px">
                    </div>
                </div>
            </form>

            <button type="btn-search" class="btn-nav2" id=favourite-icon>
                <img class="nav-icon d-inline-block align-top m-2" src="../assets/images/home/favourite.svg"
                    width="25" height="25">
            </button>
            <button type="btn-search" class="btn-nav2" id=profile-icon style="display: none;">
                <img class=" nav-icon d-inline-block align-top m-2" src="../assets/images/home/profile.svg"
                    width="25" height="25">
            </button>
            <button type="btn-search" class="btn-nav2" id=wishlist-icon>
                <img class=" nav-icon d-inline-block align-top m-2" src="../assets/images/home/wishlist.svg"
                    width="25" height="25">
            </button>
            
            <button class="btn d-lg-none" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive" id="hamburger-icon">
                <img class="nav-icon d-inline-block d-flex menubtn" src="../assets/images/home/menu.svg"
                    width="30" height="30">
            </button>
        </div>
    </div>



</div>
</nav>
<!-- drop down on hover navbar  -->
<section class="nav-drop bg-white" id="navDropSection">
<div class="main-opt main-fix" id="NewAndFeatured-drop">
    <div class="d-flex justify-content-center gap-5 " id="featureListDrop">
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        New & Featured</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        New Arrivals</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Latest Shoes</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Latest Clothing</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        SNKRS Launch Calendar</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Get ‘Em in SNKRS</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Customise with Nike By You</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Bestsellers</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Member Exclusive</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Top Kicks Under ₹ 8 000.00</a></li>

            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Shop Icons</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Air Force 1</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Air Jordan 1</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Air Max</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Dunk</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Cortez</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Blazer</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Pegasus</a></li>


            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        New For Men</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Shoes</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Clothing</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Accessories</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Shop All New</a></li>


            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        New For Women</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Shoes</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Clothing</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Accessories</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Shop All New</a></li>


            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        New For Kids</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Shoes</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Clothing</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Accessories</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Shop All New</a></li>


            </ul>
        </div>
    </div>
</div>


<div class="main-opt main-fix" id="men-drop">
    <div class="d-flex justify-content-around" id="menListDrop">
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Featured</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        New Releases</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Bestsellers</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Member Exclusive</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Jordan </a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Customise with Nike By You</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Sale</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Bestsellers</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Running Shoe Finder</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Sustainable Materials</a></li>

            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Shoes</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        All Shoes</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Newest Sneakers</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Jordan </a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Lifestyle</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Running</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Gym and Training</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Basketball</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Football </a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Sandals and Slides</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Last Sizes Available</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Customise with Nike By You</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Top Picks Under 8 000.00</a></li>


            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Clothing</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        All Clothing</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Tops and T-Shirts</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Shorts</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Pants and Leggings</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Hoodies and Sweatshirts</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Jackets and Gilets</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Jerseys and Kits</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Jordan</a></li>


            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Shop By Sport</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Running</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Basketball</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Football</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Golf</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Tennis</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Gym and Training</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Yoga</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Skateboarding</a></li>


            </ul>
        </div>

    </div>
</div>

<div class="main-opt main-fix" id="women-drop">
    <div class="d-flex justify-content-around" id="womenListDrop">
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Featured</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        New Releases</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Bestsellers</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Member Exclusive</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Jordan </a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Lifestyle Running</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Bra and Legging Duos</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Customise with Nike By You</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Sale</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Find Your Feel - Nike Leggings</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Running Shoe Finder</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Sustainable Materials</a></li>

            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Shoes</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        All Shoes</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Newest Sneakers</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Platform Sneakers </a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Lifestyle</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Jordan</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Running</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Gym and Training</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Sandals and Slides </a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Basketball</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Football</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Last Sizes Available</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Customise with Nike By You</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Top Picks Under 8 000.00</a></li>


            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Clothing</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        All Clothing</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Performance Essentials</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Tops and T-Shirts</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Sports Bras</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Pants and Leggings</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Shorts</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Hoodies and Sweatshirts</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Jackets and Gilets</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Skirts and Dresses</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Modest Wear</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Nike Maternity</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Plus Size</a></li>


            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Shop By Sport</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Yoga</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Running</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Gym and Training</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Basketball</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Tennis</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Golf</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Football</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Skateboarding</a></li>


            </ul>
        </div>

    </div>
</div>

<div class="main-opt main-fix" id="kids-drop">
    <div class="d-flex justify-content-around" id="kidsListDrop">
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Featured</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        New Releases</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Newest Sneakers</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Easy On & Off</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Bestsellers </a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Member Exclusive</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Jordan</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Bags and Backpacks</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Sale</a></li>


            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Boys' Shoes</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        All Shoes</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Older Boys (7-14 years)</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Younger Boys (4-7 years) </a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Babies and Toddlers (0-4 years)</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Lifestyle</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Jordan</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Running</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Basketball </a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Football</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Sandals and Slides</a></li>



            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Girls' Shoes</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        All Shoes</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Older Girls (7-14 years)</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Younger Girls (4-7 years) </a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Babies and Toddlers (0-4 years)</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Lifestyle</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Jordan</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Running</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Basketball </a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Football</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Sandals and Slides</a></li>


            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Accessories and Equipment</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        All Accessories and Equipment</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Bags and Backpacks</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Socks</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Hats and Headwear</a></li>
            </ul>
        </div>

    </div>
</div>

<div class="main-opt main-fix" id="sales-drop">
    <div class="d-flex justify-content-around" id="salesListDrop">
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Sale</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Shop All Sale</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Shoes Sale</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Clothing Sale</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Accessories & Equipment Sale</a></li>
            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Men's Sale</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Shoes</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Clothing</a></li>

            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Women's Sale</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Shoes</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Clothing</a></li>
            </ul>
        </div>
        <div class="d-flex flex-column">
            <ul class="each-list-row">
                <li class="drop-child active color-dark">
                    <p class="drop-p">
                        Kids' Sale</p>
                </li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Shoes</a></li>
                <li class="drop-child active"><a href="#" class="drop-link">
                        Clothing</a></li>

            </ul>
        </div>

    </div>
</div>


</section>
</div>
<!-- ------------------------Hamburger Nav drop down-------------------------- -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive"
aria-labelledby="offcanvasResponsiveLabel">
<div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive"
        aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="navbar-nav ">
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="featureDropDown"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-new"
                    aria-controls="offcanvasResponsive-new">
                    <p class="nav-a-text">New & Features</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="menDropDown"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men"
                    aria-controls="offcanvasResponsive-men">
                    <p class="nav-a-text">Men</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="womenDropDown"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-women"
                    aria-controls="offcanvasResponsive-women">
                    <p class="nav-a-text">Women</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="kidsDropDown"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids"
                    aria-controls="offcanvasResponsive-kids">
                    <p class="nav-a-text">Kids</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="saleDropDown"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-sale"
                    aria-controls="offcanvasResponsive-sale">
                    <p class="nav-a-text">Sale</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between pb-2" id="salesDropDown">
                    Customise</p>

                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between pt-2" id="salesDropDown">
                    <p class="nav-a-text">SNKRS</p>

                </a>
            </div>
        </li>
    </ul>
    
    <div class="d-flex flex-row pt-3 pb-3">   
        <a href="#" class="nav-link">            
        <img class="d-inline-block align-top" src="../assets/images/home/air-jordan.svg" width="30" height="30">
        <p class="d-inline-block fw-bold ps-3"> Jordan</p></a>

    </div>



    <p class="nav-desc">Become a Nike Member for the best products, inspiration and stories in sport.<a href="#"
            class="text-black fw-bold" style="text-decoration:none">Learn more</a> </p>
    <div class="btn-wrap pb-5">
        <button type="btn" class="button-na button-a button-big button-rouded">Join Us</button>
        <button type="btn" class="button-naw button-a button-big button-rouded"> Sign In </button>
    </div>

    <div class="d-flex flex-row pt-1 pb-1 align-items-center">
        <a href="#" class="ss-nav-bottom" style="text-decoration: none;">
            <img class="d-inline-block justify-content-center d-inline-block"
                src="../assets/images/home/help.svg" width="25" height="25">
            <p class="fw-500 ps-3 justify-content-center d-inline-block text-black"
                style="text-decoration:none">Help</p>
        </a>

    </div>
    <div class="d-flex flex-row pt-1 pb-1 align-items-center">
        <a href="#" class="ss-nav-bottom" style="text-decoration: none;">
            <img class="d-inline-block justify-content-center d-inline-block" src="../assets/images/home/bag.svg"
                width="25" height="25">
            <p class="fw-500 ps-3 justify-content-center d-inline-block text-black"
                style="text-decoration:none">Bag</p>
        </a>

    </div>
    <div class="d-flex flex-row pt-1 pb-1 align-items-center">
        <a href="#" class="ss-nav-bottom" style="text-decoration: none;">
            <img class="d-inline-block justify-content-center d-inline-block"
                src="../assets/images/home/orders.svg" width="25" height="25">
            <p class="fw-500 ps-3 justify-content-center d-inline-block text-black"
                style="text-decoration:none">Orders</p>
        </a>

    </div>
    <div class="d-flex flex-row pt-1 pb-1 align-items-center">
        <a href="#" class="ss-nav-bottom" style="text-decoration: none;">
            <img class="d-inline-block justify-content-center d-inline-block"
                src="../assets/images/home/store.svg" width="25" height="25">
            <p class="fw-500 ps-3 justify-content-center d-inline-block text-black"
                style="text-decoration:none">Find a Store</p>
        </a>

    </div>

</div>


</div>
<!-- =========================new features drop down items -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-new">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">All</p>
        </div>
    </button>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-new" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="navbar-nav ">
        <li class="nav-item active">
            <div class="nav-row-div">
                <p class="nav-a-text fw-500 fs-5">New & Features</p>
                <a href="#" class="nav-link d-flex justify-content-between" id="featureDropDown-n"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-new-new"
                    aria-controls="offcanvasResponsive-new">
                    <p class="nav-a-texts">New & Featured</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="featureDropDown-shop"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-new-shop"
                    aria-controls="offcanvasResponsive-new-shop">
                    <p class="nav-a-texts">Shop Icons</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="featureDropDown-formen"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-new-formen"
                    aria-controls="offcanvasResponsive-new-formen">
                    <p class="nav-a-texts">New For Men</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="featureDropDown-forwomen"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-new-forwomen"
                    aria-controls="offcanvasResponsive-new-forwomen">
                    <p class="nav-a-texts">New for Women</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="featureDropDown-forkids"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-new-forkids"
                    aria-controls="offcanvasResponsive-new-forkids">
                    <p class="nav-a-texts">New For Kids</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>

    </ul>
</div>
</div>
<!-- new>> features sub new features drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-new-new">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-new"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">New & Featured</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-new-new" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">New & Featured</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                New Arrivals</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Latest Shoes</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Latest Clothing</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                SNKRS Launch Calendar</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Get ‘Em in SNKRS</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Customise with Nike By You</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Bestsellers</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Member Exclusive</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Top Kicks Under ₹ 8 000.00</a></li>

    </ul>
</div>
</div>
<!-- new>> features sub shop icons drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-new-shop">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-new"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">New & Featured</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-new-shop" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Shop Icons</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Air Force 1</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Air Jordan 1</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Air Max</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Dunk</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Cortez</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Blazer</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Pegasus</a></li>


    </ul>
</div>
</div>
<!-- new>> features sub NEW for men drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-new-formen">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-new"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">New & Featured</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-new-formen" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                New For Men</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Shoes</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Clothing</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Accessories</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Shop All New</a></li>


    </ul>
</div>
</div>
<!-- new>> features sub NEW for Women drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-new-forwomen">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-new"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">New & Featured</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-new-forwomen" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                New For Women</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Shoes</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Clothing</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Accessories</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Shop All New</a></li>


    </ul>
</div>
</div>
<!-- new>> features sub NEW for Kids drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-new-forkids">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-new"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">New & Featured</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-new-forkids" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                New For Kids</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Shoes</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Clothing</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Accessories</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Shop All New</a></li>


    </ul>
</div>
</div>
<!-- ======================Men drop down items -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-men">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">All</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-men" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="navbar-nav ">
        <li class="nav-item active">
            <div class="nav-row-div">
                <p class="nav-a-text fw-500 fs-5">Men</p>
                <a href="#" class="nav-link d-flex justify-content-between" id="menDropDown-featured"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men-featured"
                    aria-controls="offcanvasResponsive-men-feature">
                    <p class="nav-a-texts">Featured</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="menDropDown-jordan"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men-jordan"
                    aria-controls="offcanvasResponsive-men-jordan">
                    <p class="nav-a-texts">Jordan</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="menDropDown-shoes"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men-shoes"
                    aria-controls="offcanvasResponsive-men-shoes">
                    <p class="nav-a-texts">Shoes</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="menDropDown-clothing"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men-clothing"
                    aria-controls="offcanvasResponsive-men-clothing">
                    <p class="nav-a-texts">Clothing</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="menDropDown-accessories"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men-Accessories"
                    aria-controls="offcanvasResponsive-men-Accessories">
                    <p class="nav-a-texts">Accessories and Equipment</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="menDropDown-sport"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men-sport"
                    aria-controls="offcanvasResponsive-men-sport">
                    <p class="nav-a-texts">Shop by Sport</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="menDropDown-brand"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men-brand"
                    aria-controls="offcanvasResponsive-men-brand">
                    <p class="nav-a-texts">Shop by Brand</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>

    </ul>
</div>
</div>
<!-- men>> features sub featured drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-men-featured">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Men</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-men-featured" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Featured</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                New Releases</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Bestsellers</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Member Exclusive</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Jordan </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Customise with Nike By You</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Sale</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Bestsellers</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Running Shoe Finder</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Sustainable Materials</a></li>

    </ul>
</div>
</div>
<!-- men>> features sub Jordan drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-men-jordan">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Men</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-men-jordan" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Jordan</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                All Jordan</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                new Jordan</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Jordan Shoes</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Jordan Clothing </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Jordan Basketball</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Jordan Lifestyle</a></li>
    </ul>
</div>
</div>
<!-- men>> features sub Shoes drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-men-shoes">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Men</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-men-shoes" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Shoes</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                All Shoes</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Newest Sneakers</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Jordan </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Lifestyle</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Running</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Gym and Training</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Basketball</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Football </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Sandals and Slides</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Last Sizes Available</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Customise with Nike By You</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Top Picks Under Rs.10,000</a></li>
    </ul>
</div>
</div>
<!-- men>> features sub Clothing drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-men-clothing">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Men</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-men-clothing" aria-label="Close"></button>

</div>
<ul class="each-list-row">
    <li class="drop-child active color-dark">
        <p class="nav-a-text fw-500 fs-5">
            Clothing</p>
    </li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            All Clothing</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Tops and T-Shirts</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Shorts</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Pants and Leggings</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Hoodies and Sweatshirts</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Jackets and Gilets</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Jerseys and Kits</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Jordan</a></li>
</ul>
</div>
<!-- men>> features sub Accessories and Equipment drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-men-Accessories">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Men</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-men-Accessories" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Accessories and Equipment</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                All Accessories and Equipment</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Bags and Backpacks</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Socks</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Hats and headwear</a></li>


    </ul>
</div>
</div>
<!-- men>> Shop By Sport  drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-men-sport">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Men</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-men-sport" aria-label="Close"></button>

</div>
<div class="offcanvas-body">

    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Shop By Sport</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Running</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Basketball</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Football</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Golf</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Tennis</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Gym and Training</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Yoga</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Skateboarding</a></li>


    </ul>
</div>
</div>
<!-- men>> Shop By Brand  drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-men-brand">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-men"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Men</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-men-brand" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Shop By Brand</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Nike Sportwear</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                NikeLab</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Nike By You</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Jordan </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                ACG</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                NBA</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Nike SB</a></li>


    </ul>
</div>
</div>
<!-- ======================Women drop down items -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-women">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">All</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-women" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="navbar-nav ">
        <li class="nav-item active">
            <div class="nav-row-div">
                <p class="nav-a-text fw-500 fs-5">Women</p>
                <a href="#" class="nav-link d-flex justify-content-between" id="womenDropDown-featured"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-women-featured"
                    aria-controls="offcanvasResponsive-women-feature">
                    <p class="nav-a-texts">Featured</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>

        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="womenDropDown-shoes"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-women-shoes"
                    aria-controls="offcanvasResponsive-women-shoes">
                    <p class="nav-a-texts">Shoes</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="womenDropDown-clothing"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-women-clothing"
                    aria-controls="offcanvasResponsive-women-clothing">
                    <p class="nav-a-texts">Clothing</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="womenDropDown-accessories"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-women-Accessories"
                    aria-controls="offcanvasResponsive-women-Accessories">
                    <p class="nav-a-texts">Accessories and Equipment</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="womenDropDown-sport"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-women-sport"
                    aria-controls="offcanvasResponsive-women-sport">
                    <p class="nav-a-texts">Shop by Sport</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="womenDropDown-brand"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-women-brand"
                    aria-controls="offcanvasResponsive-women-brand">
                    <p class="nav-a-texts">Shop by Brand</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>

    </ul>
</div>
</div>
<!-- women>>  featured drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-women-featured">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-women"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Women</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-women-featured" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Featured</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                New Releases</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Bestsellers</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Member Exclusive</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Jordan </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Customise with Nike By You</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Sale</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Bestsellers</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Running Shoe Finder</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Sustainable Materials</a></li>

    </ul>
</div>
</div>
<!-- women>>  Shoes drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-women-shoes">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-women"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Women</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-women-shoes" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Shoes</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                All Shoes</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Newest Sneakers</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Platform Sneakers </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Lifestyle</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Jordan</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Running</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Gym and Training</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Sandals and Slides</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Basketball</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Football </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Last Sizes Available</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Customise with Nike By You</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Top Picks Under Rs.10,000</a></li>
    </ul>
</div>
</div>
<!-- women>>  Clothing drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-women-clothing">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-women"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Women</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-women-clothing" aria-label="Close"></button>

</div>
<ul class="each-list-row">
    <li class="drop-child active color-dark">
        <p class="nav-a-text fw-500 fs-5">
            Clothing</p>
    </li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            All Clothing</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Performance Essentials</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Tops and T-Shirts</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Sports Bras</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Pants and Leggings</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Shorts</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Hoodies and Sweatshirts</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Jackets and Gilets</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Skirts and Dresses</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Modest Wear</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Nike Maternity</a></li>
    <li class="drop-child-ss"><a href="#" class="drop-link-ss">
            Plus Size</a></li>


</ul>
</div>
<!-- women>>  Accessories and Equipment drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-women-Accessories">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-women"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Women</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-women-Accessories" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Accessories and Equipment</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                All Accessories and Equipment</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Bags and Backpacks</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Socks</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Hats and headwear</a></li>


    </ul>
</div>
</div>
<!-- women>> Shop By Sport  drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-women-sport">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-women"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Women</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-women-sport" aria-label="Close"></button>

</div>
<div class="offcanvas-body">

    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Shop By Sport</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Yoga</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Running</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Gym and Training</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Basketball</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Tennis</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Golf</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Football</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Skateboarding</a></li>


    </ul>
</div>
</div>
<!-- women>> Shop By Brand  drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-women-brand">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-women"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Women</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-women-brand" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Shop By Brand</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Nike Sportwear</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                NikeLab</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Nike By You</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Jordan </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                ACG</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                NBA</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Nike SB</a></li>


    </ul>
</div>
</div>
<!-- ======================kids drop down items -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-kids">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">All</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-kids" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="navbar-nav ">
        <li class="nav-item active">
            <div class="nav-row-div">
                <p class="nav-a-text fw-500 fs-5">Kids</p>
                <a href="#" class="nav-link d-flex justify-content-between" id="kidsDropDown-featured"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids-featured"
                    aria-controls="offcanvasResponsive-kids-feature">
                    <p class="nav-a-texts">Featured</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>

        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="kidsDropDown-age"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids-age"
                    aria-controls="offcanvasResponsive-kids-age">
                    <p class="nav-a-texts">Kids By Age</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="kidsDropDown-boys-shoes"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids-boys-shoes"
                    aria-controls="offcanvasResponsive-kids-boys-shoes">
                    <p class="nav-a-texts">Boys' Shoes</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="kidsDropDown-boys-clothing"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids-boys-clothing"
                    aria-controls="offcanvasResponsive-kids-boys-clothing">
                    <p class="nav-a-texts">Boys' Clothing</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="kidsDropDown-girls-shoes"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids-girls-shoes"
                    aria-controls="offcanvasResponsive-kids-girls-shoes">
                    <p class="nav-a-texts">Girls' Shoes</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="kidsDropDown-girls-clothing"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids-girls-clothing"
                    aria-controls="offcanvasResponsive-kids-girls-clothing">
                    <p class="nav-a-texts">Girls' Clothing</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="kidsDropDown-accessories"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids-accessories"
                    aria-controls="offcanvasResponsive-kids-accessories">
                    <p class="nav-a-texts">Accessories and Equipment</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="kidsDropDown-sport"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids-sport"
                    aria-controls="offcanvasResponsive-kids-sport">
                    <p class="nav-a-texts">Shop By Sport</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>

    </ul>
</div>
</div>
<!-- kids>> featured drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-kids-featured">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Kids</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-kids-brand" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Featured</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                New Releases</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Newest Sneakers</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Easy On & Off</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Bestsellers </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Member Exclusive</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Jordan</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Bags and Backpacks</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Sale</a></li>


    </ul>
</div>
</div>
<!-- kids>> age drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-kids-age">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Kids</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-kids-age" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Kids By Age</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Older Kids(7-14 years)</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Younger Kids(4-7 years)</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Babies & Toddlers(0-4)</a></li>



    </ul>
</div>
</div>
<!-- kids>> boys-shoes drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-kids-boys-shoes">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Kids</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-kids-boys-shoes" aria-label="Close"></button>

</div>
<div class="offcanvas-body">

    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Boys' Shoes</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                All Shoes</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Older Boys (7-14 years)</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Younger Boys (4-7 years) </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Babies and Toddlers (0-4 years)</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Lifestyle</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Jordan</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Running</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Basketball </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Football</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Sandals and Slides</a></li>



    </ul>
</div>
</div>
<!-- kids>> boys-clothing drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-kids-boys-clothing">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Kids</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-kids-boys-clothing" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Boys' Clothing</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Tops and T-shirts</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Hoodies and Sweatshirts</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Pants and Leggins</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Shorts </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                All Boys' Clothing</a></li>

    </ul>
</div>
</div>
<!-- kids>> girls-shoes drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-kids-girls-shoes">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Kids</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-kids-girls-shoes" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Girls' Shoes</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                All Shoes</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Older Girls (7-14 years)</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Younger Girls (4-7 years) </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Babies and Toddlers (0-4 years)</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Lifestyle</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Jordan</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Running</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Basketball </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Football</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Sandals and Slides</a></li>
    </ul>
</div>
</div>
<!-- kids>> girls-clothing drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-kids-girls-clothing">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Kids</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-kids-girls-clothing" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Girls' Clothing</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Tops and T-Shirts</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Sports Bras</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Hoodies and Sweatshirts</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Pants and Leggings </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Shorts</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                All Girls' Clothing</a></li>

    </ul>
</div>
</div>
<!-- kids>> accessories drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-kids-accessories">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Kids</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-kids-accessories" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Accessories and Equipment</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                All Accessories and Equipment</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Bags and Backpacks</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Socks</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Hats and Headwear</a></li>
    </ul>

</div>
</div>
<!-- kids>> sport drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-kids-sport">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-kids"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Kids</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-kids-sport" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Shop By Sport</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Football</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Running</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Basketball</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Gym and Training </a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Tennis</a></li>
    </ul>
</div>
</div>
<!-- ======================sale drop down items -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-sale">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">All</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-sale" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="navbar-nav ">
        <li class="nav-item active">
            <div class="nav-row-div">
                <p class="nav-a-text fw-500 fs-5">Sale</p>
                <a href="#" class="nav-link d-flex justify-content-between" id="saleDropDown-sale"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-sale-sale"
                    aria-controls="offcanvasResponsive-sale-feature">
                    <p class="nav-a-texts">Sale</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>

        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="saleDropDown-discount"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-sale-discount"
                    aria-controls="offcanvasResponsive-sale-discount">
                    <p class="nav-a-texts">Shop by Discount</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="saleDropDown-mens-sale"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-sale-mens-sale"
                    aria-controls="offcanvasResponsive-sale-boys-mens-sale">
                    <p class="nav-a-texts">Men's Sale</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="saleDropDown-womens-sale"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-sale-womens-sale"
                    aria-controls="offcanvasResponsive-sale-womens-sale">
                    <p class="nav-a-texts">Women's Sale</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
        <li class="nav-item active">
            <div class="nav-row-div">
                <a href="#" class="nav-link d-flex justify-content-between" id="saleDropDown-kids"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-sale-kids"
                    aria-controls="offcanvasResponsive-sale-kids">
                    <p class="nav-a-texts">Kids' sale</p>
                    <img class="d-inline-block" src="../assets/images/home/right arrow.svg" width="20"
                        height="20">
                </a>
            </div>
        </li>
    </ul>
</div>
</div>
<!-- sale>> sale drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-sale-sale">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-sale"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Sale</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-sale-sale" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Sale</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Shop All Sale</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Shoes Sale</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Clothing Sale</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Accessories & Equipment Sale</a></li>
    </ul>
</div>
</div>
<!-- sale>> discount drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-sale-discount">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-sale"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Sale</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-sale-discount" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Shop by Discount</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Shop All Sale</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                40% off and up</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                30% off and up</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                20% off and up</a></li>
    </ul>
</div>
</div>
<!-- sale>> mens-sale drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-sale-mens-sale">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-sale"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Sale</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-sale-mens-sale" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Men's Sale</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Shoes</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Clothing</a></li>

    </ul>
</div>
</div>
<!-- sale>> womens-sale drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-sale-womens-sale">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-sale"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Sale</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-sale-womens-sale" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Women's Sale</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Shoes</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Clothing</a></li>

    </ul>
</div>
</div>
<!-- sale>> kids-sale drop down -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive-sale-kids">
<div class="offcanvas-header">
    <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive-sale"
        aria-controls="offcanvasResponsive">
        <div class="d-flex justify-content-center align-items-center">
            <img class="d-inline-block align-top m-0" src="../assets/images/home/left arrow.svg" width="20"
                height="20">
            <p class="ms-2 fw-500 d-inline-block m-0">Sale</p>
        </div>
    </button>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive-sale-kids-sale" aria-label="Close"></button>

</div>
<div class="offcanvas-body">
    <ul class="each-list-row">
        <li class="drop-child active color-dark">
            <p class="nav-a-text fw-500 fs-5">
                Kids' Sale</p>
        </li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Shoes</a></li>
        <li class="drop-child-ss"><a href="#" class="drop-link-ss">
                Clothing</a></li>

    </ul>
</div>
</div>


`;

document.getElementById('add-navbar').innerHTML = navbarHtml;