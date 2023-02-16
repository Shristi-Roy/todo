 
arr=[];
let arrIdx;
document.getElementById("bitter").style.display="None"
function add(){
    let x= document.getElementById("go").value;
    arr.push(x)
    updateDom()
    document.getElementById("go").value=""   
}

function del(elem){
    arr.splice(elem,1)
    updateDom()
}
function down(i) {
    let temp = arr[i];
    arr[i] = arr[i+1]
    arr[i+1] = temp
    updateDom()
}

function up(i) {
    let temp = arr[i];
    arr[i] = arr[i-1]
    arr[i-1] = temp
    updateDom()
}

function updateDom(){
    let y=document.getElementById("jump");
    let str="";
    for(let i=0;i<arr.length;i++){
        str=str+`<li>
        ${arr[i]}
         <button onclick="down(${i})" style="display: ${i == arr.length - 1 ? 'none':''}">Down</button>
         <button onclick="up(${i})" style="display: ${i == 0 ? 'none': ''}">Up</button>  
         <button onclick="del(${i})">delete</button> 
         <button onclick="edi(${i})">edit</button>
         </li>`
    }
    y.innerHTML=str
}

function edi(bak){
    document.getElementById("bitter").style.display="inline"
    document.getElementById("sweet").style.display="None"
    document.getElementById("go").value=arr[bak]
    arrIdx = bak
    console.log(arr)
}


function update(){
   arr[arrIdx]=document.getElementById("go").value
   updateDom();
   document.getElementById("go").value= "";
   document.getElementById("sweet").style.display="inline"
    document.getElementById("bitter").style.display="None"
}


