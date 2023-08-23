const rootDiv = document.querySelector("#root");

const React = (function () {
  let hooks = [];
  let index = 0;

  // USE STATE
  function useState(valorInicial) {
    const state = hooks[index] || valorInicial;
    const _index = index;
    const setState = (novoValor) => {
      hooks[_index] = novoValor;
      // render(App); // Trigger re-render after state update
    };
    index++;
    return [state, setState];
  }

  // USE EFFECT
  function useEffect(callback, depArray) {
    const oldDeps = hooks[index];
    let hasChanged = true;
    if (oldDeps) {
      hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
    }
    if (hasChanged) callback();
    hooks[index] = depArray;
    index++;
  }

  // WORK LOOP
  function workloop() {
    render(App);
    setTimeout(workloop, 300);
  }
  setTimeout(workloop, 300);

  // RENDER COMPONENT
  function render(Component) {
    index = 0;
    // console.log("called the render");
    const C = Component();
    C.render();
    return C;
  }

  return { useState, render, useEffect };
})();

function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("apple");
  const [isLoading, setIsLoading] = React.useState(false);
  const [bool, setBool] = React.useState(false);

  const [effectCount, setEffectCount] = React.useState(0);

  React.useEffect(() => handleIncreaseEffect(), [bool]);

  function handleIncreaseEffect() {
    setEffectCount(effectCount + 1);
  }

  function handleIncreaseCount() {
    setCount(count + 1);
  }

  async function handleChangeText() {
    setIsLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const res = await response.json();
    const word = res[0];
    setText(word);
    setIsLoading(false);
  }

  function handleInvertBoolean() {
    setBool(!bool);
  }

  return {
    render: () => {
      rootDiv.innerHTML = `
      <ul>
        <li>
          <p>Counting: ${count}</p>
          <button id="countButton" class="bottone5">Increase</button>
        </li>
        <li>
          <p>Randomic words: <br /> ${text}</p>
          <button id="textButton" class="bottone5" ${isLoading ? "disabled" : ""}>
            Change word
          </button>
        </li>
        <li>
          <p>I look gorgeous! <br /> ${bool ? "Yeah, speaking facts!" : "Nah, that's cap!"}</p>
          <button id="booleanButton" class="bottone5">${!bool}</button>
        </li>
        <li>
          <p>useEffect whatching the state above runned: <br /> ${effectCount} times</p>
        </li>
      </ul>
      `;

      const countButton = document.querySelector("#countButton");
      const textButton = document.querySelector("#textButton");
      const booleanButton = document.querySelector("#booleanButton");

      countButton.onclick = handleIncreaseCount;
      textButton.onclick = handleChangeText;
      booleanButton.onclick = handleInvertBoolean;
    },
  };
}

React.render(App); // Initial rendering
