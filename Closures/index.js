function parent() {
   const message = 'Hello World';

   function child() {
      document.write(message);
   }

   return child;
}

const childFN = parent();
childFN();