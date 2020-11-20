export class Product {
    constructor(
        public name : string, 
        public price : number,
        public _id: number,
        public imageUrl : string,
        public description : string, 
        public category : string,
        public quantity : number, 
        public tags? : string, 
    ){}
}