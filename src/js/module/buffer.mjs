export default class {

	#struct;

	constructor(init) {

		this.#struct = {
			original: "",
			add: "",
			slot: "",
			table: [],
			map: [],
			adapter: init.adapter,
			history: {
				timeline: [
					/*
					[
						{ action: "insert", with: "original", from: 0, to: 11 },
						{ action: "movepos", by: 11 }
					],
					[
						{ action: "movepos", by -11 }
						{ action: "split", by: 4 },
						{ action: "insert", with: "slot", from: 0, to: 5 },
					],
					[
						{ action: "" }
					]
					...
					*/
				],
				index: -1,
				max: -1,
			},
			heap: {},
			type: init.type,
			selection: [],
			pos: 0,
			length: 0,
			ln: 0,
			col: 0,
			refactor() {},
			apply() {
				for(let i = 0; i < this.history.timeline[this.history.index].length; i++) {
				}
				this.history.index++;
			},
		}

		if(!!init.original && typeof init.original === "string" && init.original.length !== 0) {
			this.#struct.original = init.original;
			this.#struct.history.timeline.push([
				{
					action: "insert",
					with: "original",
					from: 0,
					to: init.original.length
				},
				{
					action: "movepos",
					by: init.original.length
				}
			]);
			this.#struct.history.index++;
			this.#struct.apply();
		};
	}

	get selection() {
		return this.#struct.selection;
	}

	get text() {
		this.#struct.heap = {
			text: "",
			range: []
		};
		for(let i = 0; i < this.#struct.index + 1; i++) {
			this.#struct.heap.text += this.#struct[this.#struct.table[i].type].slice(
				this.#struct.table[i].from,
				this.#struct.table[i].from + this.#struct.table[i].to
			)
		};
		return this.#struct.heap.text;
	}

	set rangeOfChunk(line) {
		if((typeof line === "number") && (line >= 1)) this.#struct.chunkln = line;
	}

	get next() {}

	get prev() {}

	get pos() {}

	get currentCaretPos() {}

	sliced(indexStart, indexEnd) {}

	getCaret() {}

	insert(string) {
		this.#struct.piece.table.push({
			type: "hot",
			from: this.#struct.add.length,
			to: string.length
		});
		this.pos += string.length;
		this.#struct.add += string;
		this.#struct.piece.index++;
	}

	undo() {
		if(0 < this.#struct.piece.index) this.#struct.piece.index--;
	}

	redo() {
		if((this.#struct.piece.index - 1) < this.#struct.piece.table.length) this.#struct.piece.index++;
	}

	up() {}

	down() {}

	left(step) {
		this.pos -= step;
	}

	right(step) {
		this.pos += step;
	}

	get availableMimeType() {
		return []
	}
}