function filterData() {
    const users = [
        {nome: "luis", idade: 26},
        
        {nome: "norma", idade: 16},
        
        {nome: "daiana", idade: 26},
        
        {nome: "jorge", idade: 16},
        
        {nome: "kauan", idade: 16},
        
        {nome: "charles", idade: 26},
        
        {nome: "marco", idade: 16},
        
        {nome: "bruno", idade: 16}
    ]

    let under18 = [];

    let over18 = [];

    for (i=0; i < users.length; i++) {
        if (users[i].idade < 18) {
            under18.push(users[i])
        } 
        if (users[i].idade >= 18) {
            over18.push(users[i])
        }
    }

    console.log(under18, over18)
}

filterData()