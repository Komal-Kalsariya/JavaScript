let imagess=[];
let total=0;
let diaplay=()=>{
   
    document.getElementById("box").innerHTML="";
  
    imagess.map((ele,i)=>{
       
        let title=document.createElement("h1")
        title.innerHTML=ele.title

      

        let price=document.createElement("p")
        price.innerHTML=ele.price

        let cate=document.createElement("p")
        cate.innerHTML=ele.cate

        let cante=document.createElement("p")
        cante.innerHTML=ele.cante
        
        let info=document.createElement("p")
        info.innerHTML="readmore"
        
        

        let img=document.createElement("img")
        img.src=ele.img

      
        if(ele.title=="mobile"){
            total+=ele.title
        }
         
        let btn=document.createElement("button")
        btn.innerHTML="delete"
      
         info.addEventListener("click",()=>{
          info.innerHTML="ldsklf ndksnfs"
        //  document.getElementById("inf").style.display="block"
          
         })
        
        btn.addEventListener("click",()=>{
            imagess.splice(i,1)
            diaplay();
        })

        let btn1=document.createElement("button")
        btn1.innerHTML="LIKE"

        btn1.addEventListener("click",()=>{
            alert("hello!!!!");
        })


        title.setAttribute("class","title");
        cante.setAttribute("class","cant");
        let div=document.createElement("div")
        div.append(img,title,price,cate,cante,info,btn,btn1);
        document.getElementById("box").append(div)
    })

    document.getElementById("t-title").innerHTML=`total is:${total}`
}

let images=(e)=>{
    e.preventDefault();

    let title=parseInt(document.getElementById("title").value)
    let img=document.getElementById("img").value
    let cate=document.getElementById("cate").value
    let cante=document.getElementById("cont").value
    let price=document.getElementById("price").value

    console.log(title,price,img);

    if(title.length<3){
        // alert("please enter letter")
        document.getElementById("t-eeror").innerHTML="please enter must be 2 or more letter";
        document.getElementById("t-eeror").style.color="red"
        return
    }
    if(price<2){
        alert("please enter valid price");
        return;
    }
  
   
    let image={
        title:title,
        price:price,
        cate:cate,
        cante:cante,
        img:img,
    }
    console.log(image);

    imagess.push(image);
    diaplay();

}
document.getElementById("imges").addEventListener("submit",images)