
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
           ___     __     ____     __      ___     __  
          / __)   / _\\   (_  _)   / _\\    / __)   / _\\ 
         ( (_ \\  /    \\    )(    /    \\  ( (__   /    \\
          \\___/  \\_/\\_/   (__)   \\_/\\_/   \\___)  \\_/\\_/
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
