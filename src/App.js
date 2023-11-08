import './App.css';

function App() {
  function fallbackCopyTextToClipboard(event) {
  var textArea = document.createElement("textarea");
  textArea.value = event.target.innerText;
  event.target.classList.add('green');
  setTimeout(
    () => {

  event.target.classList.remove('green');
},
    1000);
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
  return (
    <div className="card">
      <div className="card-body">
        <h1>Jasurbek Abdulkhafizov</h1>
        <h4>Motivation letter</h4>
        <p>
          Mening ismim <code onClick={ fallbackCopyTextToClipboard }>Abdulhafizov Jasurbek</code>, yoshim 14 da. Men Astrum IT Akademiyasida tahsil olaman. Men tanlagan sohamdan mamnunman va butun umrimni <b onClick={ fallbackCopyTextToClipboard }>Axborot texnalogiyalari</b>ni o'rganishga bag'ishlayman. Bundan tashqari, shuni ma'lum qilmoqchimanki, men turli viloyatdan kelgan talabalar bilan muloqot qilishni yaxshi ko'raman va ko'plab do'stlarim ham <b onClick={ fallbackCopyTextToClipboard }>Astrum IT akademiyasida</b> tahsil olishmoqda. O'qishdan tashqari, men turli <em onClick={ fallbackCopyTextToClipboard }>dasturlash tillarini</em> juda qiziqaman. Men xozirda <b onClick={ fallbackCopyTextToClipboard }>Astrum IT akademiyasi</b>da loyihalarda qatnashmadim lekin kelajakda loyihalarga qatnashish istagim bor. Bundan tashqari, <b onClick={ fallbackCopyTextToClipboard }>Backend</b> va <b onClick={ fallbackCopyTextToClipboard }>Frontend</b> bilimlarimni muustaxkamlab <b onClick={ fallbackCopyTextToClipboard }>Fullstack</b> dasturchi boldoqchiman. Men Amerika Qo'shma Shtatlarida o'qishni juda xohlayman, chunki u xalqaro talabalar uchun ko'plab imkoniyatlar va professional kurslarni taklif qiladi. Men <b onClick={ fallbackCopyTextToClipboard }>Axborot texnologiyalar</b> sohasida <b onClick={ fallbackCopyTextToClipboard }>Senior</b> darajasini olish maqsadlarimga erishish uchun ushbu 1 yillik kursni imkon qadar tezroq tugatishni intiqlik bilan kutyapman.  Men sizga ushbu maktubdagi tegishli hujjatlar bilan ilova qilingan rezyumeda akademik ma'lumotimni yuboraman. Umid qilamanki, mening tajribam va mahoratim ushbu kursga mos keladi.
        </p>

        <h4>Bog'lasnish va Ijtomoiy tarmoqlar</h4>
        <div className="contact">
          <a href="https://www.linkedin.com/in/new-jasjan-7355bb29a/">
          <img src="https://caplocksecurity.com/wp-content/uploads/2020/12/Illustration-of-Linkedin-icon-on-transparent-background-PNG.png" alt="linked in" width={32}/>
          <span>LinkedIn</span>
          </a>


          <a href="mailto:new.jasjan.programmer@gmail.com">
          <img src="https://softbugs.ru/wp-content/uploads/2023/02/gmail-attachments-failed-loading.png" alt="gmail" width={32}/>
          <span>Gmail</span>
          </a>


          <a href="https://t.me/new_Jasjan">
          <img src="https://zavet31.ru/images/telegram-1.png" alt="telegram" width={32}/>
          <span>Telegram</span>
          </a>


          <a href="https://www.instagram.com/new.jasjan.programmer/">
          <img src="https://i.pinimg.com/originals/a3/10/62/a310621be213d4e3290cb98d928e1bdd.jpg" alt="instagram" width={32}/>
          <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
