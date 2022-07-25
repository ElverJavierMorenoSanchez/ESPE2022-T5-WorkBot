import '../stylesheets/Produc.css';
import Button from './Button';
import ComponenInput from './componentInput';


const Product = () => {

    return <div>
        <h2>ADMINISTRAR PRODUCTOS</h2>
        <form>
             <ComponenInput text='Nombre'/>
             <ComponenInput text='Precio'/>
             <ComponenInput text='Cantidad'/>
             <ComponenInput text='Desripcion'/>
             <Button />
        </form>
    </div>
}

export default Product;