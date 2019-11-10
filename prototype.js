function Proto() {
    this.minwoo = '나';
}

Proto.Query = function (foo, bar) {
    this.minwoo = '정민우';
    console.log(`${foo} ${bar} ${this.minwoo}`);
}

Proto.Query('돈이', '짱많은');

console.log(Proto);