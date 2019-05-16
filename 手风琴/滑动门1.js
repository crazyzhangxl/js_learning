window.onload = function () {
   let container = document.getElementById('container');
   let imgElements = container.getElementsByTagName('img');
   let imageWidth = imgElements[0].offsetWidth;
   let exposeWidth = 160;
   let boxWidth = imageWidth + (imgElements.length-1)*exposeWidth;
   container.style.width = boxWidth+"px";

   function restore(){
       for (let i=1;i<imgElements.length;i++){
           imgElements[i].style.left = imageWidth+(i-1)*exposeWidth+"px";
       }
   }
   restore();
   let translate = imageWidth - exposeWidth;
   for (let i=0;i<imgElements.length;i++){
       imgElements[i].onmouseover = function () {
           console.log("移动了");
            restore();// 先还原位置
           for (let j=1;j<=i;j++){
               imgElements[j].style.left = imgElements[j].offsetLeft-translate+"px";
           }
       };
   }

   container.onmouseleave = function () {
          restore();
   };
};
