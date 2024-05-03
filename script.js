function fibonacci(num) {
// your code here
if(num<=1){
    return num;
}

let i=0, j=1, ans=0;

for(let k=2;k<num;k++){
    ans=i+j;
    i=j;
    j=ans;
}

return ans;
}
	

module.exports = fibonacci;
