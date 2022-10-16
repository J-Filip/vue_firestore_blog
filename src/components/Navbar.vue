<template>
  <header>
    <h1>GJGG blog</h1>
    <nav>
      <!-- we use a custom component router-link to create links. 
        This allows Vue Router to change the URL without reloading the page, handle URL generation as well as its encoding.  -->
      <router-link :to="{ name: 'Home' }">Home </router-link>
      <router-link :to="{ name: 'CreateBlog' }">Create new </router-link>
      <router-link :to="{ name: 'RealTime' }">LIVE </router-link>
    </nav>
  </header>
</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
header h1 {
  color: #d4d1e6;
  font-size: 58px;
}
header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}
header a.router-link-active {
  color: #444;
  font-weight: bold;
}
</style>
