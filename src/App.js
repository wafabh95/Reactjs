import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (

    <div className="App">
    <h1 className="title">Registration Form</h1>
    <hr/>
    <div className="container">
      <div className="row">
      <div className="col-lg-4 col-xl-4 col-md-6 col-sm-3 ">
                <form className="md-form">
                    <div className="file-field">
                      <div className="mb-4">
                        <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                          className="rounded-circle z-depth-1-half avatar-pic" alt="example placeholder avatar"/>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="btn btn-mdb-color btn-rounded float-left">
                          <span>Add photo</span>
                          <input type="file"/>
                        </div>
                      </div>
                    </div>
                </form>
      </div>
<div className="col-lg-8 col-xl-8 col-md-6 col-sm-9 ">
      <div className="row top">
        <div className="col-.3"><label >First Name* : </label></div>
        <div className="col-9"><input type="text"className="form-control form-rounded " placeholder="First Name"></input></div>
      </div>

      <div className="row">
        <div className="col-3"><label >Last Name* :</label></div>
        <div className="col-9"><input type="text" className="form-control form-rounded" placeholder="Last Name"></input></div>
      </div>
   
      <div className="row">
          <div className="col-3"><label >E-mail Address* :</label></div>
          <div className="col-9"><input type="text" className="form-control form-rounded" placeholder="E-mail Address"></input></div>
      </div>

      <div className="row">
            <div className="col-3"><label for="start">Birth Date :</label></div>
            <div className="col-9"><input id="date" type="date" value="2017-06-01"/></div>
      </div>


      <div className="row">
            <div className="col-3"><label>Sex :</label></div>
            
            <div className="col-1"><label className="sex">Male</label></div>
            <div className="col-1"><input id="chek" className="form-check-input" type="checkbox"  /></div>


            <div className="col-1"><label className="sex">Famelle</label></div>
            <div className="col-1"><input id="chek" className="form-check-input" type="checkbox"  /></div>
      </div>
  </div>
  </div>



  <div className="row">
    <div className="col-2"><label >Phone Number : </label></div>
    <div className="col-10"><input type="text" className="form-control form-rounded" placeholder="Phone Number"></input></div>
  </div>
   
  <div className="row">
    <div className="col-2"><label >Postal Address :</label></div>
    <div className="col-10"><input type="text" className="form-control form-rounded" placeholder="Postal Address"></input></div>
  </div>


 
  </div>
    
    <div className="row">
      <div className="col-8"></div>
      <div className="col-4">
          <button type="button" className="btn btn-success">submit</button>
      </div>
    </div>
    
    <footer>copyright all rights reserved 2021</footer>
  </div>
  
  );
}

export default App;
