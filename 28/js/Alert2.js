class Alert2 extends Alert {
   constructor(a,c,d,icon){
super(a,c,d);
this.icon = icon; //новое свойство
   }
   showIconAlert() {
      document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}
      "><span class="material-symbols-outlined">${this.icon}</span>${this.message}</p>`;
      
   }
   // Перезапишем myAlert
   myAlert() {
      alert('Hi'+ this.message);
   }
}