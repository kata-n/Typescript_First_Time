//クラス宣言して設計図をつくる
//値はconstructorで初期化して、オブジェクトをつくるときにいれる
class Country {
  name: string;
  constructor(initCountry: string) {
    this.name = initCountry;
  }

  //メソッド
  //関数の中にthisを使っているときは第一引数にthisを書く
  greeting(this: { name: string }) {
    console.log(`Hello! My Birthplace is ${this.name}`)
  }
}

//オブジェクトをつくるときはNew
new Country('Japan');
