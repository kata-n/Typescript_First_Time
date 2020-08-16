//クラス宣言して設計図をつくる
//値はconstructorで初期化して、オブジェクトをつくるときにいれる
class Country {
  name: string;
  constructor(initCountry: string) {
    this.name = initCountry;
  }
}

//オブジェクトをつくるときはNew
new Country('Japan');
