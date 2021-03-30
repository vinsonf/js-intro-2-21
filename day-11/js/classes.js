export class User {
    score = 0;

    constructor(username = '', isVip = false) {
        this.username = username;
        this.isVip = isVip;
    }

    getPoints() {
        this.score++;
        console.log(this.username, 'got points', this.score);
    }
}

export class Enemy extends User {
   
    attack() {
        console.log('enemy attack');
    }
}

export default [User, Enemy]