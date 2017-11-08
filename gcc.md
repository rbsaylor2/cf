---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: gcc
---
  <div class="container">
    <h1>Global Command Center Dashboard</h1>
    <div class="row">
      <div class="col-sm-6">
        <h3 class="text-secondary">Utilization</h3>
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
    <div class="row my-3">
      <div class="list-group col-sm-12 col-md-4">
        <h2 class="text-secondary">Program Management</h2>
        <!-- <a href="#" class="list-group-item list-group-item-action">Manage Global Program</a> -->
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
        <h2 class="text-secondary">Settings</h2>
        <a href="#" class="list-group-item list-group-item-action">Communication Preferences</a>
        <a href="#" class="list-group-item list-group-item-action">Change Password</a>
        <a href="#" class="list-group-item list-group-item-action">Upload Logo</a>
        <a href="#" class="list-group-item list-group-item-action">Reset All Employees</a>
      </div>
    </div>
    <div class="row mt-3">
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
    </div>
  </div>
