
$(function(){
		ChangeCss();
		function ChangeCss(){  
			//alert(screen.availWidth)
			var script=document.getElementsByTagName('script')[0];
            if(screen.width<996) {
            	
            	var link=document.createElement("link");  
	            link.type="text/css";  
	            link.rel="stylesheet";  
	            link.href="/Content/css/JumpPage/softdown_m.css";  
	            //document.getElementsByTagName('head')[0].appendChild(link); 
				document.getElementsByTagName('head')[0].insertBefore(link,script);  
			
            }else{
            	
            	var link=document.createElement("link");  
	            link.type="text/css";  
	            link.rel="stylesheet";  
	            link.href="/Content/css/JumpPage/softdown.css";  
	            document.getElementsByTagName('head')[0].appendChild(link); 

            }
              
            
    	}   
  
		
})