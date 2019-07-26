<template>
<div>
	<div class="title">
		<h1>The Tip Giver</h1>
	</div>
	<div class="welcome-page d-flex align-items-end justify-content-center">
		<div>
			<h1>It's All About the Tips</h1>
			<h2>The Best Tip Spliting Machine in the World ! ! !</h2>	
		</div>
	</div>	
	<div class="lines">
		<div class="line-2 d-flex justify-content-between">
			<div class="icons">
				<svg width="60" height="60" viewBox="0 0 30 30">
  					<path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"></path>
				</svg>
			</div>
			<div class="icons">
				<svg width="50" height="50" viewBox="0 0 24 24">
  					<path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
				</svg>
			</div>
		</div>
	</div>	
</div>
</template>

<style scoped>
	.title h1 {
		font-size: 36px;
		border-bottom: 2px dashed #000;
		padding: 1rem 0;
		margin: 0;
		background: #dcdcdc50;
	}

	.welcome-page {
		margin: 4rem auto 0 auto;
		display: block;
		padding: 10px;
	}

	h1 {
		font-size: 70px;
		text-align: center;
		border-bottom: 10px solid red;
		line-height: 1.4;
	}

	h2 {
		display: inline-block;
		border-bottom: 8px solid green;
		line-height: 1.71;
		text-align: center;
	}

	.lines {
		margin-top: 2rem;
	}

	.line-2 {
		height: 50px;
		width: 75%;
		border-bottom: 4px dashed #dcdcdc;
		margin: 1rem auto 0 auto; 
	}

@media (max-width: 768px) {
	h1 { font-size: 46px; }
	h2 { font-size: 26px; }
}

@media (max-width: 567px) {
	h1 { font-size: 34px; }
	h2 { font-size: 20px; }
}

@media (max-width: 320px) {
	h1 { font-size: 28px; }
	h2 { font-size: 18px; }
}
</style>