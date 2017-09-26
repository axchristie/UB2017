    var main = function(){
    
    $('.box-title').hide();
    
    $('#unit-1').hover(function(){
    	$('#box-title-1').toggle(function(){
	    	$(this).show;
    	})
    });
    
    $('#unit-2').hover(function(){
    	$('#box-title-2').toggle(function(){
	    	$(this).show;
    	})
    });
    
    $('#unit-3').hover(function(){
    	$('#box-title-3').toggle(function(){
	    	$(this).show;
    	})
    }); 
    
    }
    
$(document).ready(main);