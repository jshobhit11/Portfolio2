/*=============== Active Link =============== */

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item',
    },
    animation: {
        duration: 300,
    }
});


const linkWork = document.querySelectorAll('.category__btn');
function activeWork(){
    linkWork.forEach((a)=>a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a)=> a.addEventListener('click', activeWork))



const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const message = document.getElementById('message');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    if(contactName.value=='' || contactEmail.value==='' || message.value===''){
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');
        contactMessage.textContent = 'Write all the input fields';

    } 
    else{
        emailjs.sendForm('service_unjiix3', 'template_035lgm4','#contact-form', '4J3VxfDeyjqwS_W49').then(()=>{
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message Sent';
        })
    }
}

contactForm.addEventListener('submit', sendEmail);

/*=============== Testimonials Swiper =============== */
