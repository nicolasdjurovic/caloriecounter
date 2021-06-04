var app = new Vue({
el: '#app',
data(){
    return {
        newProd: {
            name: 0,
            cal: 0,
            fat: 0,
            car: 0,
            pro: 0
        },
        productList: [
            {
                name: 'Potato',
                cal: 165,
                fat: 123,
                car: 154,
                pro: 198
            },
            {
                name: 'Tomato',
                cal: 256,
                fat: 245,
                car: 254,
                pro: 245
            },
            {
                name: 'Onion',
                cal: 365,
                fat: 365,
                car: 365,
                pro: 365
            }
        ]
    }
},
computed: {
    totalsCalc: function(){
        var totals = {
            cal: 0, 
            fat: 0,
            car: 0,
            pro: 0
        }
        for(var i = 0; i < this.productList.length; i++){
            totals.cal += parseInt(this.productList[i].cal);
            totals.fat += parseInt(this.productList[i].fat);
            totals.car += parseInt(this.productList[i].car);
            totals.pro += parseInt(this.productList[i].pro);
        }
        return totals;
    }
},
methods: {
    addNewProd(){
        this.productList.push(
            {
                name: this.newProd.name,
                cal: Number(this.newProd.cal),
                fat: Number(this.newProd.fat),
                car: Number(this.newProd.car),
                pro: Number(this.newProd.pro)
            }
        );
        this.newProd = {};
    },
    removeProd(itemIndex){
        this.productList.splice(itemIndex, 1);
    },
    dataChanged(){
    }
}
});