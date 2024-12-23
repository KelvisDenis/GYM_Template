import MyBD from "../bd/MyBD";

const AddUser = (model ) => {
  let models = MyBD(); 

    const newModels = [...models, {model}] 
    console.log("Usuário adicionado com sucesso!", newModels);
    return true;
}

export default AddUser