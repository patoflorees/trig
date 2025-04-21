const FAKE_HOUSES = [
    {
        id: 1,
        price :100,
        name: "Casa con 5 pisos",
        description: "bla bla bla bla bla",
        tr_dim: 100,
        cr_dim: 150,
        type: "RENT"
    },
    {
        id: 2,
        price :100,
        name: "Casa con 5 pisos",
        description: "bla bla bla bla bla",
        tr_dim: 100,
        cr_dim: 150,
        type: "SELL"
    },
    {
        id: 3,
        price :100,
        name: "Casa con 5 pisos",
        description: "bla bla bla bla bla",
        tr_dim: 100,
        cr_dim: 150,
        type: "RENT"
    },
    {
        id: 4,
        price :100,
        name: "Casa con 5 pisos",
        description: "bla bla bla bla bla",
        tr_dim: 100,
        cr_dim: 150,
        type: "SELL"
    }
    ,{
        id: 5,
        price :100,
        name: "Casa con 5 pisos",
        description: "bla bla bla bla bla",
        tr_dim: 100,
        cr_dim: 150,
        type: "RENT"
    }
]

class FakeService{
    async getHouses(type: string, minPrice: number, maxPrice: number): Promise<House[]> {
            return FAKE_HOUSES;
    }

    async getHouseById(id:number): Promise<House>{
        return FAKE_HOUSES[id];
    }
}