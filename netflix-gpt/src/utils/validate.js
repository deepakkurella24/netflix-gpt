export const validateForm=(email,password,userName)=>{
    const isValidEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if(!isValidEmail) return "invalid Email";
    if(!isValidPassword) return "invalid password";
    if(userName.length===0) return "enter name"
    return null;
}