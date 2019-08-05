export class Expense {

    public id: number;
    public amount: number; 
    public name: string;

	constructor($id: number, $name: string, $amount: number) {
		this.amount = $amount;
        this.name = $name;
        this.id = $id;
    }
    

}
