//Your code below
function buildPath(p,n){
  for(a=0;a=0;a++);
  let r = math.random
  if(r<=p){
    path.push(false);
  }
  else{
    path.push(true);
  }
}
return path;
}
function stroll(path,index){
  if(index==path.length){
      return 1;
  }
  else if(index==path.length-1){
    return 0;
  }
  else{
    stroll(stroll,index++);
  }
}


//Test code
let testpath1 = buildPath(0.10,15);
let testpath2 = buildPath(0.50,15);
console.log(testpath1);
console.log(testpath2);
console.log("---------------------");
console.log(stroll([true,false,true]],0));
console.log(stroll([true,true,true]],0));
console.log(rsj(testpath1,0));
console.log(rsj(testpath2,0));
