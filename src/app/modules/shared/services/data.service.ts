import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IUserForm } from '../../login/interfaces/user-form.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private subjectForm = new Subject<IUserForm>();
  public subjectForm$ = this.subjectForm.asObservable();

  /**
    * behaviorSubject es un tipo de observable que mantiene y
    * emite el ultimo valor
    * en mi caso esta inicializada con false
    */
  private subjectBoolean = new BehaviorSubject<boolean>(false);

  /**
   * .asObservable() es un metodo que se utiliza para convertir
   * behaviorSubject en un observable. Devuelve una instancia
   * de un observable que solo podemos obtener el valor si nos
   * subscribimos
   */
  public subjectBoolean$ = this.subjectBoolean.asObservable();


  /**
   * setSubjectForm se encarga de actualizar el valor de
   * Subject.
   * Guardamos el valor del formulario para luego suscribirnos
   * y poder mostrar esa informacion
   */
  setSubjectForm(data: IUserForm) {
    this.subjectForm.next(data)
  }

  setBoolean(data: boolean) {
    this.subjectBoolean.next(data)
  }

}
