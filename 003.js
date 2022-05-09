function conta( x, y,...z ){
    for(let zs of z){
         if(x === '+') y += zs; 
         if(x === '-') y -= zs;
         if(x === '*') y *= zs;
         if(x === '/') y /= zs;
    }console.log(y)}
    conta('/', 90000, 2, 4, 6, 4, 3);
    


    setInterval('click', )