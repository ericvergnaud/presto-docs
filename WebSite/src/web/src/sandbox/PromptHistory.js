export default class PromptHistory {

    constructor() {
        this.clear();
    }

    push(item) {
        this.items.push(item);
        this.index = this.items.length;
    }

    clear() {
        this.items = [];
        this.index = 0;
    }

    toggle(direction) {
        if (!this.items.length)
            return null;
        if (direction === 'UP')
            return this.toggleUp()
        else if (direction === 'DOWN')
            return this.toggleDown();
        else
            return null;
    }

    toggleUp() {
        let num = this.index;
        if(num < 1)
            num = 0;
        else
            num -= 1;
        this.index = num;
        return this.items[num];
    }

    toggleDown() {
        let num = this.index;
        if(num >= this.items.length - 1)
          num = this.items.length - 1;
        else
          num += 1;
        this.index = num;
        return this.items[num];
    }

}