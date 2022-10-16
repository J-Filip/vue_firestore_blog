// TODO: izgled spinnera ovisno o podacima koji se loadaju - blogs, blog solo, slike...


<template>
  <div class="skeletonBody">

    <!-- <div class="spin"></div> -->
    <p class="skeleton skeleton-text"></p>
  <div class="skeleton skeleton-text"></div>
  <br>
  <br>
  <div class="skeleton skeleton-text"></div>
  <div class="skeleton skeleton-text"></div>
  <div class="skeleton skeleton-text"></div>
  <div class="skeleton skeleton-text"></div>
</div>
</template>

<style>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: rgb(195, 130, 238);
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}

.skeletonBody {
  max-width: 1200px;
  margin: 20px auto;
}

.skeleton {
      animation: skeleton-loading 1s linear infinite alternate
}
.skeleton-text {
      width: 100%;
      height: .7rem;
      margin: .45rem;
      border-radius: .125rem;
      animation: skeleton-loading 1s linear infinite alternate
}
.skeleton-text:last-child {
      width: 80%;
      margin-bottom: 0;
}

@keyframes skeleton-loading {
  0% {
      background-color: #e9e9e9;

  }
  100% {
      background-color: #dadada;

  }
}
</style>
