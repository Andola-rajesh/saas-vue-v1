<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
  <div class="">
    <header class="header-fixed">
		<div class="header-limiter">
		<h1><a href="#">Company<span>logo</span></a></h1>
		<nav>
			<RouterLink to="/signin">SignIn</RouterLink>
    		<RouterLink to="/signup">SignUp</RouterLink>
		</nav>
	</div>
</header>
  </div>
</template>

<script>
export default {
  name: 'HeaderTemplate',
  components: {
    
  },
  props: {
   
  },
  data() {
    return {
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-fixed {
	background-color:#e5dbdb;
	box-shadow:0 1px 1px #ccc;
	padding: 20px 40px;
	height: 80px;
	color: black;
	box-sizing: border-box;
	top:-100px;

	-webkit-transition:top 0.3s;
	transition:top 0.3s;
}

.header-fixed .header-limiter {
	max-width: 1200px;
	text-align: center;
	margin: 0 auto;
}

.header-fixed-placeholder{
	height: 80px;
	display: none;
}

/* Logo */

.header-fixed .header-limiter h1 {
	float: left;
	font: normal 28px Cookie, Arial, Helvetica, sans-serif;
	line-height: 40px;
	margin: 0;
}

.header-fixed .header-limiter h1 span {
	color: #5383d3;
}

/* The navigation links */

.header-fixed .header-limiter a {
	color: black;
	text-decoration: none;
}

.header-fixed .header-limiter nav {
	font:16px Arial, Helvetica, sans-serif;
	line-height: 40px;
	float: right;
}

.header-fixed .header-limiter nav a{
	display: inline-block;
	padding: 0 5px;
	text-decoration:none;
	color: black;
	opacity: 0.9;
}

.header-fixed .header-limiter nav a:hover{
	opacity: 1;
}

.header-fixed .header-limiter nav a.selected {
	color: #608bd2;
	pointer-events: none;
	opacity: 1;
}

/* Fixed version of the header */

body.fixed .header-fixed {
	padding: 10px 40px;
	height: 50px;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1;
}

body.fixed .header-fixed-placeholder {
	display: block;
}

body.fixed .header-fixed .header-limiter h1 {
	font-size: 24px;
	line-height: 30px;
}

body.fixed .header-fixed .header-limiter nav {
	line-height: 28px;
	font-size: 13px;
}


/* Making the header responsive */

@media all and (max-width: 600px) {

	.header-fixed {
		padding: 20px 0;
		height: 75px;
	}

	.header-fixed .header-limiter h1 {
		float: none;
		margin: -8px 0 10px;
		text-align: center;
		font-size: 24px;
		line-height: 1;
	}

	.header-fixed .header-limiter nav {
		line-height: 1;
		float:none;
	}

	.header-fixed .header-limiter nav a {
		font-size: 13px;
	}

	body.fixed .header-fixed {
		display: none;
	}

}
body {
	margin: 0;
	padding: 0;
	height: 1500px;
}
</style>
