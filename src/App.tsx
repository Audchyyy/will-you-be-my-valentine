"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  useEffect(() => {
    document.body.style.backgroundImage =
      `url(${import.meta.env.BASE_URL}Pop.jpg)`;

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
  }, []);


  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "เตงแน่ใจจริงๆเหรออออ?",
      "เตงจ๋าาาาาาาาา :(",
      "เค้าขอร้องเลยนะ",
      "มีของแถมด้วยนะ ขอจริง ๆ",
      "งั้นเค้าเลี้ยงมัทฉะก็ได้",
      "ได้โปรดเถอะ พลีสสสสสสส",
      "แต่อย่างงี้มันเศร้านะเตง",
      "เค้าใจจะขาดแล้วนะ",
      "โอเค เค้าตุยแล้ว",
      "ตอนนี้คุยกับวิญญาณเค้าอยู่",
      "ขอร้องนะคะคนดี",
      ":((((",
      "ม่ายยยยยยยยยย :(",
      "ม่ายอาวววววววว :(",
      "ม่ายยยยยยยยยยยยย :(",
      "ไม่อาวววววววว :(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you pookie!! จุ๊บๆ ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
