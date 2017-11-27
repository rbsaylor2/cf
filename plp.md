---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: shop
---
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h2><label for="exampleInputEmail1">Filter &amp; Search</label></h2>
      </div>
      <div class="col-md-8">
        <div class="input-group">
          <input type="text" class="form-control" placeholder='Previous Order / Return / Name' aria-label="Previous Order / Return / Name" style="border: 1px solid #ccc; height: 38px; box-sizing: border-box;">
          <span class="input-group-btn">
            <button class="btn color-primary" type="button">Search</button>
          </span>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-sm-3">
        <div class="card text-center">
          <img class="card-img-top" src="https://i.imgur.com/5zyKAdr.jpg" alt="Man on utility pole">
          <div class="card-body m-2">
            <!-- <h5>Shop By Occupation</h5> -->
            <p class="card-text truncate">Food, healthcare, retail, steel, timber, and more!</p>
            <a href="#" class="btn color-primary mb-2">Shop Occupations</a>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card text-center">
          <img class="card-img-top" src="https://i.imgur.com/YJOwt0y.jpg" alt="Footwear brand logos">
          <div class="card-body m-2">
            <!-- <h5>Shop By Brand</h5> -->
            <p class="card-text truncate">Select from Timberland, Rocky, Skechers, etc.</p>
            <a href="#" class="btn color-primary mb-2">Shop Brands</a>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card text-center">
          <img class="card-img-top" src="https://i.imgur.com/NxTZR4M.jpg" alt="Three panels of different footwear">
          <div class="card-body m-2">
            <!-- <h5>Shop By Feature</h5> -->
            <p class="card-text truncate">Protective toe, met-guard, slip-resistant, and many more.</p>
            <a href="#" class="btn color-primary mb-2">Shop Features</a>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card text-center">
          <img class="card-img-top" src="https://i.imgur.com/Vu9Z7m6.jpg" alt="Three panels of boot and apparel styles">
          <div class="card-body m-2">
            <!-- <h5>Shop By Style</h5> -->
            <p class="card-text truncate">Athletic, casual, duty, outdoor, apparel, etc.</p>
            <a href="#" class="btn color-primary mb-2">Shop Styles</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2 mr-auto">
        <strong>2713</strong> Products
      </div>
      <div class="col-sm-4">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item"><a class="page-link" href="#">6</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-2">
        <!-- <div>Quantity per page</div>
        <div class="quantity btn-group" data-toggle="buttons">
          <label class="btn btn-secondary active">
            <input type="radio" name="options" id="option1" autocomplete="off" checked> 50
          </label>
          <label class="btn btn-secondary">
            <input type="radio" name="options" id="option2" autocomplete="off"> 75
          </label>
          <label class="btn btn-secondary">
            <input type="radio" name="options" id="option3" autocomplete="off"> 100
          </label>
        </div>
        <div>Sort By</div>
        <div class="list-group">
          <a href="#" class="list-group-item text-light bg-secondary">Best Selling</a>
          <a href="#" class="list-group-item list-group-item-action">Brand A-Z</a>
          <a href="#" class="list-group-item list-group-item-action">Brand Z-A</a>
        </div>
        <div>Color</div>
        <div class="color-grid">
          <div class="color black"></div>
          <div class="color white"></div>
          <div class="color brown"></div>
          <div class="color blue"></div>
          <div class="color red"></div>
          <div class="color other"></div>
        </div>
        <div>Price</div>
        <input id="ex2" type="text" value="" data-slider-min="0" data-slider-max="400" data-slider-step="50" data-slider-value="[0,400]" data-slider-handle="square"/>
        <div id="accordion" role="tablist">
          <div class="card">
            <div class="card-header" role="tab" id="headingOne">
              <h5 class="mb-0">
                <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Brand
                </a>
              </h5>
            </div>

            <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                Rocky<br>Georgia<br>Lehigh
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" role="tab" id="headingTwo">
              <h5 class="mb-0">
                <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Size
                </a>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
              <div class="card-body">
                Footwear<br>1, 2, 3, 4, 5, 6<br>Apparel<br>Small, Medium, Large
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" role="tab" id="headingThree">
              <h5 class="mb-0">
                <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Outsole
                </a>
              </h5>
            </div>
            <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div> -->
        <div id="exampleAccordion" data-children=".item">
          <div class="item">
            <a class="filter-title" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion1" aria-expanded="true" aria-controls="exampleAccordion1">
              Page quantity
            </a>
            <div id="exampleAccordion1" class="collapse show" role="tabpanel">
                <div class="quantity btn-group" data-toggle="buttons">
                  <label class="btn btn-secondary active">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked> 50
                  </label>
                  <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option2" autocomplete="off"> 75
                  </label>
                  <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option3" autocomplete="off"> 100
                  </label>
                </div>
            </div>
          </div>
          <div class="item">
            <a class="filter-title" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion2" aria-expanded="false" aria-controls="exampleAccordion2">
              Sort by
            </a>
            <div id="exampleAccordion2" class="collapse show" role="tabpanel">
              <div class="list-group">
                <a href="#" class="list-group-item text-light bg-secondary">Best Selling</a>
                <a href="#" class="list-group-item list-group-item-action">Brand A-Z</a>
                <a href="#" class="list-group-item list-group-item-action">Brand Z-A</a>
              </div>
            </div>
          </div>
          <div class="item">
            <a class="filter-title" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion3" aria-expanded="false" aria-controls="exampleAccordion3">
              Color
            </a>
            <div id="exampleAccordion3" class="collapse show" role="tabpanel">
              <div class="color-grid">
                <div class="color black"></div>
                <div class="color white"></div>
                <div class="color brown"></div>
                <div class="color blue"></div>
                <div class="color red"></div>
                <div class="color other"></div>
              </div>
            </div>
          </div>
          <div class="item">
            <a class="filter-title" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion4" aria-expanded="false" aria-controls="exampleAccordion4">
              Price
            </a>
            <div id="exampleAccordion4" class="collapse show" role="tabpanel">
              <input id="ex2" type="text" value="" data-slider-min="0" data-slider-max="400" data-slider-step="50" data-slider-value="[0,400]" data-slider-handle="square"/>
            </div>
          </div>
          <div class="item">
            <a class="filter-title" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion5" aria-expanded="false" aria-controls="exampleAccordion5">
              Brand
            </a>
            <div id="exampleAccordion5" class="collapse show" role="tabpanel">
              Rocky<br>Georgia<br>Lehigh
            </div>
          </div>
          <div class="item">
            <a class="filter-title" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion6" aria-expanded="false" aria-controls="exampleAccordion6">
              Size
            </a>
            <div id="exampleAccordion6" class="collapse show" role="tabpanel">
              Footwear<br>1, 2, 3, 4, 5, 6<br>Apparel<br>Small, Medium, Large
            </div>
          </div>
          <div class="item">
            <a class="filter-title" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion7" aria-expanded="false" aria-controls="exampleAccordion7">
              Rating
            </a>
            <div id="exampleAccordion7" class="collapse show" role="tabpanel">
              Good better best
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-10">
        <div class="row">
          <div class="col-sm-3" style="margin: 0; padding: 0 0;">
            <div class="card">
              <img class="card-img-top" style="padding: 0 0.5em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" src="http://www.lehighoutfitters.com/on/demandware.static/-/Sites-Master-Product-catalog-en/default/dw12c825a5/images/2016/LEHI010_LARGE.jpg" alt="Card image cap">
              <div class="text-center">LEHI010</div>
              <div class="card-body">
                <!-- <h4 class="card-title">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</h4> -->
                <p class="card-text text-center">
                  <a href="#" class="text-dark" style="font-weight: normal; border-bottom: 1px solid #212121; text-align: center;">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</a><br>
                  <div class="text-center center">
                    <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                    <div class="text-center prices">
                      <div class="price-old">$99.99</div>
                      <div class="price-save">SAVE <span>25%</span></div>
                      <div class="price-new">$79.99</div>
                    </div>
                    <div class="input-group">
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn color-primary btn-block btn-sm" style="border: 1px solid #212121; width: 10em;">Buy Now</button>
                        <button type="button" class="btn btn-secondary btn-sm" style="border: 1px solid #212121;"><i class="material-icons" style="position: relative; top: 5px;">add_shopping_cart</i></button>
                      </div>
                      <input type="text" class="form-control" style="display: none;" aria-label="">
                    </div>
                    <!-- <a href="#" class="btn btn-secondary text-center">Shop LEHI010</a> -->
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3" style="margin: 0; padding: 0 0;">
            <div class="card">
              <img class="card-img-top" style="padding: 0 0.5em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" src="http://www.lehighoutfitters.com/on/demandware.static/-/Sites-Master-Product-catalog-en/default/dw12c825a5/images/2016/LEHI010_LARGE.jpg" alt="Card image cap">
              <div class="text-center">LEHI010</div>
              <div class="card-body">
                <!-- <h4 class="card-title">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</h4> -->
                <p class="card-text text-center">
                  <a href="#" class="text-dark" style="font-weight: normal; border-bottom: 1px solid #212121; text-align: center;">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</a><br>
                  <div class="text-center center">
                    <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                    <div class="text-center prices">
                      <div class="price-old">$99.99</div>
                      <div class="price-save">SAVE <span>25%</span></div>
                      <div class="price-new">$79.99</div>
                    </div>
                    <div class="input-group">
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn color-primary btn-block btn-sm" style="border: 1px solid #212121; width: 10em;">Buy Now</button>
                        <button type="button" class="btn btn-secondary btn-sm" style="border: 1px solid #212121;"><i class="material-icons" style="position: relative; top: 5px;">add_shopping_cart</i></button>
                      </div>
                      <input type="text" class="form-control" style="display: none;" aria-label="">
                    </div>
                    <!-- <a href="#" class="btn btn-secondary text-center">Shop LEHI010</a> -->
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3" style="margin: 0; padding: 0 0;">
            <div class="card">
              <img class="card-img-top" style="padding: 0 0.5em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" src="http://www.lehighoutfitters.com/on/demandware.static/-/Sites-Master-Product-catalog-en/default/dw12c825a5/images/2016/LEHI010_LARGE.jpg" alt="Card image cap">
              <div class="text-center">LEHI010</div>
              <div class="card-body">
                <!-- <h4 class="card-title">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</h4> -->
                <p class="card-text text-center">
                  <a href="#" class="text-dark" style="font-weight: normal; border-bottom: 1px solid #212121; text-align: center;">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</a><br>
                  <div class="text-center center">
                    <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                    <div class="text-center prices">
                      <div class="price-old">$99.99</div>
                      <div class="price-save">SAVE <span>25%</span></div>
                      <div class="price-new">$79.99</div>
                    </div>
                    <div class="input-group">
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn color-primary btn-block btn-sm" style="border: 1px solid #212121; width: 10em;">Buy Now</button>
                        <button type="button" class="btn btn-secondary btn-sm" style="border: 1px solid #212121;"><i class="material-icons" style="position: relative; top: 5px;">add_shopping_cart</i></button>
                      </div>
                      <input type="text" class="form-control" style="display: none;" aria-label="">
                    </div>
                    <!-- <a href="#" class="btn btn-secondary text-center">Shop LEHI010</a> -->
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3" style="margin: 0; padding: 0 0;">
            <div class="card">
              <img class="card-img-top" style="padding: 0 0.5em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" src="http://www.lehighoutfitters.com/on/demandware.static/-/Sites-Master-Product-catalog-en/default/dw12c825a5/images/2016/LEHI010_LARGE.jpg" alt="Card image cap">
              <div class="text-center">LEHI010</div>
              <div class="card-body">
                <!-- <h4 class="card-title">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</h4> -->
                <p class="card-text text-center">
                  <a href="#" class="text-dark" style="font-weight: normal; border-bottom: 1px solid #212121; text-align: center;">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</a><br>
                  <div class="text-center center">
                    <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                    <div class="text-center prices">
                      <div class="price-old">$99.99</div>
                      <div class="price-save">SAVE <span>25%</span></div>
                      <div class="price-new">$79.99</div>
                    </div>
                    <div class="input-group">
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn color-primary btn-block btn-sm" style="border: 1px solid #212121; width: 10em;">Buy Now</button>
                        <button type="button" class="btn btn-secondary btn-sm" style="border: 1px solid #212121;"><i class="material-icons" style="position: relative; top: 5px;">add_shopping_cart</i></button>
                      </div>
                      <input type="text" class="form-control" style="display: none;" aria-label="">
                    </div>
                    <!-- <a href="#" class="btn btn-secondary text-center">Shop LEHI010</a> -->
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3" style="margin: 0; padding: 0 0;">
            <div class="card">
              <img class="card-img-top" style="padding: 0 0.5em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" src="http://www.lehighoutfitters.com/on/demandware.static/-/Sites-Master-Product-catalog-en/default/dw12c825a5/images/2016/LEHI010_LARGE.jpg" alt="Card image cap">
              <div class="text-center">LEHI010</div>
              <div class="card-body">
                <!-- <h4 class="card-title">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</h4> -->
                <p class="card-text text-center">
                  <a href="#" class="text-dark" style="font-weight: normal; border-bottom: 1px solid #212121; text-align: center;">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</a><br>
                  <div class="text-center center">
                    <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                    <div class="text-center prices">
                      <div class="price-old">$99.99</div>
                      <div class="price-save">SAVE <span>25%</span></div>
                      <div class="price-new">$79.99</div>
                    </div>
                    <div class="input-group">
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn color-primary btn-block btn-sm" style="border: 1px solid #212121; width: 10em;">Buy Now</button>
                        <button type="button" class="btn btn-secondary btn-sm" style="border: 1px solid #212121;"><i class="material-icons" style="position: relative; top: 5px;">add_shopping_cart</i></button>
                      </div>
                      <input type="text" class="form-control" style="display: none;" aria-label="">
                    </div>
                    <!-- <a href="#" class="btn btn-secondary text-center">Shop LEHI010</a> -->
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3" style="margin: 0; padding: 0 0;">
            <div class="card">
              <img class="card-img-top" style="padding: 0 0.5em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" src="http://www.lehighoutfitters.com/on/demandware.static/-/Sites-Master-Product-catalog-en/default/dw12c825a5/images/2016/LEHI010_LARGE.jpg" alt="Card image cap">
              <div class="text-center">LEHI010</div>
              <div class="card-body">
                <!-- <h4 class="card-title">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</h4> -->
                <p class="card-text text-center">
                  <a href="#" class="text-dark" style="font-weight: normal; border-bottom: 1px solid #212121; text-align: center;">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</a><br>
                  <div class="text-center center">
                    <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                    <div class="text-center prices">
                      <div class="price-old">$99.99</div>
                      <div class="price-save">SAVE <span>25%</span></div>
                      <div class="price-new">$79.99</div>
                    </div>
                    <div class="input-group">
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn color-primary btn-block btn-sm" style="border: 1px solid #212121; width: 10em;">Buy Now</button>
                        <button type="button" class="btn btn-secondary btn-sm" style="border: 1px solid #212121;"><i class="material-icons" style="position: relative; top: 5px;">add_shopping_cart</i></button>
                      </div>
                      <input type="text" class="form-control" style="display: none;" aria-label="">
                    </div>
                    <!-- <a href="#" class="btn btn-secondary text-center">Shop LEHI010</a> -->
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3" style="margin: 0; padding: 0 0;">
            <div class="card">
              <img class="card-img-top" style="padding: 0 0.5em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" src="http://www.lehighoutfitters.com/on/demandware.static/-/Sites-Master-Product-catalog-en/default/dw12c825a5/images/2016/LEHI010_LARGE.jpg" alt="Card image cap">
              <div class="text-center">LEHI010</div>
              <div class="card-body">
                <!-- <h4 class="card-title">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</h4> -->
                <p class="card-text text-center">
                  <a href="#" class="text-dark" style="font-weight: normal; border-bottom: 1px solid #212121; text-align: center;">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</a><br>
                  <div class="text-center center">
                    <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                    <div class="text-center prices">
                      <div class="price-old">$99.99</div>
                      <div class="price-save">SAVE <span>25%</span></div>
                      <div class="price-new">$79.99</div>
                    </div>
                    <div class="input-group">
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn color-primary btn-block btn-sm" style="border: 1px solid #212121; width: 10em;">Buy Now</button>
                        <button type="button" class="btn btn-secondary btn-sm" style="border: 1px solid #212121;"><i class="material-icons" style="position: relative; top: 5px;">add_shopping_cart</i></button>
                      </div>
                      <input type="text" class="form-control" style="display: none;" aria-label="">
                    </div>
                    <!-- <a href="#" class="btn btn-secondary text-center">Shop LEHI010</a> -->
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3" style="margin: 0; padding: 0 0;">
            <div class="card">
              <img class="card-img-top" style="padding: 0 0.5em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" src="http://www.lehighoutfitters.com/on/demandware.static/-/Sites-Master-Product-catalog-en/default/dw12c825a5/images/2016/LEHI010_LARGE.jpg" alt="Card image cap">
              <div class="text-center">LEHI010</div>
              <div class="card-body">
                <!-- <h4 class="card-title">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</h4> -->
                <p class="card-text text-center">
                  <a href="#" class="text-dark" style="font-weight: normal; border-bottom: 1px solid #212121; text-align: center;">Lehigh Safety Shoes Unisex Composite Toe Waterproof Work Boot</a><br>
                  <div class="text-center center">
                    <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                    <div class="text-center prices">
                      <div class="price-old">$99.99</div>
                      <div class="price-save">SAVE <span>25%</span></div>
                      <div class="price-new">$79.99</div>
                    </div>
                    <div class="input-group">
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn color-primary btn-block btn-sm" style="border: 1px solid #212121; width: 10em;">Buy Now</button>
                        <button type="button" class="btn btn-secondary btn-sm" style="border: 1px solid #212121;"><i class="material-icons" style="position: relative; top: 5px;">add_shopping_cart</i></button>
                      </div>
                      <input type="text" class="form-control" style="display: none;" aria-label="">
                    </div>
                    <!-- <a href="#" class="btn btn-secondary text-center">Shop LEHI010</a> -->
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
