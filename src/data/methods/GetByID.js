import MyBD from "../bd/MyBD"




const GetByID = ({id}) => {
    const models = MyBD();
    const user = models.find((m) => m.id === id);
    if (!user) return null;
    return user;
}

export default GetByID