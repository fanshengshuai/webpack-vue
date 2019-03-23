import Axios from "axios";
import Store from "../store";

export default {
    getCarList(callback) {

        Axios.post("/car/car/getCars", "", {
            responseType: "json"
        }).then(function(resp) {
            if (resp.data && resp.data.cars) {
                var cars = resp.data.cars;

                cars.forEach((item, index) => {
                    cars[index].index = index;
                });

                Store.commit("car/setMyCars", cars);

                if (typeof callback == "function") {
                    callback();
                }
            }
        });


    }
};