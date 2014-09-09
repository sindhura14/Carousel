


document.addEventListener('DOMContentLoaded',function(){

   Slider_Constructor.prototype.moveToNext = function(){
                                   this.currentSlide++;
                                   var finalPos = this.currentSlide * this.slideWidth;
                                   var initPos = this.sliderObj.scrollLeft;
                                   sliderObj = this.sliderObj;
                                   var id = setInterval(function(){
                                                  sliderObj.scrollLeft = initPos++;
                                                    if(initPos > finalPos)
                                                      clearInterval(id);
                                       },1);
                               };
   Slider_Constructor.prototype.moveToPrevious = function(){
                                         this.currentSlide--;
                                         var finalPos =this.currentSlide * this.slideWidth;
                                         var initPos = this.sliderObj.scrollLeft;
                                         sliderObj = this.sliderObj;
                                         var id = setInterval(function(){
                                                     sliderObj.scrollLeft = initPos--;
                                                       if(initPos < finalPos)
                                                          clearInterval(id);
                                            },1);

                               };

    function Slider_Constructor(){
             this.slides = [];
             this.sliderObj = document.getElementsByClassName('slider')[0];
             this.currentSlide = 0;
             this.slideWidth = 480;

        }

 var slider = new Slider_Constructor();

 console.log(slider);
  document.getElementById('arrow_left').addEventListener('click',function(){
                 slider.moveToPrevious();
               });


   document.getElementById('arrow_right').addEventListener('click',function(){
                 slider.moveToNext();
               });
});