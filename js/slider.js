    window.onload = function() {
        let listBlock = document.querySelector('.slider-list')
        let itemSlider = document.querySelectorAll('.slider-item')
        listBlock.style.height = itemSlider[0].scrollHeight + 'px'
        let activeLists = document.querySelectorAll('.accordion-item-description-active')
        activeLists.forEach(function(activeList) {
            activeList.style.height = activeList.scrollHeight + 'px'
        })
        
    };
    document.addEventListener('DOMContentLoaded', function(){
        let itemSlider = document.querySelectorAll('.slider-item')
        let listBlock = document.querySelector('.slider-list')
        let arrowLeft = document.querySelector('.slider_arrow-left')
        let arrowRight = document.querySelector('.slider_arrow-right')
        let sliderCount = document.querySelector('.slider-count')
        let count = 0
        function leftMove() {
            count = count - 1
            for(i = 0; i < itemSlider.length; i++) {
                if (count === -1) {
                    count = itemSlider.length - 1
                }
                itemSlider[i].classList.remove('slider-item-active');
            }
            listBlock.style.height = 0 + 'px'
            listBlock.style.height = itemSlider[count].scrollHeight + 'px'
            itemSlider[count].classList.add('slider-item-active');
            sliderCount.textContent = `${count + 1} / ${itemSlider.length}`
        }
        function rightMove() {
            
            count = count + 1
            
            for(i = 0; i < itemSlider.length; i++) {
                
                if (itemSlider.length === count) {
                    count = 0
                }
                itemSlider[i].classList.remove('slider-item-active');
                
            } 
            listBlock.style.height = 0 + 'px'
            listBlock.style.height = itemSlider[count].scrollHeight + 'px'
            itemSlider[count].classList.add('slider-item-active');
            sliderCount.textContent = `${count + 1} / ${itemSlider.length}`
        }
        
        sliderCount.textContent = `${count + 1} / ${itemSlider.length}`
        arrowLeft.addEventListener('click', leftMove)
        arrowRight.addEventListener('click', rightMove)
});