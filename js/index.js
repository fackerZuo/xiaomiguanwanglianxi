window.onload=function(){

	//搭配部分的选项卡
	var links=getClass("dapei-top")[0].getElementsByTagName('a');
    var lists=getClass("dpright");
	// console.log(links);

	// console.log(lists);
	for(i=0;i<links.length;i++){
		links[i].index=[i];
		links[i].onmouseover=function(){
			for(var j=0; j<lists.length; j++){
				lists[j].style.display="none";
				links[j].style.cssText="color:#333;"
			}
            lists[this.index].style.cssText="display:block;"
            links[this.index].style.cssText="color:#ff6700;"
		}
	}

	//配件部分选项卡
	var pjlinks=getClass("dapei-top")[1].getElementsByTagName("a");
	// console.log(pjlinks)
	var pjlists=getClass("pjright");
	// console.log(pjlists);
	for(var i=0;i<pjlinks.length;i++){
		pjlinks[i].index=[i];
		pjlinks[i].onmouseover=function(){
          for(var j=0;j<pjlinks.length;j++){
          	pjlinks[j].style.cssText="color:#333;"
          	pjlists[j].style.cssText="display:none;"
          }
		pjlists[this.index].style.cssText="block:display;"
		pjlinks[this.index].style.cssText="color:#ff6700;"
	    }
	}

  // 周边部分选项卡，做成函数
    var zblinks=getClass("dapei-top")[2].getElementsByTagName("a");
    // console.log(zblinks)
    var zblists=getClass("zbright")
    // console.log(zblists)
    for(i=0;i<zblinks.length;i++){
		zblinks[i].index=[i];
		zblinks[i].onmouseover=function(){
          for(j=0;j<zblinks.length;j++){
          	zblinks[j].style.cssText="color:#333;"
          	zblists[j].style.cssText="display:none;"
          }
		
		zblinks[this.index].style.cssText="color:#ff6700;"
		zblists[this.index].style.cssText="block:display;"
	    }
	}

	// banner轮播
	var bannerimg=getClass("banner-right")[0].getElementsByTagName('a');
	var bannerdivs=getClass("gundong")[0].getElementsByTagName('div');
	// console.log(img);
     // console.log(bannerdivs);
	  var num=0;
	  bannerimg[0].style.opacity=1;
	  bannerdivs[0].className="gundongdiv"
      var t=setInterval(move,2000)
		function move(){
	    num++;                             //++要放在上面，否则不会有最小值导入。还没进去就++了，
		if(num==bannerimg.length){num=0;}
		for(var i=0;i<bannerimg.length;i++){
		   // bannerimg[i].style.zIndex="";//循环让不显示的z-index变成空；
       animate(bannerimg[i],{opacity:0},500)
		   bannerdivs[i].className="yuan";
	     }
        // bannerimg[s].style.zIndex="10";
        animate(bannerimg[num],{opacity:1},500)
        bannerdivs[num].className="gundongdiv"

        // console.log(num);
      }  

	var bjBtn=getClass("bannerbackground")[0];//鼠标移入时候停止滚动
	bjBtn.onmouseover=function(){
         clearInterval(t);
	}
	bjBtn.onmouseout=function(){
		t=setInterval(move,2000)
	}
    
    var leftBtn=getClass("banner-leftBtn")[0]
    var rightBtn=getClass("banner-rightBtn")[0]
    rightBtn.onclick=function(){
    	move();
    }
    leftBtn.onclick=function(){

    		num--;
    	    if(num==-1){
    		    num=bannerimg.length-1;
    	    }
    	    for(j=0;j<bannerimg.length;j++){
    	    	 animate(bannerimg[j],{opacity:0},500);
                bannerdivs[j].className="yuan"
    	    }
          animate(bannerimg[num],{opacity:1},500);
           bannerdivs[num].className="gundongdiv"
    }


for(var z=0;z<bannerdivs.length;z++){       //
	bannerdivs[z].index=z;
    bannerdivs[z].onclick=function(){
   	   for(var j=0;j<bannerimg.length;j++){
          animate(bannerimg[j],{opacity:0},500);
          bannerdivs[j].className="yuan";
   	 }
   	 bannerdivs[this.index].className="gundongdiv";
   	animate(bannerimg[num],{opacity:1},500);
   	 num=this.index;
   }
}


//搜索框
  var findborder=getClass("top-input1")[0].getElementsByTagName('input')[0];
  var a=getClass("top-input1")[0].getElementsByTagName("a");
  // console.log(findborder);
  // console.log(a);
  findborder.onfocus=function(){
  	
  	for(i=0;i<a.length;i++){
  		a[i].style.cssText="display:none;"
  	}
  }
  findborder.onblur=function(){
  	for(i=0;i<a.length;i++){
  		a[i].style.cssText="display:block;"
  	}
  }


//按需加载
var  allfloor=$(".leftchosebox")//获取每层的大盒子
var  floorarr=[];
for(var i=0;i<allfloor.length;i++){
  floorarr.push(allfloor[i].offsetTop)
}
window.onscroll=function(){
  var stop=document.body.scrollTop||document.documentElement.scrollTop;
  for(var y=0;y<allfloor.length;y++){
    var windowH=document.documentElement.clientHeight;
    if((stop+windowH)>=floorarr[y]){
      getImg(y)
    }
  }
  function getImg(y){
    var imgs=allfloor[y].getElementsByTagName("img")//获取每层的img
    for(var j=0;j<imgs.length;j++){
      imgs[j].src=imgs[j].getAttribute("asrc");
      // console.log(imgs.length)
    }
  }
}



//明星单品、热评产品、为你推荐的轮播
var leftbtn=$(".zuozuojt")[0];
var rightbtn=$(".youyoujt")[0];
var lunbobj=$(".leftchosebox")[0];
var imgbox=$(".xmdplunbo")[0];
var index=0;
rightbtn.style.color="#000";
var k=setInterval(twomove,3000)
function twomove(){ 
  if(index==0){
    leftbtn.style.color="#000";
    rightbtn.style.color="#b0b0b0";
  }
  if(index==1){  
    rightbtn.style.color="#000";
    leftbtn.style.color="#b0b0b0";
  }
  index++;
  if(index==2){
    index=0
  }
  animate(imgbox,{marginLeft:-index*1226},500);
}
lunbobj.onmouseover=function(){
  clearInterval(k);
}
lunbobj.onmouseout=function(){
 k=setInterval(twomove,3000);
}
rightbtn.onclick=function(){
  twomove();
}
leftbtn.onclick=function(){
  if(index==0){
    leftbtn.style.color="#000";
    rightbtn.style.color="#b0b0b0";
  }
  if(index==1){  
    rightbtn.style.color="#000";
    leftbtn.style.color="#b0b0b0";
  }
  index--;
  if(index==-1){
    index=1
  }
  animate(imgbox,{marginLeft:-index*1226},500);
}


//内容里面的lunbo

var allfloors=$(".lunbowheel");
for(var b=0;b<allfloors.length;b++){
  g(b);
}
function g(b){
    var bigbackground=getClass("lunbowheel")[b];//固定盒子  共同类名lunbowheel
    var allimg=getClass("neironglunbo")[b]; //lunbowheelimgs
    var img=getClass("lunbowheelimgs")//每次移动的盒子
    var imgW=img[0].offsetWidth;
    var btn=getClass("nr-gundong")[b].getElementsByTagName("div");//lunboLunbo
    var leftbtn=getClass("nr-box1zjt")[b];// lunboZjt
    var rightbtn=getClass("nr-box1yjt")[b];//  lunboYjt

//最大的背景，所有图片，每个图片的宽度，轮播按钮，左边的按钮，右边的按钮，
    var index=0;
  function move(){
       index++;
       if(index==btn.length){
          index=btn.length-1;
          return;
       }
        for(var i=0;i<btn.length;i++){
          btn[i].className="nr-yuan";
        }
        btn[index].className="hot";
        console.log(index)
       animate(allimg,{marginLeft:-index*imgW},500)
  }
    
  // //选项卡
    for(var i=0;i<btn.length;i++){
      btn[i].index=i;
      btn[i].onclick=function(){
        animate(allimg,{marginLeft:-this.index*imgW},500)
        for(var j=0;j<btn.length;j++){
          btn[j].className="nr-yuan";
        }
        btn[this.index].className="hot";
      }
    }

  
    //左右箭头
    rightbtn.onclick=function(){
      move()
    }
    leftbtn.onclick=function(){
        index--;
        if(index==-1){
          index=0;
          return;
        }
        for(var i=0;i<btn.length;i++){
          btn[i].className="nr-yuan";
        }
        console.log(index)
        btn[index].className="hot";
        animate(allimg,{marginLeft:-index*imgW},500)
    }
    }


}