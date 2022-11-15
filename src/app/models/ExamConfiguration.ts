export class ExamConfiguration {
    _id?:String;
    mode:String;
    font: Number;
	color?: String;
	background?: String;
	datecreation?: Date;
   
    constructor(id: String, mode: String,  font: Number, color: String, background: String, datecreation: Date){
        this._id=id;
        this.mode = mode;
        this.font = font;
        this.color = color;
        this.background = background;
        this.datecreation = datecreation;
    }
}