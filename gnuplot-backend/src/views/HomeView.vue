<template>
  <div class="spinner-border text-primary" role="status">
    <span class="sr-only"></span>
  </div>
  <img src="../assets/logo.png" class="img-fluid" alt="Logo">

  <div class="row">
    <div class="col">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Function</span>
        <input type="text" class="form-control" placeholder="sin(x)" aria-label="Username"
               aria-describedby="basic-addon1">
      </div>
    </div>
    <div class="col">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Function</span>
        <input type="text" class="form-control" placeholder="sin(x)" aria-label="Username"
               aria-describedby="basic-addon1">
      </div>
    </div>
    <div class="col">
      <div class="input-group">
        <span class="input-group-text">First and last name</span>
        <input type="text" aria-label="First name" class="form-control">
        <input type="text" aria-label="Last name" class="form-control">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-8">
      <div class="input-group mb-3">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">Dropdown
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
        <input type="text" class="form-control" aria-label="Text input with dropdown button">
      </div>
    </div>
    <div class="col-4">col-4</div>
  </div>
  <div class="row">
    <div class="input-group mb-3">
      <label class="input-group-text" for="inputGroupSelect01">Options</label>
      <select class="form-select" id="inputGroupSelect01">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="input-group">
      <span class="input-group-text">With textarea</span>
      <textarea class="form-control" aria-label="With textarea"></textarea>
    </div>
    <div class="input-group mb-3">
      <label class="input-group-text" for="inputGroupFile01">Upload</label>
      <input type="file" class="form-control" id="inputGroupFile01">
    </div>
  </div>
  <form class="form-inline">
    <button class="btn btn-outline-success" type="button">Main button</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
  </form>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {}
}
</script>
