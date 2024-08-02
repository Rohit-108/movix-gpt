

export const checkvalidData = (email, password) => {

      const isEmailVailid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);

      const ispasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


      if(!isEmailVailid) return "Email is not valid";
      if(!ispasswordvalid) return "Password is not valid";

      return null;
      
}

