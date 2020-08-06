//基本的に型注釈ではなく、型推論で書く

//型注釈
const Prefectures: string[] = ['Toyko', 'Oosaka', 'Nagoya'];

//型推論
let fruits = ['Apple', 'Grape', 'Banana'];

//数値が入るとエラーになる
// const Prefectures: string[] = ['Toyko', 'Oosaka', 'Nagoya', 1];

//Tuple型は定義した以外の型や値を受け付けないもので、型注釈で記述する
const musics: [string, number, boolean] = ['classic', 2000, true];

console.log(Prefectures);
