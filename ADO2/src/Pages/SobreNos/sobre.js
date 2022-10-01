import './sobre.css'

function SobreNos(){
    return (
        <div>
            <div class="tituloSobreNos">
                <h1>Sobre Nos</h1>
            </div>
            <hr/>
            <div>
                <p>ADO 02 da máteria Programação WEB do curso Análise e desenvolvimento de Sistemas do campos SENAC - St Amaro</p>
                <p>Atividade desenvolvida para estudar sobre JSX e o uso do useState em aplicações web</p>
                <hr/>
                <h3 class="subtituloSobreNos">Créditos:</h3>
                <p>Alunos: <a  href="https://github.com/HernandezOL" target="_blank" rel="noreferrer">Hernandez Oliveira</a></p>
                <p>Professor: <a href="https://github.com/ProfCarlosVerissimo" target="_blank" rel="noreferrer">Carlos Henrique Veríssimo Pereira</a></p>
                <div align="center">
                    <img alt="senac-sp" height="auto" width="85" src="https://seeklogo.com/images/S/Senac-logo-7627EC15FE-seeklogo.com.png"/>
                </div>
            </div>
        </div>
    );
}

export default SobreNos;