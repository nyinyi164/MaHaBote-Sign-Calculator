$(document).ready(function() {
					$( "#datepicker" ).datepicker({
						changeMonth: true,
						changeYear: true
					});
				});
				var mod,sign;
				var date;
				var month,day,year;
				var mod0=["Binga","Puti","Thike","Marana","Adipadi","Yarza","Atun"];
				var mod1=["Atun","Binga","Puti","Thike","Marana","Adipadi","Yarza"];
				var mod2=["Yarza","Atun","Binga","Puti","Thike","Marana","Adipadi"];
				var mod3=["Adipadi","Yarza","Atun","Binga","Puti","Thike","Marana"];
				var mod4=["Marana","Adipadi","Yarza","Atun","Binga","Puti","Thike"];
				var mod5=["Thike","Marana","Adipadi","Yarza","Atun","Binga","Puti"];
				var mod6=["Puti","Thike","Marana","Adipadi","Yarza","Atun","Binga"];
				function show(){
					date=document.getElementById("datepicker").value;
					day=document.getElementById("day").value;
					var split_date=date.split("/");
						month=split_date[0];
						year=split_date[2];
				
						mod=year%7-1;
						if (mod==-1)
						mod+=7;
						
					switch( mod ) {
						case 0:
							sign=mod0[day]; break;
						case 1:
							sign=mod1[day]; break;
						case 2:
							sign=mod2[day]; break;
						case 3:
							sign=mod3[day]; break;
						case 4:
							sign=mod4[day]; break;	
						case 5:
							sign=mod5[day]; break;	
						case 6:
							sign=mod6[day]; break;
						default:
							alert("Your input is incorrect! Please,try again!")
					}
				
					var e=document.getElementById('result');
					e.innerHTML="Your birth year is "+"<b>"+year+"</b>"+" and your birth month is "+"<b>"+month+"</b>"+"</br>"+"Your Mahabote Sign is "+"<b>"+sign+"</b>";
}
