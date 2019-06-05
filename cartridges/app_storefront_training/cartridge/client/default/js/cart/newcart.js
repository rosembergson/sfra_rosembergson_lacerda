'use strict';
function initializeEvents(){

    console.log("deu")
    $('.link-coupon-code').on('click',function(e) {
        e.preventDefault();
        
        var $link = $(e.currentTarget);
        var $coupon = $('.hide-show-coupon');
        $link.hide();
        $coupon.show();
        
    });
}

module.exports = function (){
    console.log("deu");
    initializeEvents();
};