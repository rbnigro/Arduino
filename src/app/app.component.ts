import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Arduino';
  form: FormGroup;

  cores = ['red', 'green'];
  indice = 0;
  corLed = this.cores[this.indice];

  modos = ['celsuis', 'kelvin'];

  conectado = false;

  tempMin = 19;
  temperatura = this.tempMin;

  historicoAltas: number[] = []; // lista com valores >= 40

  audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      modo: [{ value: 'celsuis', disabled: true }],
    });
  }

  conectar() {
    this.conectado = !this.conectado;

    this.corLed = this.conectado ? 'green' : 'red';
    this.form.get('modo')?.[this.conectado ? 'enable' : 'disable']();

    this.beep();
  }

  incrementar() {
    this.temperatura++;
    this.registrarSeNecessario();
  }

  decrementar() {
    if (this.temperatura > this.tempMin) {
      this.temperatura--;
    }
    this.registrarSeNecessario();
  }

  beep() {
    const oscillator = this.audioCtx.createOscillator();

    oscillator.type = 'square';
    oscillator.frequency.value = 440;
    oscillator.connect(this.audioCtx.destination);
    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
    }, 150);
  }

  piscar() {
    setInterval(() => {
      this.corLed = this.corLed === 'red' ? 'transparent' : 'red';
    }, 500);
  }

  setModo(modo: string) {
    this.form.patchValue({ modo });
    // this.registrarSeNecessario();
    this.converterTemperatura();
  }

  private registrarSeNecessario() {
    const modo = this.form.value.modo;

    const tempCelsius = modo === 'kelvin' ? this.temperatura - 273.15 : this.temperatura;

    if (tempCelsius >= 40) {
      this.beep();
      this.historicoAltas.push(tempCelsius);
    }
  }

    private converterTemperatura() {
    const modo = this.form.value.modo;

    if (modo === 'kelvin') {
      this.temperatura = this.temperatura + 273.15;
    } else {
      this.temperatura = this.temperatura - 273.15;
    }
  }
}
