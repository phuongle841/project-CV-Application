import { useState } from "react";

export default function GeneralInformation() {
  const [name, setName] = useState("Henry");
  const [email, setEmail] = useState("Phuongleminh841@gmail.com");
  const [phone, setPhone] = useState("0357068797");
  return (
    <div className="GeneralInformation">
      <p>General Information</p>
      <div className="name">
        <p>name: </p>
        <p>{name}</p>
      </div>
      <div className="email">
        <p>email: </p>
        <p>{email}</p>
      </div>
      <div className="phone">
        <p>phone: </p>
        <p>{phone}</p>
      </div>
    </div>
  );
}
