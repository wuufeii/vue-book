<template>
	<div class="container">
		<div>
  	<h1>{{ message }}</h1>
  	<h5>{{ number }}</h5>
  	<h3>{{ title }}</h3>
    <h2>Back to
      <router-link to="/">vue-book</router-link>
    </h2>
    <h2>Back to
      <a href="https://wuufeii.github.io">home</a>
    </h2>
  	<h4>{{ note }}</h4>
  </div>
	</div>
  
</template>

<script>
export default {
  name: 'PageNotFound',
  data() {
  	return {
  	  message: 'Upsss!',
  	  number: '404',
  	  title: 'Page Not Found',
  	  note: 'Sorry but the page you are looking for doesn\'t exist.'
  	}
  }
}
</script>

<style scoped>
	.container {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background: #e14eca;
  background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);
}
div {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0 auto;
}

h1 {
    position: absolute;
    top: 3rem;
    left: 1.6rem;
    margin: 0 auto;
    font-size: 4.4rem;
    color: white;
}
h5 {
    position: relative;
    z-index: 1;
    font-size: 7rem;
    margin-left: -4px;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.2) !important;
    margin: 0 auto;
}
h3 {
	width: 100%;
	margin: 0;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 1rem;
}
h4 {
	margin: 0;
  font-size: .6em;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
}
h2 {
  text-align: center;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.5);
}
</style>