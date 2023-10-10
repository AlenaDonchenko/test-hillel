const car = {
    brand: "",
    model: "",
    color: ""
}

const updateProperties = {type: ""};
 Object.assign(car, updateProperties);

const electro = Object.assign({}, car, {
    type: "electro",
    maxDistance: 0
});

const common = Object.assign({}, car, {
    type: "common",
    gas: "",
    gearBox: ""
})

const bmwModel = {
    brand: "BMW",
    model: "X5"
}
const bmwConfiguration = {
    gas: "Dizel",
    gearBox: "auto"
}
const kengaModel = {
    brand: "Renault",
    model: "Kangoo"
}
const kengaConfiguration = {
    gas: "Petrol",
    gearBox: "mechanic"
}
const models = {
     tesla: {...electro, ...{brand: "Tesla", model: "S Plaid"}, ...{maxDistance: "850"}},
     leaf: {...electro, brand: "Nissan", model: "Leaf", maxDistance: "270"},

     x5: {...common, ...bmwModel, ...bmwConfiguration},
     kenga: {...common, ...kengaModel, ...kengaConfiguration}
};

for (const modelName in models) {
    console.log(modelName + " : ");
    const model = models[modelName];
    const properties = Object.entries(model)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");
        console.log(properties);
    console.log();
}


