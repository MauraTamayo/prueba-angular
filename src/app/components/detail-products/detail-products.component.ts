import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.scss']
})
export class DetailProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tab(parrafo,parrafo2,parrafo3){
    
    let myparra1 = document.getElementById(parrafo);
    let myparra2 = document.getElementById(parrafo2);
    let myparra3 = document.getElementById(parrafo3);

    console.log("click");

    switch (parrafo) {

      case 'overview':
        console.log("click overview");
          myparra1.style.display = "block";
          myparra2.style.display = "none";
          myparra3.style.display = "none";

        break;
       
        case 'features':
          console.log("click features");
          myparra1.style.display = "block";
          myparra2.style.display = "none";
          myparra3.style.display = "none";
        break;

        case 'the-box':
          console.log("click the-box");
          myparra1.style.display = "block";
          myparra2.style.display = "none";
          myparra3.style.display = "none";
        break;
    
      default:
        break;
    }
  }  
  

  SetImage(inImage){
  
    let MainGalery = document.getElementById('main-galery');
    
    switch (inImage) {
      case 'audi':
        MainGalery.innerHTML = '<img src="../../../assets/img/audifonosx1.png" alt="">';
        break;

      case 'auditwo':
        MainGalery.innerHTML = '<img style="margin-top: 6vh; width: 24vh;" src="../../../assets/img/audifonosDosx3.png" alt="">';
        break;
    
      case 'PartesAdifonos':
        MainGalery.innerHTML = '<img id="imgparteaudifonos" src="../../../assets/img/Partesx3.png" alt="">';
      break;

      default:
        break;
    }
  }


}
