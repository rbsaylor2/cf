---
layout: gcc
---
<style>
  .nav1 {
    z-index: 100;
    list-style: none;
    background: #212121;
    color: white;
    font-size: 1.4em;
    padding: 0;
    margin: 0;
    display: inline-block;
    position: fixed;
    left: 0;
    top: 80px;
    height: calc(100% - 80px);
    width: 90px;
  }
  .nav2 {
    z-index: 100;
    list-style: none;
    background: #333;
    color: white;
    font-size: 1.2em;
    padding: 0;
    margin: 0;
    display: inline-block;
    position: fixed;
    left: 90px;
    width: 200px;
    top: 80px;
    height: calc(100% - 80px);
  }
  .nav1 li, .nav2 li {
    padding: 0.25em 0.5em;
    text-align: center;
  }
  .nav1 li {
    font-size: 0.7em;
  }
  .nav1 li.active {
    background: #bed600;
    background: -moz-linear-gradient(45deg, #bed600 0%, #8cb700 100%);
    background: -webkit-linear-gradient(45deg, #bed600 0%,#8cb700 100%);
    background: linear-gradient(45deg, #bed600 0%,#8cb700 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bed600', endColorstr='#8cb700',GradientType=1 );
    font-weight: bold;
    color: #212121;
  }
  .nav2 li.active {
    background: #bed600;
    background: -moz-linear-gradient(45deg, #bed600 0%, #8cb700 100%);
    background: -webkit-linear-gradient(45deg, #bed600 0%,#8cb700 100%);
    background: linear-gradient(45deg, #bed600 0%,#8cb700 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bed600', endColorstr='#8cb700',GradientType=1 );
    font-weight: bold;
    color: #212121;
  }
  .nav2 li {
    font-size: 1em;
    text-align: left;
  }
  .nav .material-icons {
    font-size: 3em;
    display: block;
  }
  .nav2::after {
    content: '«';
    position: absolute;
    right: -16px;
    top: calc(50% - 20px);
    font-size: 2em;
    background: #333;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 0 3px 6px;
    cursor: pointer;
  }
</style>
<nav class="left">
  <ul class="nav nav1">
    <li class="active"><i class="material-icons">home</i>Home</li>
    <li><i class="material-icons">people</i>Manage</li>
    <li><i class="material-icons">show_chart</i>Reports</li>
    <li><i class="material-icons">share</i>Marketing</li>
    <li><i class="material-icons">settings</i>Settings</li>
  </ul>
  <ul class="nav nav2">
    <li><img src="https://i.imgur.com/cr5TuHn.jpg" alt=""></li>
    <li class="active">Manage Employees</li>
    <li>Vouchers</li>
    <li>Order</li>
    <li>Return</li>
    <li>Email Subsidy Reminders</li>
  </ul>
</nav>
<div class="container" style="left: 145px; position: relative; width: calc(100% - 290px)">
  <div class="row mb-1">
    <div class="col-md-12">
      <div class="alert alert-primary" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>Tip:</strong> Personalize your dashboard to see exactly what you need to know as soon as you log in.
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <button class="btn-primary color-primary mb-4" style="font-size: 1.4em; margin: 0 auto; display: block;">Customize Dashboard</button>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6">
      <h3 class="text-secondary">Exmployee Participation</h3>
      <div class="progress">
        <div class="progress-bar bg-green" role="progressbar" style="width: 96.4%; height: 24px; padding-top: 2px;" aria-valuenow="586" aria-valuemin="0" aria-valuemax="608">586 Eligible Employees</div>
      </div>
      <div class="m-3" style="margin: 0 auto; text-align: center;"><a class="btn btn-primary" href="#" role="button">Notify Employees</a></div>
    </div>
    <div class="col-sm-6">
      <div class="list-group" style="margin: 0 auto;">
        <h3 class="text-secondary">Eligible Soon</h3>
        <a href="#" class="list-group-item bg-dark text-white">Eligible Next Week: <strong>3</strong></a>
        <a href="#" class="list-group-item bg-dark text-white">Eligible Next Month: <strong>0</strong></a>
      </div>
    </div>
  </div>

  <div class="row">
    <!-- <div class="col-md-2">
      <img src="http://placehold.it/200x100" alt="Brand logo">
    </div> -->
    <div class="col-sm-12">
      <h2>Previous Orders</h2>
      <table class="table table-responsive">
        <thead class="thead-inverse">
          <tr>
            <th>Date</th>
            <th>Order</th>
            <th>Style</th>
            <th>Amount</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">8/4/17</th>
            <td>141451</td>
            <td>LEHI009</td>
            <td>$99.99</td>
            <td class="text-center">
              <button type="button" class="btn color-primary btn-sm" style="display: inline;">Order Again</button>
              <button type="button" class="btn btn-dark btn-sm" style="display: inline;">Return</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2/23/15</th>
            <td>12345678</td>
            <td>LEHI001</td>
            <td>$99.99</td>
            <td class="text-center">
              <button type="button" class="btn color-primary btn-sm">Order Again</button>
              <button type="button" class="btn btn-disabled btn-sm" data-toggle="tooltip" data-placement="top" title="Cannot return this order">Return</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2/23/15</th>
            <td>12345678</td>
            <td>LEHI001</td>
            <td>$99.99</td>
            <td class="text-center">
              <button type="button" class="btn color-primary btn-sm">Order Again</button>
              <button type="button" class="btn btn-disabled btn-sm" data-toggle="tooltip" data-placement="top" title="Cannot return this order">Return</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Most Popular Styles</h4>
          <div style="text-align: center; margin: 0 auto;"><img src="https://i.imgur.com/OTcRM2p.jpg" style="width: 245px;" alt=""></div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Monthly Orders</h4>
          <img src="https://i.imgur.com/v1XweL1.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="row mt-3">
    <div class="col-sm-12">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="topstypes-tab" data-toggle="tab" href="#topstypes" role="tab" aria-controls="topstypes" aria-expanded="true">Top Styles YTD</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="monthylsales-tab" data-toggle="tab" href="#monthylsales" role="tab" aria-controls="monthylsales">Monthly Sales</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="quantity-tab" data-toggle="tab" href="#quantity" role="tab" aria-controls="quantity">Quantity YTD</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="purchase-tab" data-toggle="tab" href="#purchase" role="tab" aria-controls="purchase">Purchase YTD</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="subsidy-tab" data-toggle="tab" href="#subsidy" role="tab" aria-controls="subsidy">Subsidy Sales</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="returns-tab" data-toggle="tab" href="#returns" role="tab" aria-controls="returns">Return History</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="topstypes" role="tabpanel" aria-labelledby="topstypes-tab">
          Top Styles YTD
          <img src="https://i.imgur.com/ci8HCj2.jpg">
        </div>
        <div class="tab-pane fade" id="monthylsales" role="tabpanel" aria-labelledby="monthylsales-tab">
          Monthly Sales
          <img src="https://i.imgur.com/ci8HCj2.jpg">
        </div>
        <div class="tab-pane fade" id="quantity" role="tabpanel" aria-labelledby="quantity-tab">
          Quantity YTD
          <img src="https://i.imgur.com/ci8HCj2.jpg">
        </div>
        <div class="tab-pane fade" id="purchase" role="tabpanel" aria-labelledby="purchase-tab">
          Quantity YTD
          <img src="https://i.imgur.com/ci8HCj2.jpg">
        </div>
        <div class="tab-pane fade" id="subsidy" role="tabpanel" aria-labelledby="subsidy-tab">
          Quantity YTD
          <img src="https://i.imgur.com/ci8HCj2.jpg">
        </div>
        <div class="tab-pane fade" id="returns" role="tabpanel" aria-labelledby="returns-tab">
          Quantity YTD
          <img src="https://i.imgur.com/ci8HCj2.jpg">
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div class="row my-3">
    <div class="list-group col-sm-12 col-md-4">
      <h2 class="text-secondary">Program Management</h2>
      <a href="#" class="list-group-item list-group-item-action">Jump Station</a>
      <a href="#" class="list-group-item list-group-item-action">Return History</a>
      <a href="#" class="list-group-item list-group-item-action">Order History</a>
      <a href="#" class="list-group-item list-group-item-action">Manage Posters</a>
    </div>
    <div class="list-group col-sm-12 col-md-4">
      <h2 class="text-secondary">Reports</h2>
      <a href="#" class="list-group-item list-group-item-action">Return History</a>
      <a href="#" class="list-group-item list-group-item-action">Top Selling Styles</a>
      <a href="#" class="list-group-item list-group-item-action">Top Producing Days</a>
      <a href="#" class="list-group-item list-group-item-action">Employee Participation</a>
    </div>
    <div class="list-group col-sm-12 col-md-4">
      <h2 class="text-secondary">Marketing</h2>
      <a href="#" class="list-group-item list-group-item-action">Product Poster</a>
      <a href="#" class="list-group-item list-group-item-action">Spec Sheet</a>
      <a href="#" class="list-group-item list-group-item-action">Order Instructions</a>
      <a href="#" class="list-group-item list-group-item-action">Order Form</a>
    </div>
  </div> -->
  <div class="row mb-2">
    <div class="col-sm-12">
      <button type="button" class="btn color-primary btn-lg btn-block">Shop All Protective Footwear</button>
    </div>
  </div>
</div>
