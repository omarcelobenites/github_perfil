import { useState , useEffect } from "react"

const Formulario = () => {

    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("O componente finalizou")
        }
    }, []);

    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome]);

    useEffect(() => {
        console.log("materia A mudou para: " + materiaA);
    }, [materiaA, materiaB, materiaC]);


    const alterarNome = (evento) => {
            //console.log(evento.target.value)
            setNome(evento.target.value);
    }
    
    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const média = soma / 3;
     
        if(média >= 7){
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        }else{
            return(
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
            ))}
            <input type="text" placeholder="Seu nome" onChange={alterarNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target})=> setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
           {renderizaResultado()}
        </form>
    )
}

export default Formulario