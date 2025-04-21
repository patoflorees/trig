import { FakeService} from "../controller/houseController";
import { HouseController } from "../controller/houseController";


export class HouseHandler{

    getHouses(){
        const ctrl = new HouseController(new FakeService(""));
        const ctrl2 = new HouseController(new FakeService(""));
    }

}
