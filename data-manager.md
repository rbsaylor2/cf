---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: shop
---
<div class="container">
  <!-- <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-sm-12 col-md-6 center">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Order / Return / Name" aria-label="Order / Return / Name" style="border: 1px solid #ccc; height: 38px; box-sizing: border-box;">
            <span class="input-group-btn">
              <button class="btn btn-secondary" type="button">Search</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="row">
    <div class="col-md-4">
      <h2>Search Employees</h2>
    </div>
    <div class="col-md-8">
      <div class="input-group">
        <input type="text" class="form-control" placeholder='Examples: "John Smith", "12345", "email@example.com"' aria-label="" style="border: 1px solid #ccc; height: 38px; box-sizing: border-box;">
        <span class="input-group-btn">
          <button class="btn btn-primary" type="button">Search</button>
        </span>
      </div>
    </div>
  </div>
  <div class="row">
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
              <button type="button" class="btn btn-primary btn-sm" style="display: inline;">Order</button>
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
              <button type="button" class="btn btn-primary btn-sm" style="display: inline;">Order</button>
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
              <button type="button" class="btn btn-primary btn-sm" style="display: inline;">Order</button>
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
              <button type="button" class="btn btn-primary btn-sm" style="display: inline;">Order</button>
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
              <button type="button" class="btn btn-primary btn-sm" style="display: inline;">Order</button>
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
              <button type="button" class="btn btn-primary btn-sm" style="display: inline;">Order</button>
              <button type="button" class="btn btn-dark btn-sm" style="display: inline;">Return</button>
              <button type="button" class="btn btn-secondary btn-sm" style="display: inline;">Edit</button>
              <button type="button" class="btn btn-danger btn-sm" style="display: inline;">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- <div class="row container">
    <div class="col-sm-12">
      <h2>Place New Order</h2>
      <div class="row">
        <div class="col-sm-6" style="text-align: right; display: flex; align-items: flex-end; justify-content: flex-end;">
          <div class="btn-group btn-group-lg" role="group" aria-label="Take action">
            <button type="button" class="btn btn-primary" style="border: 1px solid #212121;" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Multi-Employee</button>
            <button type="button" class="btn btn-primary" style="border: 1px solid #212121;" data-toggle="tooltip" data-placement="top" title="Place an order for m">Bulk</button>
            <button type="button" class="btn btn-primary" style="border: 1px solid #212121;" data-toggle="tooltip" data-placement="top" title="Place a single order">Single</button>
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
  </div> -->
</div>
