(function ($) {
    $(function () {




        //        $(document).ready(function() {
        //            var $thumbs = $('.offers-thumb');
        //            var $components = $('.offers-component');
        //            var $shape = $('.back-shape-line');
        //            var currentIndex = 0;
        //        
        //            function cycleOffers() {
        //                // Remove active class from current elements
        //                $thumbs.eq(currentIndex).removeClass('active');
        //                $components.eq(currentIndex).removeClass('active');
        //                $shape.eq(currentIndex).removeClass('active');
        //            
        //                // Increment index and handle overflow
        //                currentIndex = (currentIndex + 1) % $thumbs.length;
        //            
        //                // Add active class to next elements
        //                $thumbs.eq(currentIndex).addClass('active');
        //                $components.eq(currentIndex).addClass('active');
        //                $shape.eq(currentIndex).addClass('active');
        //            }
        //            
        //            // Start the cycle
        //            setInterval(cycleOffers, 5000); // Change 3000 to adjust the interval (in milliseconds)
        //        });


        // Assuming you have included jQuery in your project
        $(document).ready(function () {
            const timeline = gsap.timeline({
                yoyo: false,
                repeat: -1,
                defaults: {
                    duration: 1,
                    ease: "easeInOut"
                }
            });

            const rotations = [-125, -235, -360]; // Array of rotation values
            const delay = 3; // Delay between rotations

            // Function to toggle 'active' class between elements dynamically
            const toggleActiveClassDynamic = (selector, index) => {
                const elements = $(selector);
                // Remove 'active' from current element
                elements.eq(index).removeClass('active');
                // Add 'active' to the next element after a slight delay
                const nextIndex = (index + 1) % elements.length;
                setTimeout(() => {
                    elements.eq(nextIndex).addClass('active');
                }, 0.4); // Delay in milliseconds
            };

            // Dynamically add tweens to the timeline with staggered 'active' class toggle
            rotations.forEach((rotation, index) => {
                timeline.to(".rotate-bg", {
                    rotate: rotation,
                    duration: 0.5,
                    delay: delay,
                    onStart: () => {
                        toggleActiveClassDynamic('.offers-component', index);
                        toggleActiveClassDynamic('.back-shape-line', index);
                        toggleActiveClassDynamic('.offers-thumb', index);
                    }
                });
            });

            // Use jQuery's hover function to pause and resume the animation
            $('.offers-component').hover(
                function () { // Mouse enter
                    if ($(this).hasClass('active')) {
                        timeline.pause();
                    }
                },
                function () { // Mouse leave
                    if ($(this).hasClass('active')) {
                        timeline.resume();
                    }
                }
            );
        });





    }) // End ready function.





})(jQuery)
