import { helpHttp } from "./helpHttp";
import axios from "axios";

const DbUrl="http://localhost:3002/usuarios";



const CrearUsuario = (data, setErr, setForm, setLoading) => {
    
    //console.log(data.id);
    
    data.id = Date.now();   
    axios({
        method:'POST',
        url:DbUrl,
        data:data
    }).then(res => console.log(res.data));
}
export default CrearUsuario;