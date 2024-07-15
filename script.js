// scroll suave dos links
function scrollSuave(){
   // adiciona todos os links internos a uma nodeList 

   const linksInternosMenu = document.querySelectorAll('.jsNavegacaoPrimaria a[href^="#"]')
   console.log(linksInternosMenu)

   if(linksInternosMenu.length){
      // esse forEach passa pela nodeList dos links internos e adiciona um evento de click a eles 
      // é adicionado a função preventDefault para que o padrão inicial do link não seja ativado 
      // (o padrão inicial seria o link ir direto para seu respectivo id)
      // em seguida a função nativa scrollIntoView do js é adicionada aos links 
      linksInternosMenu.forEach(link => {
         link.addEventListener('click', (e)=>{
            e.preventDefault()
            const href = e.currentTarget.getAttribute('href')
            const sectionDaHref = document.querySelector(href)

            sectionDaHref.scrollIntoView({
               behavior: 'smooth',
               block: 'start'
            })
         })
      })
   }
}
scrollSuave()