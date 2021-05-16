
import ContactForm from "./contactForm";
import fireDb from "../firebase";
import { useEffect, useState } from "react";

const Contact = () => {

    const [contactObject, setContactObject] = useState({});
    const [currentId, setCurrentId] = useState('');
    

    useEffect(() => {
        fireDb.child('contacts').on('value', snapshot => {
            if(snapshot.val() != null){
                setContactObject({...snapshot.val()});
            }else{
                setContactObject({});
            }
        })
    }, [])

    const addoredit = (obj) => {
        if(currentId == ''){
        fireDb.child('contacts').push(
            obj,
            //noe call back function
            err => {
                if(err){
                    console.log(err);
                }else{
                    setCurrentId('');
                } 
            }
        )       
    }else{
        fireDb.child(`contacts/${currentId}`).set(
            obj,
            err => {
                if(err){
                    console.log(err);
                }else{
                    setCurrentId('');
                } 

            }

        )
}
    }

    const handleDelete = (takeid) => {
        if(window.confirm("are you sure you want to delete!")){
        fireDb.child(`contacts/${takeid}`).remove(
            err => {
                if(err){
                    console.log(err);
                }else{
                    setCurrentId('');
                } 

            }
        )
        }
    }

    return ( 
        <>  
            <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4 text-center">Contact Registration</h1>
  </div>
  </div>

    <div className="row">
        <div className="col-md-5">
            <ContactForm {...({addoredit, currentId, contactObject})}></ContactForm>
        </div>
        <div className="col-md-7">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Full Nmae</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {
        
          Object.keys(contactObject).map((id) => {
              return(
                <tr key={id}>
                <td>{contactObject[id].name}</td>
                <td>{contactObject[id].mobile}</td>
                <td>{contactObject[id].email}</td>
                <td>
                    <a className="btn text-primary d-inline-block" 
                    onClick={() => {setCurrentId(id)}}> <i className="fas fa-pencil-alt"></i></a>
                    <a className="btn text-danger d-inline-block" 
                    onClick={() => {handleDelete(id)}}> <i className="fas fa-trash-alt"></i></a>

                </td>
              </tr> 
              ) 
          })
      }
   
  </tbody>
</table>
<p>the current id = {currentId}</p>
        </div>
    </div>

        </>
     );
}
 
export default Contact;
