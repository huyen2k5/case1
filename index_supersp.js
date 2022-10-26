class MotoList{
    image;
    name;
    price;

    constructor(image, name, price) {
        this.image = image;
        this.name = name;
        this. price = price;
    }
    getImage(){
        return this.image;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    setImage(){
        this.image = image;
    }
    setName(){
        this.name = name;
    }
    setPrice(){
        this.price = price;
    }

}

let moto1 = new  MotoList(sp/sp_list_1.png, "R1M bản thường",3000 );
let moto2 = new  MotoList(sp/sp_list_1.png, "R1M bản thường",3000 );
let moto3 = new  MotoList(sp/sp_list_1.png, "R1M bản thường",3000 );

let arrMoto = [moto1, moto2, moto3];

function display(arr) {
    let content = "";
    for (let i =0; i < arr.length; i++){
       content+= "<div style='float: left; margin-right: 200px'>"
       content+= "<img src='arr[i].image' width='100%'>"
       content+=  "<p>"+arr[i].name+"</p>"+"<p>"+arr[i].price+"</p>"
        content+= "<button onClick='addMoto()'>Add</button>"
        content+=  "<button onClick='deleteMoto()'>Delete</button></div>"
    }
    document.getElementById("display").innerHTML = content;
}

display(arrMoto)









