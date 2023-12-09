import '../Styles/HomePage.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import logo from "../Images/background.jpg"
import qgis from "../Images/qgisdownload.jpeg"
import satelitalimage from "../Images/imagesatelital.jpg"
import statics from "../Images/staticsqgis.jpg"
import classify from "../Images/classify.png"
const HomePage=()=>{
    return (
         
            <div className="additional-images">
                <h2 className='title-slide'>Temas a tratar</h2>
                <Carousel autoPlay interval={4000} infiniteLoop ={true}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', overflow: 'hidden' }}>
                        <img src={qgis} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Grafo" />
                        <p className="subtitle">Un grafo es una forma de representar relaciones entre objetos mediante puntos y líneas. Los puntos se llaman vértices o nodos, y las líneas se llaman aristas o arcos. Los grafos se usan en matemáticas y ciencias de la computación para estudiar problemas de lógica, topología y combinatoria. Por ejemplo, se puede usar un grafo para modelar una red de computadoras, donde los vértices son los dispositivos y las aristas son las conexiones</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', overflow: 'hidden' }}>
                        <img src={satelitalimage} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Array" />
                        <p className="subtitle">Un array es una estructura de datos que puede almacenar una colección de elementos del mismo tipo de datos. Un array se utiliza para almacenar una colección de datos, pero a menudo es más útil pensar en un array como una colección de variables del mismo tipo. Por ejemplo, un array de enteros puede almacenar varios números enteros, y un array de cadenas puede almacenar varios textos. Para acceder a un elemento de un array</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', overflow: 'hidden' }}>
                        <img src={statics} style={{ width: '90%', height: '100%', objectFit: 'contain' }} alt="BST" />
                        <p className="subtitle">Un árbol binario es un tipo de grafo que tiene la propiedad de que cada nodo puede tener como máximo dos hijos, llamados hijo izquierdo y hijo derecho. Los árboles binarios se usan para almacenar y procesar datos de forma eficiente, ya que permiten realizar operaciones de búsqueda, inserción y eliminación en un tiempo proporcional al logaritmo del número de nodos. Un ejemplo de árbol binario es el árbol binario de búsqueda, que mantiene los elementos ordenados según una clave.</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', overflow: 'hidden' }}>
                        <img src={classify} style={{ width: '90%', height: '100%', objectFit: 'contain' }} alt="Hash" />
                        <p className="subtitle">Las tablas hash son estructuras de datos que permiten asociar claves con valores de forma eficiente. Para ello, utilizan una función hash que transforma las claves en números enteros que representan las posiciones de un arreglo donde se almacenan los valores. Las tablas hash facilitan la búsqueda, inserción y eliminación de elementos, ya que solo requieren conocer la clave para acceder al valor correspondiente. Sin embargo, las tablas hash pueden tener problemas de colisiones, que ocurren cuando dos o más claves se mapean a la misma posición del arreglo. Para resolver las colisiones, se pueden usar diferentes técnicas, como listas enlazadas, direccionamiento abierto o doble hashing</p>
                    </div>
                </Carousel>
                
            </div>
        
    
    );
};
export default HomePage;