import MyBD from "../bd/MyBD";



const GetByCodigo = (code) =>{
    const models = MyBD();
    const user = models.find((m) => m.codigo === code );
    if(!user) return null;
    return user;
}


export default GetByCodigo;