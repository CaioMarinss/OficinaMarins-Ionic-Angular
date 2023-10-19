import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Carro } from '../models/Carro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private afs: AngularFirestore) { }

  //metodo salvar
  salvar(carro: Carro){
    return this.afs.collection('carros').add({...carro});
  }

  //busca todos carros
  buscarCarros(){
    return this.afs.collection('carros').snapshotChanges();
  }

buscarPorId(id: string): Observable<Carro> {
  return this.afs.collection('carros').doc(id).valueChanges() as Observable<Carro>;
}


  alterar(carro: Carro){
    return this.afs.collection('carros').doc(carro.id).update({...carro});
  }

  apagar(id:string){
    return this.afs.doc('carros/'+ id).delete()
  }

}
