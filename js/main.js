var products=[] ; 
// نجيب الداتا من الداتا بيز ونعرضها عند عملية الريفريش
if(localStorage.getItem("products")==null){
    products=[]
}else{
    products=JSON.parse(localStorage.getItem("products")) // parse convert string to object
    displayData(); 
}
// نجيب الداتا من حقول الادخال 
function getData(){
    var ProductName= document.getElementById("ProductName").value;
    var ProductCategory= document.getElementById("ProductCategory").value;
    var ProductPrice= document.getElementById("ProductPrice").value;
    var ProductDescription= document.getElementById("ProductDescription").value;
    var product={
        name:ProductName,
        category:ProductCategory,
        price:ProductPrice,
        description:ProductDescription
    }
    products.push(product);
    localStorage.setItem('products',JSON.stringify(products));
    displayData();
    document.getElementById("ProductName").value="";
    document.getElementById("ProductCategory").value="";
    document.getElementById("ProductPrice").value="";
    document.getElementById("ProductDescription").value="";


}

// عرض الداتا فى الجدول 
function displayData(){
    var copaya="";
for(var i=0;i<products.length;i++){
    copaya +=`
                <tr >   
                    <td>${i}</td>    
                    <td>${products[i].name}</td>
                    <td>${products[i].category}</td>
                    <td>${products[i].price}</td>
                    <td>${products[i].description}</td>
                    <td><button onclick=Delete(${i}) class="btn btn-danger">Delete</button></td>
                    <td><button onclick=Updaate(${i}) class="btn btn-info" >Update</button></td>

                </tr>
    `
}
document.getElementById("demo").innerHTML=copaya;
    console.log(products);
}
// delete operation
function Delete(idex){
    products.splice(idex,1);
    displayData();
    localStorage.setItem('products',JSON.stringify(products));

}
// search 

function search(){
    var search=document.getElementById("search").value;
    for(var i=0;i<products.length;i++){
        if(products[i].name.toLowerCase().includes(search.toLowerCase())){
            console.log("yes"+i);
        }
    }
}
// update operation

var selectedRow="";
function Updaate(index){
    selectedRow=index;
    document.getElementById("ProductName").value=products[index].name;
    document.getElementById("ProductCategory").value=products[index].category;
    document.getElementById("ProductPrice").value=products[index].price;
    document.getElementById("ProductDescription").value=products[index].description;
    
    document.getElementById("updateProd").style.display='block';
    document.getElementById("Addpro").style.display='none';   
}

function updateProduct(){ 
    products[selectedRow].name=document.getElementById("ProductName").value;
    products[selectedRow].category=document.getElementById("ProductCategory").value;
    products[selectedRow].price=document.getElementById("ProductPrice").value;
    products[selectedRow].description=document.getElementById("ProductDescription").value;
    Delete(selectedRow);
    getData();
    document.getElementById("Addpro").style.display='block';
    document.getElementById("updateProd").style.display='none';
}









