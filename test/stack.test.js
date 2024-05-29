class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
        console.log(this.items)
    }

    pop() {
        if (this.top > -1) {
            const poppedItem = this.items[this.top];
            delete this.items[this.top];
            this.top -= 1;
            return poppedItem;
        }
    }
}

describe('My Stack', () => {

    let stack;

    beforeEach(() => {
        stack = new Stack();
    });


    it('is created empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to the top', () => {
        stack.push('avocado')

        expect(stack.top).toBe(0);
        expect(stack.peek).toEqual('avocado')
    });

    it('can pop off', () => {
        stack.push('avocado')
        stack.pop();

        expect(stack.top).toBe(-1)
        expect(stack.items).toEqual({})
    });
})
