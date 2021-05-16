import {useEffect, useState} from "react";

const ContactForm = (props) => {

//   const initialvalues = {
//     name: "",
//     mobile: "",
//     email: "",
//     address: ""
//   }

//   var [values, setValues] = useState(initialvalues);
//   console.log(props.currentId);

//   useEffect(() => {
//     if(props.currentId == '')
//       setValues({
//         ...initialvalues
//       })
//       else
//       setValues({
//         ...props.contactObject[props.currentId]
//       })
    
//   }, [props.currentId, props.contactObject]);

//   const handleInputChange = e => {
//     var {name, value} = e.target
//     setValues({
//       ...values,
//       [name]: value
//       //or
//       // address: value
//     })
//   }


//     const submitHandle = (e) => {
//   e.preventDefault();
//   props.addoredit(values);
//   }

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(0);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  
  const data = {name, mobile, email, address}

  // // const [values, setValues] = useState()
  
  const [values, setValues] = useState({
    name: "",
    mobile: "",
    email: "",
    address: ""
  });
  console.log(values);
 

 useEffect(() => {
        if(props.currentId !== '')
          setValues({
            ...props.contactObject[props.currentId]
          })
        
      }, [props.currentId, props.contactObject]);
      

  const submitHandle = (e) => {
  e.preventDefault();
  props.addoredit(data);
  }
    return (
        <div className="contactForm">
            <form autoComplete="off" onSubmit={submitHandle}>
                {/* <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" placeholder="Full Name"/>
                    </div>
                </div> */}

                <div class="form-row">
                    <div className="form-group col-md-12">
                <input className="form-control" type="text" placeholder="Full Nmae"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                    </div>
              <div class="form-group col-md-6">
                <input type="number" class="form-control" placeholder="Mobile"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
                />
             </div>
            <div class="form-group col-md-6">
             <input type="email" class="form-control" placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
             />
          </div>
          <div className="form-group col-md-12">
            <textarea className="form-control" cols="5" rows="2" placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
         </div>

         {props.currentId == '' ? <button className="btn btn-primary btn-block">Save</button> : <button className="btn btn-primary btn-block">update</button>}
            </form>

        </div>
      );
}
 
export default ContactForm;