import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

export default function Footer(){

    return(
        <footer className="page-footer font-small" style={{background:"white"}}>
            <div className="justify-content-center">
                <div>
                    <h5>Address: G 49 City Centre, 570, Mahatma Gandhi Rd, Indore, Madhya Pradesh 452001</h5>
                    <h5>Phone: 0731 253 0367</h5>
                </div>
               
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a> foodcenter.com</a>
            </div>
            
        </footer>
    )
}