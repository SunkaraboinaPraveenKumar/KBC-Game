let level1=[
    [1,0,1,0],
    [1,1,1,1],
    [1,0,1,0],
    [1,0,1,1]
    ]
let level2=[
    [1,1,1,0,1,0],
    [1,0,1,1,1,1],
    [0,0,1,0,0,0],
    [1,0,1,1,1,1],
    [1,0,1,0,1,0],
    [1,1,1,0,1,1]
]
let level3=[
    [1,0,0,1,1,1,0,0,0,0],
    [1,0,0,1,0,1,1,1,1,1],
    [1,1,1,1,0,0,0,0,0,1],
    [1,0,0,0,0,1,1,1,1,1],
    [1,0,1,1,1,1,0,1,0,1],
    [1,0,1,0,0,0,0,1,0,0],
    [1,1,1,0,1,0,1,1,0,1],
    [1,0,0,0,1,0,0,1,0,1],
    [1,0,1,1,1,0,1,1,1,1],
    [1,1,1,0,0,0,1,0,0,1]
]
let Level=document.getElementById("levelSelect");
let mazeArray=level1;
Level.addEventListener("change",function(){
    let level=Level.value;
    if(level==2){
        mazeArray=level2;
    }
    else if(level==3){
        mazeArray=level3;
    }
    else{
        mazeArray=level1;
    }
    maze.innerHTML=
    `<img src="ratmaze.png" id="rat" 
    width="50px" height="50px" alt="rat">
    <img src="cheesemaze.jpeg" id="cheese" 
    width="50px" height="50px" alt="cheese">`;
    createMaze();
});
let maze=document.getElementById("maze-container");
let rat=document.getElementById("rat");
let food=document.getElementById("food");
function setratPosition(x,y){
    rat.style.top=x;+"px";
    rat.style.left=y+"px";

}
function setFoodPosition(x,y){
    rat.style.bottom=x+"px";
    rat.style.right=y+"px";
}
function createMaze(){
    for(let i=0;i<mazeArray.length;i++){
        let row=document.createElement("div");
        row.classList.add("row");
        for(let j=0;j<mazeArray[i].length;j++){
            let cell=document.createElement("div");
            cell.classList.add("cell");
            if(mazeArray[i][j]===0){
                cell.classList.add("wall");
            }
            if(i==0&&j==0){
                mazeArray[i][j]=2;
            }
            row.appendChild(cell);
        }
        maze.appendChild(row);
    }
    //setratPosition(20,10);
    getRatPosition();
}
//createMaze();
function getRatPosition(){
let position =[-1,-1];
for(let i=0;i<mazeArray.length;i++){
    for(let j=0;j<mazeArray[i].length;j++){
        if(mazeArray[i][j]==2){
            position[0]=i;
            position[1]=j;
        }
    }
}
console.log(position);
return position;
}
document.addEventListener("keydown",
function (e){
let rat=document.getElementById("rat");
let food=document.getElementById("cheese");
let ratLeft=rat.offsetLeft;
let ratTop=rat.offsetTop;
let foodLeft=food.offsetLeft;
let foodTop=food.offsetTop;
let ratPosition=getRatPosition();
if(e.key=="ArrowRight"
&&ratLeft<(mazeArray.length-1)*50
&&(mazeArray[ratTop/50][ratLeft/50+1])!=0
){
    ratLeft+=50;
    rat.style.left=ratLeft+"px";
    mazeArray[ratPosition[0]][ratPosition[1]]=1;
    mazeArray[ratPosition[0]][ratPosition[1]+1]=2;

}
if(e.key=="ArrowLeft"
&&ratLeft>0
&&mazeArray[ratTop/50][ratLeft/50-1]!=0){
    ratLeft-=50;
    rat.style.left=ratLeft+"px";
    mazeArray[ratPosition[0]][ratPosition[1]]=1;
    mazeArray[ratPosition[0]][ratPosition[1]-1]=2;
}
if(e.key=="ArrowUp"
&&ratTop>0
&&mazeArray[ratTop/50-1][ratLeft/50]!=0){
    ratTop-=50;
    rat.style.top=ratTop+"px";
    mazeArray[ratPosition[0]][ratPosition[1]]=1;
    mazeArray[ratPosition[0]-1][ratPosition[1]]=2;
}
if(e.key=="ArrowDown"&&
ratTop<(mazeArray.length-1)*50
&&mazeArray[ratTop/50+1][ratLeft/50]!=0){
    ratTop+=50;
    rat.style.top=ratTop+"px";
    mazeArray[ratPosition[0]][ratPosition[1]]=1;
    mazeArray[ratPosition[0]+1][ratPosition[1]]=2;
}
});