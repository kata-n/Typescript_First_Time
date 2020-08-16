//列挙型

enum CoffeeSize {
  SHORT = 'Short',
  TALL = 'Tall',
  GRANDE = 'Grande',
  VENTI = 'Venti'
}

//最初に列挙しておく事で、書き間違えとかを防ぐ
const coffee = {
  size: CoffeeSize.SHORT
}

//enumはコンパイルしたときにTree-shakingされないのであまり使われていない

//union型を使う方が望ましい
let unionType: number | string = 1
