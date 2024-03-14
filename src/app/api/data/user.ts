type UserInfo = {
    name:String
    age:Number,
    id:String,
    date:Date
}

const UsersInfoDetails:UserInfo[] = [];

export const GetAllUsersinfo = ()=> UsersInfoDetails;

export const PostUserInfo = (userinfo:UserInfo)=> UsersInfoDetails.push(userinfo)

export const getUserById = (id:string) =>{
    const userData = UsersInfoDetails.find((item)=> item.id === id);
    if(userData){
        return userData
    }else{
        throw new Error("No data found")
    }
}

export const userUpdateById = (id:string, name:string, age:number) =>{
    const userDatail = UsersInfoDetails.find((item)=> item.id === id);
    if(userDatail){
        userDatail.name = name;
        userDatail.age = age 
    }
    else{
        throw new Error("user Details not found")
    }
}

export const userRemoveById = (id:string)=>  {
    const indexToRemove = UsersInfoDetails.findIndex(item => item.id === id);
    if (indexToRemove !== -1) {
        UsersInfoDetails.splice(indexToRemove, 1);
        return UsersInfoDetails.filter((item)=> item.id !== id)
    }else{
        return "not Found user" 
    }
    
}