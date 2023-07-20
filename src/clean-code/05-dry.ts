type Size = "" | "S" | "M" | "L";

class Product {
	constructor(
		public name = "",
		public price: number = 0,
		public size: Size = ""
	) {}

	verifyProductProperties(): boolean {
		for (const key in this) {
			const property = this[key];

			switch (typeof property) {
				case "string":
					if (property.length == 0) throw Error(`${key} is empty`);
				case "number":
					if (<number>property <= 0)
						throw Error(`${key} is low or equal than zero`);
				default:
					throw Error(`${property} value for ${key} property is not valid`);
			}
		}

		return true;
	}

	toString() {
		if (!this.verifyProductProperties()) return;

		return `${this.name} ($${this.price}), ${this.size}`;
	}
}

(() => {
	const bluePants = new Product("Blue large Pants", 10, "M");
	bluePants.toString();
})();
