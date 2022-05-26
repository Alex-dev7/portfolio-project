function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    function animation(currentTime){
       if(startTime === null) startTime = currentTime;
       var timeElapsed = currentTime - startTime;
       var run = ease(timeElapsed, startPosition, distance, duration);
       window.scrollTo(0, run);
       if(timeElapsed < duration) requestAnimationFrame(animation);
   }

   function ease(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};



   requestAnimationFrame(animation);

    console.log(startPosition);
}


var about = document.querySelector('.about')
var projects = document.querySelector('.projects')
var contact = document.querySelector('.contact')
var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');
var section3 = document.querySelector('.section3');
var section4 = document.querySelector('.section4');

//this is for the section2 that is going to be located in the footer to go back to the top
//assign another section in the footer



about.addEventListener('click', function(){
    smoothScroll('.section2', 100);
 });

 projects.addEventListener('click', function(){
    smoothScroll('.section3', 100);
 });

section1.addEventListener('click', function(){
   smoothScroll('.section2', 100);
});


//event listener for the footer
contact.addEventListener('click', function(){
    smoothScroll('.section4', 100);
 });
   



