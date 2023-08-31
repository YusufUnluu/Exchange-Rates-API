class Currency {
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency=secondCurrency;
        this.url="https://api.exchangerate.host/latest?base=";

        this.amount = null;
    }
    exchange(){

        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency)
            .then(response => response.json())
            .then(data => {
            const parity =data.rates[this.secondCurrency];
            const amount2 = Number(this.amount);
            
            let total =parity*amount2;
            resolve(total);
            })
            .catch(error =>reject(error));
        });
    }

// para miktarını değiştirdiğimiz zaman yenisiyle güncellemek için 
    changeAmount(amount){
        this.amount = amount;
    }

// 1.Para birimini değiştirdiğimiz zaman yenisiyle güncelleme için
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}