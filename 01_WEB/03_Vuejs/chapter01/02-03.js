const p1 = { name: 'john', age: 20 };
p1.age = 22;
console.log(p1); // { name: 'john', age: 22}

// p1 = { name: 'lee', age: 25 }; // error 속성 변경만 가능함. 참조는 못 바꿈
