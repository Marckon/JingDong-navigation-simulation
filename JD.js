/**
 * Created by lcz on 2017/5/25.
 */
window.onload=function () {
    var mainnav=document.getElementById("mainnav");
    var mainChild=mainnav.children;
    for(i=0;i<mainChild.length;i++){
        if(mainChild[i].tagName=="LI"){
           // var _this=this;
            mainChild[i].onmouseover=function () {
                this.className="lihover";
                var sub=this.getElementsByClassName("submenu")[0];

                if(this.getElementsByClassName("tip")[0]){
                    this.getElementsByClassName("tip")[0].style.display="block";
                }
                this.getElementsByTagName("div")[0].style.display="block";
                this.getElementsByTagName("span")[0].style.display="block";
                var subBottom=sub.offsetHeight+sub.offsetTop;
                //alert(subBottom+'~'+this.offsetTop);
                if(subBottom<this.offsetTop){
                    sub.style.top=this.offsetTop-sub.offsetHeight/2+'px';
                }
            }
            mainChild[i].onmouseout=function () {
                this.className="";
                this.getElementsByTagName("div")[0].style.display="none";
                this.getElementsByTagName("span")[0].style.display="none";
                if(this.getElementsByClassName("tip")[0]){
                    this.getElementsByClassName("tip")[0].style.display="none";
                }
            }
        }
    }
}