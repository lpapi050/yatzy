class YatzyGame {
    constructor() {
        this.roll_num = 0;
        this.dice_vals = [0, 0, 0, 0, 0];
        this.keep_dice = [false, false, false, false, false];
    }

    roll() {
        for (let i = 0; i < this.dice_vals.length; i++) {
            if (!this.keep_dice[i]) {
                this.dice_vals[i] = dice_roll();
            }
        }
        this.roll_num++;
    }

    reset() {
        this.roll_num = 0;
        this.dice_vals = [0, 0, 0, 0, 0];
        this.keep_dice = [false, false, false, false, false];
    }
}