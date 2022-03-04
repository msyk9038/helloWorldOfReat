/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // num : State の変数，setNum : その変数を変更（更新）するための変数
  // useState() の中の数字は num の初期値
  const [num, setNum] = useState(1);
  const [faceShowFlag, setFace] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickShowHide = () => {
    // if (faceShowFlag === true) {
    //   setFace(false);
    // } else {
    //   setFace(true);
    // }
    setFace(!faceShowFlag);
  };

  // 再レンダリング後も，num が変わらないので
  // 再度 if 文の中に入って行って，setFace つまり，再レンダリングされる
  // 無限にレンダリングしてしまう
  //if (num % 3 === 0) {
  //  setFace(!faceShowFlag);
  //}
  // なので，num が変わったときだけ評価するようにしたい
  // useEffectを使う
  // 第2引数の配列に 検知する変数を放り込んでおく
  // 放り込まないときは，最初にレンダリングしたときだけ実行する．
  // 再レンダリング時は実行しない．
  // useEffect(() => {
  //   if (num % 3 === 0) {
  //     setFace(true);
  //   } else {
  //     setFace(false);
  //   }
  // }, [num]);
  //
  // このままでもよいが，既に顔文字が表示されているのに setFace(true) を
  // すると再度レンダリングしてしまい，パフォーマンスが落ちるので，
  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFace(true);
    } else {
      faceShowFlag && setFace(false);
    }
  }, [num]);
  // のようにする．このとき，配列の部分に警告がでる．
  // これは linter の機能で，useEffect の中で使用している変数で，
  // 配列に入ってないよ，という おせっかいな警告．
  // 確認は大事だが，消したいときには
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // を加える．または一番上に
  // /* eslint react-hooks/exhaustive-deps: off */
  // とすると，ファイル全体に効果が及ぶ.

  // JSX記法は 1つのタグで囲まれたものしか return できないので
  // <></> で囲む．

  // {} で囲むとjavascript として扱われる．
  // 下記は，その中に，javascriptとしてのオブジェクト {}を書いている．
  return (
    <>
      <h1 style={{ color: "red" }}>helloWorld</h1>
      {/* props の練習 */}
      <ColorfulMessage color="blue" fontSize="30px">
        how are you?
      </ColorfulMessage>
      <ColorfulMessage color="pink" fontSize="20px">
        i'm fine
      </ColorfulMessage>
      <button onClick={onClickCountUp}>num count up</button>
      <br />
      <button onClick={onClickShowHide}>on/off</button>
      <p> {num} </p>
      {faceShowFlag && <p> !(^^)! </p>}
    </>
  );
};

export default App;
