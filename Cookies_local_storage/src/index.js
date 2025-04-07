function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    
    //  1-day expiration for all cookies //
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    
    document.cookie = `firstname=${firstname}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = `email=${email}; expires=${expirationDate.toUTCString()}; path=/`;
  }
  
  function showCookies() {
    const cookiesParagraph = document.createElement('p');
    cookiesParagraph.innerHTML = `Cookies: ${document.cookie}`;
    
    const existingParagraph = document.querySelector('p');
    if (existingParagraph) {
      existingParagraph.remove();
    }
    
    document.body.appendChild(cookiesParagraph);
  }