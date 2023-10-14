//Hard
//1.Pascals Triangle
function pascalTriangle_varity1(r, c) {
    const element = nCr(r - 1, c - 1);
    return element;
}
function nCr(n,r){
    let res =1
    for(let i=0;i<r;i++){
        res =res*(n-i)
        res=res/(i+1)
    }
    return res
}

console.log(pascalTriangle_varity1(5,3))

function pascalTriangle_varity2(n){
   let  ans =1
   let arr =[1]
    for(let i = 1;i<n;i++){
        ans = ans*(n-i)
        ans=ans/(i)
        arr.push(ans)
    }
  return arr
}

console.log(pascalTriangle_varity2(5))