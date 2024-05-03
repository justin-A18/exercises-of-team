import "./styles/index.css";
import typescriptLogo from "/typescript.svg";
import "./prueba";
import "./ejemplo";
import "./clean-code/04-homework"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class='flex-col-center flex-gap'>
    <div class='logo-container' href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </div>
    <h1 class='title'>Intro TypeScript</h1>
    <p class="read-the-docs">
      Click en el boton para ir a la documentación
    </p>
    <a class='link' href='https://dynalist.io/d/H3KFXtSnJdd60cyikhecYqaf' target='_blanck'>
      Docs
    </a>
  </div>
`;
