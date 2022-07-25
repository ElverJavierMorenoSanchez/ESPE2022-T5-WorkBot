import '../styles/User.css';
import Button from '../components/ComponentaddUser/ButtonUser';
import ComponenInput from '../components/ComponentaddUser/InputUser';


const User = () => {

    return <div>
        <h2>ADMINISTRAR USUARIOS</h2>
        <form>
             <ComponenInput text='Nombre'/>
             <ComponenInput text='Apellido'/>
             <ComponenInput text='Direccion'/>
             <ComponenInput text='Ciudad'/>
             <ComponenInput text='Ciudad'/>
             <ComponenInput text='telefono'/>
             <ComponenInput text='Usuario'/>
             <ComponenInput text='email'/>
             <ComponenInput text='contraseña'/>
             <ComponenInput text='Codigo de Usuario'/>
        </form>
    </div>
}

export default User;