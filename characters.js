module.exports = characterList

function characterList(a,b) {
  let XXXXX = a + a + a + a + a + a
  let ZZZZZ = b + b + b + b + b + a
  let XZZZX = a + b + b + b + a + a
  let XZXZX = a + b + a + b + a + a
  let ZZZZX = b + b + b + b + a + a
  let ZXXXX = b + a + a + a + a + a
  let XZXXX = a + b + a + a + a + a
  let XXXXZ = a + a + a + a + b + a
  let ZXXZZ = b + a + a + b + b + a
  let XXZZZ = a + a + b + b + b + a
  let ZXXZX = b + a + a + b + a + a
  let XXZXX = a + a + b + a + a + a
  let ZXXXZ = b + a + a + a + b + a
  let ZZZXX = b + b + b + a + a + a
  let ZZZXZ = b + b + b + a + b + a
  let ZXZXX = b + a + b + a + a + a
  let XXXZX = a + a + a + b + a + a
  let ZXZXZ = b + a + b + a + b + a
  let ZZXZZ = b + b + a + b + b + a
  let ZZXXZ = b + b + a + a + b + a

  let XZX = a + b + a
  let XXX = a + a + a

  //THE ALPHABET
  return {
    space : [
      a,
      a,
      a,
      a,
      a,
      a,
      a
    ],
    A: [
      XXXXX,
      XZZZX,
      ZXXXZ,
      ZZZZZ,
      ZXXXZ,
      ZXXXZ,
      XXXXX
    ],

    B: [
      XXXXX,
      ZZZZX,
      ZXXXZ,
      ZZZZX,
      ZXXXZ,
      ZZZZX,
      XXXXX
    ],

    C: [
      XXXXX,
      ZZZZZ,
      ZXXXX,
      ZXXXX,
      ZXXXX,
      ZZZZZ,
      XXXXX
    ],

    D: [
      XXXXX,
      ZZZZX,
      ZXXXZ,
      ZXXXZ,
      ZXXXZ,
      ZZZZX,
      XXXXX
    ],

    E: [
      XXXXX,
      ZZZZZ,
      ZXXXX,
      ZZZZX,
      ZXXXX,
      ZZZZZ,
      XXXXX
    ],

    F: [
      XXXXX,
      ZZZZZ,
      ZXXXX,
      ZZZZX,
      ZXXXX,
      ZXXXX,
      XXXXX
    ],

    G: [
      XXXXX,
      ZZZZZ,
      ZXXXX,
      ZXXZZ,
      ZXXXZ,
      ZZZZZ,
      XXXXX
    ],

    H: [
      XXXXX,
      ZXXXZ,
      ZXXXZ,
      ZZZZZ,
      ZXXXZ,
      ZXXXZ,
      XXXXX
    ],

    I: [
      XXXXX,
      ZZZZZ,
      XXZXX,
      XXZXX,
      XXZXX,
      ZZZZZ,
      XXXXX
    ],

    J: [
      XXXXX,
      ZZZZZ,
      XXZXX,
      XXZXX,
      ZXZXX,
      ZZZXX,
      XXXXX
    ],

    K: [
      XXXXX,
      ZXXXZ,
      ZXXZX,
      ZZZXX,
      ZXXZX,
      ZXXXZ,
      XXXXX
    ],

    L: [
      XXXXX,
      ZXXXX,
      ZXXXX,
      ZXXXX,
      ZXXXX,
      ZZZZZ,
      XXXXX
    ],

    M: [
      XXXXX,
      ZXXXZ,
      ZZXZZ,
      ZXZXZ,
      ZXZXZ,
      ZXZXZ,
      XXXXX
    ],

    N: [
      XXXXX,
      ZXXXZ,
      ZZXXZ,
      ZXZXZ,
      ZXXZZ,
      ZXXXZ,
      XXXXX
    ],

    O: [
      XXXXX,
      XZZZX,
      ZXXXZ,
      ZXXXZ,
      ZXXXZ,
      XZZZX,
      XXXXX
    ],

    P: [
      XXXXX,
      ZZZZX,
      ZXXXZ,
      ZZZZX,
      ZXXXX,
      ZXXXX,
      XXXXX
    ],

    Q: [
      XXXXX,
      ZZZZZ,
      ZXXXZ,
      ZXZXZ,
      ZXXZX,
      ZZZXZ,
      XXXXX
    ],

    R: [
      XXXXX,
      ZZZZX,
      ZXXXZ,
      ZZZZX,
      ZXXZX,
      ZXXXZ,
      XXXXX
    ],

    S: [
      XXXXX,
      ZZZZZ,
      ZXXXX,
      ZZZZZ,
      XXXXZ,
      ZZZZZ,
      XXXXX
    ],

    T: [
      XXXXX,
      ZZZZZ,
      XXZXX,
      XXZXX,
      XXZXX,
      XXZXX,
      XXXXX
    ],

    U: [
      XXXXX,
      ZXXXZ,
      ZXXXZ,
      ZXXXZ,
      ZXXXZ,
      XZZZX,
      XXXXX
    ],

    V: [
      XXXXX,
      ZXXXZ,
      XZXZX,
      XZXZX,
      XZXZX,
      XXZXX,
      XXXXX
    ],

    W: [
      XXXXX,
      ZXXXZ,
      ZXXXZ,
      ZXZXZ,
      ZZXZZ,
      ZXXXZ,
      XXXXX
    ],

    X: [
      XXXXX,
      ZXXXZ,
      XZXZX,
      XXZXX,
      XZXZX,
      ZXXXZ,
      XXXXX
    ],

    Y: [
      XXXXX,
      ZXXXZ,
      XZXZX,
      XXZXX,
      XXZXX,
      XXZXX,
      XXXXX
    ],

    Z: [
      XXXXX,
      ZZZZZ,
      XXXZX,
      XXZXX,
      XZXXX,
      ZZZZZ,
      XXXXX
    ],

    ex: [
      XZX,
      XZX,
      XZX,
      XZX,
      XZX,
      XXX,
      XZX
    ],

    qs: [
      XZZZX,
      ZXXXZ,
      ZXXXZ,
      XXZZZ,
      XXZXX,
      XXXXX,
      XXZXX
    ]
  }
}
