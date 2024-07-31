function encodeAndDecodeMessages() {
  const [encodeBtnEl, decodeBtnEl] = document.querySelectorAll("div button");
  const [encodeTextAreaEl, decodeTextAreaEl] =
    document.querySelectorAll("div textarea");

  function encodeOrDecodeMessage(text, asciiDiff) {
    return text
      .split("")
      .map((char) => {
        const currentAsciiValue = char.charCodeAt(0);
        return String.fromCharCode(currentAsciiValue + asciiDiff);
      })
      .join("");
  }

  function encodeMessageHandler() {
    decodeTextAreaEl.value = encodeOrDecodeMessage(encodeTextAreaEl.value, 1);
    encodeTextAreaEl.value = "";
  }

  function decodeMessageHandler() {
    decodeTextAreaEl.value = encodeOrDecodeMessage(decodeTextAreaEl.value, -1);
  }

  encodeBtnEl.addEventListener("click", encodeMessageHandler);
  decodeBtnEl.addEventListener("click", decodeMessageHandler);
}
