// newTask

// isdifadeciden endirim karti olub olmadigini yoxluyan bir 
// prompt qurun 
// isdifadeciden ad soyad alin
// eger endirim karti varsa endirim edin yoxdursa endirimsiz mehsulun
// neticesini verin



function processPurchase() {
    
    const hasDiscountCard = prompt("Do you have a discount card? (yes/no)").toLowerCase();

    if (hasDiscountCard === 'yes') {
     
        const firstName = prompt("Please enter your first name:");
        const lastName = prompt("Please enter your last name:");

        const productPrice = 100; 
        const discountRate = 0.10; 
        const finalPrice = productPrice * (1 - discountRate);

       
        alert(`Hello ${firstName} ${lastName}, with your discount card, the final price of the product is ${finalPrice} `);
    } else if (hasDiscountCard === 'no') {
       
        const firstName = prompt("Please enter your first name:");
        const lastName = prompt("Please enter your last name:");

        const productPrice = 100;
        
        alert(`Hello ${firstName} ${lastName}, without a discount card, the price of the product is ${productPrice}`);
    } else {
        alert("Please enter 'yes' or 'no' to indicate whether you have a discount card.");
    }
}

// processPurchase();



// MarketBase,Musteri classlari yaradin
// Musteri classi MarketBase ni extend alacaq
// Musteri ve MarketBase classi ad,soyad,endirimKarti,mehsullar
// olan constructor yaradin

// hesabla metodu olacaq MarketBase,Musteri classlarinda
// hesabla metodu musterinin aldigi mehsullari faizle endirim 
// edilmis qiymetini vermelidi 
// hemcinin endirim olunan faiz derecesinide MarketBase icinde yazilacaq

class MarketBase {
    constructor (name,surname,endirimKarti,mehsullar) { 
        this.name = name;
        this.surname = surname;
        this.endirimKarti = endirimKarti;
        this.mehsullar = mehsullar;
    }

    calculate () {
        const productPrice = 100; 
        const discountRate = 0.10; 
        const finalPrice = productPrice * (1 - discountRate);
        console.log(finalPrice);
        
    }
}

const market1 = new MarketBase ();
market1.calculate ();



class Musteri extends MarketBase {
    constructor (name,surname,endirimKarti,mehsullar) {
        super (name,surname,endirimKarti,mehsullar)
    }

    calculate2 () {
        return this.calculate();
    }
}


const musteri1 = new Musteri ('Ali','Aliyev' , 'var',['bread', 'water']);
musteri1.calculate2();


  








