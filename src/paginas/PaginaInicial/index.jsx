import Banner from "../../componentes/Banner";
import Cabecalho from "../../componentes/Cabecalho";
import Galeria from "../../componentes/Galeria";
import Menu from "../../componentes/Menu";
import Populares from "../../componentes/Populares";
import Rodape from "../../componentes/Rodape";
import styles from './PaginaInicial.module.scss'


export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main >
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                    <Banner />
                    </div>
                </section>
                <div className={styles.galeria}>
                <Galeria />
                <Populares />
            </div>
            </main>
            <Rodape />
        </>
    )
}