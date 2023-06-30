import React from "react";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://www.facebook.com/carlosroberto.alvesbezerra"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="ícone do facebook" />
        </a>
        <a
          href="https://github.com/CarlosRoberto01"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="ícone do github" />
        </a>
        <a
          href="https://www.linkedin.com/in/carlos-roberto-alves-bezerra-luna-125288224/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por Carlos Roberto</p>
    </footer>
  );
}