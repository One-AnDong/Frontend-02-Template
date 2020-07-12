//用 JavaScript 去设计狗咬人的代码
// 人
class Human {
  constructor({
    name,
    age,
    healthInsurance = true,
    health = 100,
    money = 20000
  }) {
    this.name = name; //姓名
    this.age = age; //年龄
    this.healthInsurance = healthInsurance; //医保
    this.health = health; //健康程度
    this.money = money; //存款
  }
  //受到伤害
  hurt(msg) {
    //血条减1
    this.health = this.health > 1 ? this.health - 1 : "dead";
    //金钱损失
    this.money = this.healthInsurance ? this.money - 100 : this.money - 1000;
    console.log(`${msg}健康值:${this.health}存款:${this.money}`);
    return {
      health: this.health,
      money: this.money
    };
  }
}
// 狗
class dog {
  constructor({ age, breed }) {
    this.age = age; //年龄
    this.breed = breed; //品种
  }
  //咬
  bite(target) {
    //受伤
    target.hurt(`${this.breed}咬了${target.name}一口`);
  }
}

const 小明 = new Human({ name: "", age: 23, health: 100, money: 30000 });
const 小黑 = new dog({ age: 2, breed: "哈士奇" });
小黑.bite(小明);
//写一段 JS 的函数，把一个 string 它代表的字节给它转换出来，用 UTF8 对 string 进行遍码
function utf8Encode(str) {
  let res = "";
  for (let _ of str) {
    let codePoint = _.codePointAt(0);
    if (codePoint < 128) {
      res += _;
    }
    if (codePoint > 127 && codePoint < 2048) {
      res += String.fromCharCode(
        (codePoint >> 6) | 192,
        (codePoint & 63) | 128
      );
    }
    if (codePoint > 2047 && codePoint < 65536) {
      res += String.fromCharCode(
        (codePoint >> 12) | 224,
        ((codePoint >> 6) & 63) | 128,
        (codePoint & 63) | 128
      );
    }
    if (codePoint > 65536 && codePoint < 1114112) {
      res += String.fromCharCode(
        (codePoint >> 18) | 240,
        ((codePoint >> 12) & 63) | 128,
        ((codePoint >> 6) & 63) | 128,
        (codePoint & 63) | 128
      );
    }
  }
  return res;
}
let utf8Code = utf8Encode("测试");
