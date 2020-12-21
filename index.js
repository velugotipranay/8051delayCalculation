function change(x){
			x.style.opacity="1.0";
			x.style.boxShadow="-1px  1px 1px 4px red";
			x.style.borderColor="black";
			

		}
		function retain(c){
			
			c.style.boxShadow="1px 1px 1px 4px lime";
			c.style.borderColor="black";
			

		}

		
		function validate(){
			//var f=parseInt(document.delayform.fre.value);
			document.getElementById("delay").disabled=false;
			document.getElementById("count").disabled=false;
			document.getElementById("hex").disabled=false;
			var t=parseFloat(document.delayform.time.value);
			var exp=/[0-9]/
			var result=exp.test(t);
			//var result2=exp.test(f);
			var d=document.delayform.delay;
				if(result==false){
					alert("enter Only numbers in Time field");
				}
				else{
					d.value=t/2;	
					var count=Math.ceil((65536-((d.value*1000)/1.0852)));
					var cv=document.delayform.count;
					var hex=document.delayform.hex;
					cv.value=count;
					hex.value=count.toString(16);				
				}
			}
		function disable1(y){
			y.disabled=true;
			y.style.opacity="0.85";
                        y.style.backgroundColor="skyblue";
			
		}
		function undisable1(x){
			x.disabled=false;
			x.style.opacity="1.0";
                        x.style.backgroundColor="white";

		}
		function disable2(){
			document.getElementById("count").disabled=true;
			
		}
		function undisable2(){
			document.getElementById("count").disabled=false;
			
		}
		function disable3(){
			document.getElementById("hex").disabled=true;
		}
		function undisable3(){
			document.getElementById("hex").disabled=false;
		}
		function peroid(){
			var f=parseFloat(document.fre.frequency.value);
			var exp=/[0-9]/
			var result2=exp.test(f);
			if(result2==false){
					alert("enter Only numbers in frequency field");
				}
				else{
					document.getElementById("peroid").innerHTML="Time peroid in millisecs(ms) is "+ (1/f);
					document.getElementById("peroid").style.color="black";
					document.getElementById("peroid").style.backgroundColor="white";
				}
			

		}

		
