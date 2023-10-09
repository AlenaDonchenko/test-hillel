const car = {
    brand: "",
    model: "",
    color: ""
}

const updateProperties = {type: ""};
 Object.assign(car, updateProperties);

const electro = Object.assign({}, car);
electro.type = "electro";
electro.maxDistance = 0

const common = Object.assign({}, car)
common.type = "common";
common.gas = "";
common.gearBox = ""

const models = {
     tesla: {...electro, brand: "Tesla", model: "S Plaid", maxDistance: "850"},
     leaf: {...electro, brand: "Nissan", model: "Leaf", maxDistance: "270"},

     x5: {...common, brand: "BMW", model: "X5", gas: "Dizel", gearBox: "auto"},
     kenga: {...common, brand: "Renault", model: "Kangoo", gas: "Petrol", gearBox: "mechanic"}
};

for (const modelName in models) {
    console.log(modelName + " : ");
    const model = models[modelName];
    Object.entries(model).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
    console.log()
}


