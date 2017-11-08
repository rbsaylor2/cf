---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: shop
---
<nav class="navbar navbar-expand-lg navbar-light bg-light container" style="width: 100%;">
  <a class="navbar-brand" href="#"><img src="https://i.imgur.com/cr5TuHn.jpg" alt=""></a>
  <h4 class="mr-auto">Test Account: <small>Test Full Line (028533/00002)</small></h4>
  <div class="text-center">
    <button type="button" class="btn btn-secondary">Logout</button>
    <a class="nav-link" href="{{ site.url }}{{ site.baseurl }}/es" style="padding: 0; color: #999;">Español</a>
  </div>
  <!-- <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div> -->
</nav>
<div class="container">
  <div class="row mb-1">
    <div class="col-md-12">
      <div class="alert alert-warning" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>Notice:</strong> Some Timberland styles may have a shipping delay.
      </div>
      <!-- <div class="alert alert-success" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h1>
          Account Setup Progress
        </h1>
        <p>Please finish setting up your account to take full advantage of CustomFit.</p>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
      </div> -->
      <!-- <div class="alert alert-success" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="alert-heading">Well done!</h4>
        <p>It looks like 77% of your employees have purchased safety footwear! Here are some ways to ensure they're all protected:</p>
        <hr>
        <ul>
          <li>Send out an <a href="#">email notification</a> from the command center</li>
          <li><a href="#">Print out a catalog</a> to help selection</li>
          <li>Get an <a href="#">on-site kiosk</a></li>
        </ul>
      </div> -->
      <div class="row mb-4">
        <div class="col-sm-12">
          <h2>Place New Order</h2>
          <div class="row">
            <div class="col-sm-6" style="text-align: right; display: flex; align-items: flex-end; justify-content: flex-end;">
              <div class="btn-group btn-group-lg" role="group" aria-label="Take action">
                <!-- <button type="button" class="btn color-primary" style="border: 1px solid #212121;" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapse01 collapse02 collapse03 collapse04">Multi-Employee</button> -->
                <button type="button" class="btn color-primary" style="border: 1px solid #212121;" data-toggle="tooltip" data-placement="top" title="Order for multiple employees">Multi-Employee</button>
                <button type="button" class="btn color-primary" style="border: 1px solid #212121;" data-toggle="tooltip" data-placement="top" title="Order many pair at once">Bulk</button>
                <button type="button" class="btn color-primary" style="border: 1px solid #212121;" data-toggle="tooltip" data-placement="top" title="Order for one person">Single</button>
              </div>
            </div>
            <div class="col-sm-6" style="text-align: left;">
              Or upload a new order (<a href="#">Download sample file</a>)
              <label class="custom-file">
                <input type="file" id="file2" class="custom-file-input">
                <span class="custom-file-control"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr>
  <div class="row mb-4">
    <div class="col-md-5">
      <h2>Employee Management</h2>
    </div>
    <div class="col-md-7">
      <div class="input-group">
        <input type="text" class="form-control" placeholder='Examples: "John Smith", "12345", "email@example.com"' aria-label="" style="border: 1px solid #ccc; height: 38px; box-sizing: border-box;">
        <span class="input-group-btn">
          <button class="btn color-primary" type="button">Search</button>
        </span>
      </div>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col-sm-12">
      <p class="lead">
        Results:
        <span class="badge badge-pill badge-secondary">Cody Saylor <button type="button" class="close" data-dismiss="alert" aria-label="Close" style="height: 15px; color: white; bottom: 6px; left: 4px; position: relative;"><i class="material-icons" style="font-size: 0.8em; color: white;" aria-hidden="true">close</i></button></span>
        <span class="badge badge-pill badge-secondary">Aaron McClay <button type="button" class="close" data-dismiss="alert" aria-label="Close" style="height: 15px; color: white; bottom: 6px; left: 4px; position: relative;"><i class="material-icons" style="font-size: 0.8em; color: white;" aria-hidden="true">close</i></button></span>
        <span class="badge badge-pill badge-secondary">John Doe <button type="button" class="close" data-dismiss="alert" aria-label="Close" style="height: 15px; color: white; bottom: 6px; left: 4px; position: relative;"><i class="material-icons" style="font-size: 0.8em; color: white;" aria-hidden="true">close</i></button></span>
        <span class="badge badge-pill badge-secondary">Jane Smith <button type="button" class="close" data-dismiss="alert" aria-label="Close" style="height: 15px; color: white; bottom: 6px; left: 4px; position: relative;"><i class="material-icons" style="font-size: 0.8em; color: white;" aria-hidden="true">close</i></button></span>
        <span class="badge badge-pill badge-secondary">First Last <button type="button" class="close" data-dismiss="alert" aria-label="Close" style="height: 15px; color: white; bottom: 6px; left: 4px; position: relative;"><i class="material-icons" style="font-size: 0.8em; color: white;" aria-hidden="true">close</i></button></span>
        <span class="badge badge-pill badge-secondary">Bob Smith <button type="button" class="close" data-dismiss="alert" aria-label="Close" style="height: 15px; color: white; bottom: 6px; left: 4px; position: relative;"><i class="material-icons" style="font-size: 0.8em; color: white;" aria-hidden="true">close</i></button></span>
      </p>
      <table class="table">
        <thead class="thead-inverse">
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Last Order</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">141451</th>
            <td>Cody Saylor</td>
            <td>9/27/17</td>
            <td class="center">
              <button type="button" class="btn color-primary btn-sm" style="display: inline;">Order Again</button>
              <button type="button" class="btn btn-dark btn-sm" style="display: inline;">Return</button>
              <button type="button" class="btn btn-secondary btn-sm" style="display: inline;">Edit</button>
              <button type="button" class="btn btn-danger btn-sm" style="display: inline;">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">12345678</th>
            <td>Aaron McClay</td>
            <td>4/14/16</td>
            <td class="center">
              <button type="button" class="btn color-primary btn-sm" style="display: inline;">Order Again</button>
              <button type="button" class="btn btn-dark btn-sm" style="display: inline;">Return</button>
              <button type="button" class="btn btn-secondary btn-sm" style="display: inline;">Edit</button>
              <button type="button" class="btn btn-danger btn-sm" style="display: inline;">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">123562</th>
            <td>John Doe</td>
            <td>9/3/15</td>
            <td class="center">
              <button type="button" class="btn color-primary btn-sm" style="display: inline;">Order Again</button>
              <button type="button" class="btn btn-dark btn-sm" style="display: inline;">Return</button>
              <button type="button" class="btn btn-secondary btn-sm" style="display: inline;">Edit</button>
              <button type="button" class="btn btn-danger btn-sm" style="display: inline;">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">6346346</th>
            <td>Jane Smith</td>
            <td>1/16/16</td>
            <td class="center">
              <button type="button" class="btn color-primary btn-sm" style="display: inline;">Order Again</button>
              <button type="button" class="btn btn-dark btn-sm" style="display: inline;">Return</button>
              <button type="button" class="btn btn-secondary btn-sm" style="display: inline;">Edit</button>
              <button type="button" class="btn btn-danger btn-sm" style="display: inline;">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">6756565</th>
            <td>First Last</td>
            <td>12/9/16</td>
            <td class="center">
              <button type="button" class="btn color-primary btn-sm" style="display: inline;">Order Again</button>
              <button type="button" class="btn btn-dark btn-sm" style="display: inline;">Return</button>
              <button type="button" class="btn btn-secondary btn-sm" style="display: inline;">Edit</button>
              <button type="button" class="btn btn-danger btn-sm" style="display: inline;">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">555555</th>
            <td>Bob Smith</td>
            <td>5/5/13</td>
            <td class="center">
              <button type="button" class="btn color-primary btn-sm" style="display: inline;">Order Again</button>
              <button type="button" class="btn btn-dark btn-sm" style="display: inline;">Return</button>
              <button type="button" class="btn btn-secondary btn-sm" style="display: inline;">Edit</button>
              <button type="button" class="btn btn-danger btn-sm" style="display: inline;">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col-md-5">
      <h2>Order Management</h2>
    </div>
    <div class="col-md-7">
      <div class="input-group">
        <input type="text" class="form-control" placeholder='Previous Order / Return / Name' aria-label="Previous Order / Return / Name" style="border: 1px solid #ccc; height: 38px; box-sizing: border-box;">
        <span class="input-group-btn">
          <button class="btn color-primary" type="button">Search</button>
        </span>
      </div>
    </div>
  </div>
  <div class="row mb-4">
    <!-- <div class="col-md-2">
      <img src="http://placehold.it/200x100" alt="Brand logo">
    </div> -->
    <div class="col-md-12">
      <div class="row">
          <!-- <h2>Previous Orders</h2> -->
          <p class="lead">
            Results:
            <span class="badge badge-pill badge-secondary">141451 <button type="button" class="close" data-dismiss="alert" aria-label="Close" style="height: 15px; color: white; bottom: 6px; left: 4px; position: relative;"><i class="material-icons" style="font-size: 0.8em; color: white;" aria-hidden="true">close</i></button></span>
          </p>
          <table class="table">
            <thead class="thead-inverse">
              <tr>
                <th>Order</th>
                <th>Style</th>
                <th>Size</th>
                <th>Width</th>
                <th>Name</th>
                <th>Date</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">141451</th>
                <td>LEHI009</td>
                <td>12</td>
                <td>Medium</td>
                <td>Cody Saylor</td>
                <td>8/4/17</td>
                <td class="text-right">
                  <button type="button" class="btn color-primary btn-sm" style="display: inline;">Order Again</button>
                  <button type="button" class="btn btn-dark btn-sm" style="display: inline;">Return</button>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>

  <div class="row mb-2">
    <div class="col-sm-12">
      <button type="button" class="btn color-primary btn-lg btn-block">Shop All Protective Footwear</button>
    </div>
  </div>
</div>
