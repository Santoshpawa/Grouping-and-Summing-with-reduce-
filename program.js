Input= ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

let answer=Input.reduce((count,item)=>{
        count[item]=(count[item]||0)+1;
        return count;
},[])

console.log(answer)