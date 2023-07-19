$(document).ready(function(){
    var timeline = gsap.timeline();
    gsap.set(".wrapper", {transformOrigin: "50% 50%"});
    timeline.from(".a", {duration:0.4, opacity:0.8, y: -400,delay:0.5});
    timeline.from(".b, .c", {duration: 0.5, opacity:0.8, y: -300, stagger: 0.2, delay:-0.1});
    timeline.from(".d, .e", {duration: 0.5, opacity:0.8, y: 1000, stagger: 0.2, delay:-0.3});
    timeline.from(".wrapper", {duration:0.8, opacity:0, y:1000});
    timeline.from(".prompt", {duration:0.4, opacity:0, scale:0.3});
    $(".button").click(function() {

        
        var tl = gsap.timeline();



        tl.to(".prompt", {duration:0.2, opacity:0});
        gsap.set(".lid", {transformOrigin: "0% 0%"});
        tl.to(".wrapper", {duration: 0.9, y: 65});
        tl.to(".button", {duration: 0.3, y: 40, opacity: 0, delay:-0.1});
        tl.to(".a, .b, .c", {duration: 0.4, y: -120});
        tl.to(".d, .e", {duration: 0.4, y: 120, delay: -0.4});
        tl.to(".lid", {duration: 0.4, borderTop: "7.7vw solid #3760C9", delay: -0.4});
        tl.to(".lid", {duration: 1.3 , rotationX: 180, borderTop: "7.7vw solid #4c7ece", zIndex: 2});
        tl.to(".letter", {duration: 1.3, y: -150, delay: -0.8 });
        tl.to(".back", {duration:0.01, height: "100.1%", top: "-0.1%", delay:-0.01}) 
        tl.to(".back, .shadow, .envelope, .lid, .button", {duration:1.1, y:450, opacity:0.0, delay:-0.9});


        tl.to(".back, .shadow, .envelope, .lid, .button", {duration:0.1, y: 0, x: -1000, delay:-0.1})
        
        tl.to(".back, .shadow, .envelope, .lid, .button", {duration:0.4, x: -500, opacity: 1, delay:0.4})
        tl.to(".button", {duration:0.4, x: -450, y: 36  , opacity: 1, delay:-0.4})

        tl.to(".letter", {duration: 0.4, x: 260, y: -10, width: "40vw", height: "32vw", delay: -0.4});
        tl.from(".content", {duration: 0.5, opacity:0})
        tl.to(".back, .shadow, .envelope, .lid, .button", {duration: 0.7,x: -1100, opacity:0, delay:0.1})


        var tl2 = gsap.timeline();

        tl2.to(".b", {duration: 1, y: 400, ease: "bounce", delay:0.5 });
        tl2.to(".a", {duration: 1, y: 250, ease: "back", delay: -0.8});
        tl2.to(".c", {duration: 1, y: 150, ease: "back", delay: -1.1});

        // tl2.addLable("floating", "+=1");
        // tl2.to()
        

        
        tl.add(tl2);

        var tl3 = gsap.timeline({repeat: -1,yoyo:true, repeatRefresh:true});

        tl3.to(".a", {  
          x: function(){ return getRand(-50,50) },
          y: function(){ return getRand(200,300) },
          rotation: function(){ return getRand(-5,5) },
          duration: function(){ return getRand(0.3, 0.8) },
          transformOrigin:'50% 50%',
          ease:"sine.inOut"
            }
        );

        tl3.to(".b", {  
            x: function(){ return getRand(-100,100) },
            y: function(){ return getRand(350,400) },
            rotation: function(){ return getRand(-5,5) },
            duration: function(){ return getRand(0.5, 1.5) },
            transformOrigin:'50% 50%',
            ease:"sine.inOut"
              }
          );

          tl3.to(".c", {  
            x: function(){ return getRand(-100,100) },
            y: function(){ return getRand(100,200) },
            rotation: function(){ return getRand(-5,5) },
            duration: function(){ return getRand(0.4, 1.1) },
            transformOrigin:'50% 50%',
            ease:"sine.inOut"
              }
          );
  
      function getRand(min,max){
        return Math.random() * (max - min) + min;
      }
      tl.add(tl3);

      tl.play();



    })
  });