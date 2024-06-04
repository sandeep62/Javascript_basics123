const nums=[1,2,3]
const mynums=nums.reduce(function(acc,currval){
    // console.log(`acc :- ${acc} and currval:-${currval}`);
    return acc+currval;
})
// console.log(mynums);

// basics of shopingkart addition of price 

const shopingkart=[
    {
        course:"java",
        price:2000
    },
    {
        course:"python",
        price:2500
    },
    {
        course:"jobathon",
        price:25000
    },
]
const pricetopay=shopingkart.reduce(function(acc,item) {
    return acc+item.price;

},0)
console.log(pricetopay);