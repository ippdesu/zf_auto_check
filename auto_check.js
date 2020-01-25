    alert("Powered By IPP.仅供学习使用~");
    var iframe = window.top.document.getElementById('iframeautoheight');
    var ifdocument = iframe.contentWindow.document;	
    var subLength = ifdocument.getElementById("pjkc").length - 1;//评价课程选项个数
    console.log('共%d个选项',subLength);
    ifdocument.getElementById("TextBox1").value = - 1;
    function autoexecution()
        {
            var iframe = window.top.document.getElementById('iframeautoheight');
            var ifdocument = iframe.contentWindow.document;
            var reg1 = /^DataGrid1__ctl\d+_JS\d+$/i;
            var selections = ifdocument.getElementsByTagName("select");
            var arr = [true, false];
            for(var i = 0 ; i< selections.length; i++
		{
			 if(reg1.test(selections[i].getAttribute("id")))
                	{
				if(arr[Math.floor(Math.random()*arr.length)])
                        	selections[i].value = "A";
                		else
                        	selections[i].value = "B";
			}
		}
            ifdocument.getElementById("Button1").click();
	}
			
	autoexecution();
    iframe.onload = function()
    	{
        if(subLength -- > 0)
        	{
			console.log("auto jumping.....");
        		console.log("少女祈祷中.....");
        		autoexecution();
		}
	}
