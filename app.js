const sliderImg = document.querySelector('.slider-img');
const images = ['Image-1.jpg', 'Image-2.jpg', 'Image-3.jpg', 'Image-4.jpg', 'Image-5.jpg', 'Image-6.jpg'];
let i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return sliderImg.setAttribute('src', images[i]);
	
}