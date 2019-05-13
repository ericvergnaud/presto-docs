export default class DisplayHistory {

    constructor(items) {
        this.items = items || [];
    }

    push(stuff) {
        if (Array.isArray(stuff))
            this.items = this.items.concat(stuff);
        else if (stuff)
            this.items.push(stuff);
    }

    clear() {
        this.items = [];
    }
}