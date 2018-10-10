
        
        $(function () {
            //FORM
        
            var windoww = $(window).width();
            if (windoww > 1000) {
        
        
                var windoww = $(window).width();
                // if (windoww < 1000 ) {
                var container = document.getElementById('app');
                var video = document.getElementById('myVideo');
                // Resize
                function adapt() {
            
                    var container_width = container.offsetWidth;
                    var container_height = container.offsetHeight;
            
                    video.style.height = "auto";
                    video.style.width = container_width + "px";
            
                    if (video.offsetHeight < container_height) {
                        video.style.height = container_height + "px";
                        video.style.width = "auto";
                        // video.style.width = container_width + "px";
                    }
            
                    // 處理video置中位置
                    video.style.top = (((video.offsetHeight - container_height) / 2) * -1) + 'px';
                    video.style.left = (((video.offsetWidth - container_width) / 2) * -1) + 'px';
            
                    
                }
            
                // events
                window.addEventListener('load', adapt);
                window.addEventListener('resize', adapt);
        });