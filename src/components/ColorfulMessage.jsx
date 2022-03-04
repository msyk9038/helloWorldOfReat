import React from "react";

// const ColorfulMessage = (props) => {
//   const contentStyle = {
//     color: props.color,
//     fontSize: props.size
//   };

//   return <p style={contentStyle}>{props.text}</p>;
// };

// children はタグで囲まれているtext のこと．
// <ColorfulMessage> hoge </ColorfulMessage>
export const ColorfulMessage = (props) => {
  // props に html における ColorfulMessage の引数が格納 ➡ 取り出す
  const { color, fontSize, children } = props;
  // color: color, fontSize: fontSize というように
  // オブジェクトの key, val が同じなら color, fontSize と省略可能
  const contentStyle = {
    color,
    fontSize
  };

  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
// default export は１ファイルにつき，１つしか選べない
// export const ColofulMessage とすると，
// 読み込み側で
// import { ColorfulMessage } from ".components/ColorfulMessage";
// となる．{} が付く場合は default でないexport であり，
// 関数名の補完やタイポの際の警告も出る．
