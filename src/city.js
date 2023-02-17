export class City{
    constructor(cityName, country, wasFound, photos=[]){
        this.cityName=cityName;
        this.country=country;
        this.wasFound=wasFound;
        this.photos=photos;
    }
}