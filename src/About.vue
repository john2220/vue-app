<template>
	<div class="about-body d-flex align-items-center justify-content-center">
		<div class="content">
			<h2>How it works</h2>
			<p>In an ideal world we are doing 8 hour shifts. In the real world we rarely do so.
			The tip giver is a little tool that helps anyone who is being tiped, find their fair share.
			</p>
			<p>So how it works? Since the 8 hour shift is the norm, we will give it the number 1. Anything more or less will have a certain value by dividing the number of hours with 8 (which represents 1 shift). </p>
			<p>For example:</p>
			<p>If you worked a 9 hour shift, you divide it by 8 to find your shift number.</p>
			<p>9 / 8 =  1.125</p>
			<p>If you worked a 7 hour shift, you divide it by 8 again.</p>
			<p>	7 / 8 = 0.875</p>
			<p>Simple enought right?</p>
			<p>Now if you have tips of a 100$ total and 4 people who worked the following hours . . .
				1, 1, 1.125 and 1.5 . . . that makes a sum of 4.625 shift hours in total.
			</p>
			<p>To find the value for 1 you divide the total tips by 4.625, which is . . .</p>
			<p>. . around 21.6</p>
			<p>Now to find the value for 1.125 and 1.5 respectively, you multiply the value of 
			1 ( around 21.6  in our case ) with the shift number that the value we want to find.
			</p>
			<p>21.6 * 1.5 = 32.4</p>
			<p>21.6 * 1.125 = 24.3</p>

			<p>
			Now to verify our results we can add all the values to check if it adds up 100.
			As you might guessed we have to make some rounding. <br />
			21.6 + 21.6 + 24.3 + 32.4 = 99.9
			</p>
			<p>the rest is for the piggy bank.</p>
			<p>See? Now we brought a bit more justice to the world of tiping.</p>
			<h4>Now get back to work</h4>	
		</div>
			
	</div>
	
</template>

<style scoped>
	.about-body {
		background: #00000010;
		width: 100%;
		margin: 0 auto;
		display: block;
	}

	.content {
		width: 50%;
	}

	.content h2 {
		border-bottom: 6px solid green;
		font-size: 40px;
		font-family: sans-serif;
		margin: 4rem 0 2rem 0;
	}

	.content p {
		font-size: 17px;
		line-height: 1.71;
		color: #2d2d2d;
	}

	.content h4 {
		margin: 2rem 0;
		font-size: 20px;
	}

@media (max-width: 768px) {
	.content {
		width: 86%;
	}

	.content h2 {
		font-size: 30px;
	}

	.content p {
		font-size: 15px;
	}
}
</style>