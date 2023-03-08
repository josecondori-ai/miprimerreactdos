import './Header.css'

const Header=()=>{
    //js
    let mensaje='bienvenidos a mi pagina web'
    let numero=8987
    let array=[5,4,2,7,9,7,3]

    // const saluda=()=>{
        
        
    //     console.log('hola mundo')
    // }



    return(
        <header>
                <h1>{mensaje}</h1>
                <h2>{numero}</h2>
                <h2>{array}</h2>
                <button onClick={()=>console.log('hola mundo')} >Hace click!</button>
               
        </header>
    )
}

export default Header