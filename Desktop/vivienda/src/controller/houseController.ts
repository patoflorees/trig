export class HouseController {


    async getHousesByType(type:string,minPrice:number,maxPrice:number){
        const dbService = new FakeService();
        const dbService.getHouses{type,minPrice,maxPrice}
        return houses
    }
}