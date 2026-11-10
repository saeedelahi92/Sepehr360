// ===== Chatbot Responses =====
const botResponses = {
    // Greetings
    "سلام": "سلام! خوش اومدید به سپهر ۳۶۰ 🌟 چطور می‌تونم کمکتون کنم؟",
    "درود": "درود بر شما! من دستیار سپهر ۳۶۰ هستم. بفرمایید.",
    "hi": "سلام! چطور می‌تونم کمکتون کنم؟",
    "hello": "سلام! خوش اومدید 😊",

    // Services
    "خدمات شما چیست؟": "ما این خدمات رو ارائه می‌دیم:\n• کارت ویزیت (از ۴۵ هزار تومان)\n• بروشور و تراکت\n• بسته‌بندی اختصاصی\n• منوی رستوران\n• بنر و استند\n• طراحی گرافیکی\n\nکدومش مد نظرتونه؟",
    "خدمات": "خدمات اصلی ما شامل کارت ویزیت، بروشور، تراکت، بسته‌بندی، منوی رستوران، بنر و طراحی اختصاصی هست. جزئیات بیشتر می‌خواید؟",
    "محصولات": "محصولات ما: کارت ویزیت، بروشور/تراکت، جعبه و بسته‌بندی، منوی رستوران، بنر و استند. کدوم رو می‌خواید؟",

    // Pricing
    "قیمت کارت ویزیت چقدر است؟": "قیمت کارت ویزیت از ۴۵٬۰۰۰ تومان شروع می‌شه (بسته به تعداد، جنس کاغذ و روکش).\n\nمثال:\n• ۵۰۰ عدد ساده: حدود ۴۵–۶۰ هزار\n• ۱۰۰۰ عدد لوکس با لمینت: حدود ۹۰–۱۳۰ هزار\n\nبرای قیمت دقیق، تعداد و نوع رو بگید یا فرم سفارش رو پر کنید.",
    "قیمت": "قیمت‌ها بسته به نوع محصول متفاوته:\n• کارت ویزیت: از ۴۵ هزار\n• تراکت/بروشور: از ۸۰ هزار\n• منو: از ۹۵ هزار\n• بسته‌بندی: از ۱۲۰ هزار\n• بنر: از ۱۵۰ هزار\n\nبرای قیمت دقیق بگید چه محصولی می‌خواید.",
    "چقدر": "بستگی به محصول داره. کارت ویزیت از ۴۵ هزار، بروشور از ۸۰ هزار تومانه. جزئیات بیشتری بگید تا دقیق بگم.",

    // Order process
    "چطور سفارش بدم؟": "خیلی ساده!\n\n۱. به بخش «ثبت سفارش» در همین سایت برید\n۲. فرم رو پر کنید (نام، شماره، نوع خدمت)\n۳. کارشناسان ما حداکثر تا ۲ ساعت باهاتون تماس می‌گیرن\n\nیا همینجا بگید چی می‌خواید، من راهنمایی‌تون می‌کنم 😊",
    "سفارش": "برای سفارش می‌تونید فرم پایین صفحه رو پر کنید یا جزئیات رو اینجا بگید تا کمکتون کنم.",
    "ثبت سفارش": "روی دکمه «شروع سفارش» کلیک کنید یا به بخش فرم سفارش اسکرول کنید. فرم رو پر کنید تا باهاتون تماس بگیریم.",

    // Delivery
    "زمان تحویل چقدر است؟": "زمان تحویل معمولاً بین ۲ تا ۵ روز کاری هست:\n• سفارش‌های ساده (کارت ویزیت آماده): ۲–۳ روز\n• با طراحی اختصاصی: ۳–۵ روز\n• سفارش‌های فوری: با هزینه بیشتر امکان ۱ روزه هم هست\n\nزمان دقیق رو موقع ثبت سفارش اعلام می‌کنیم.",
    "تحویل": "تحویل معمولاً ۲ تا ۵ روز کاری طول می‌کشه. برای سفارش فوری بگید تا بررسی کنیم.",
    "چند روز": "معمولاً ۲ تا ۵ روز کاری. بستگی به نوع سفارش و حجم کار داره.",

    // Design
    "طراحی": "دو حالت داریم:\n۱. طرح آماده ما رو انتخاب کنید (ارزان‌تر و سریع‌تر)\n۲. طراحی اختصاصی توسط تیم ما (هزینه جدا)\n۳. یا خودتون طرح رو آپلود کنید\n\nکدوم رو ترجیح می‌دید؟",
    "طراح": "بله، تیم طراحی داریم. می‌تونید طرح اختصاصی سفارش بدید یا طرح خودتون رو بفرستید.",

    // Contact / Support
    "تماس": "می‌تونید فرم سفارش رو پر کنید تا باهاتون تماس بگیریم، یا همینجا سؤال‌تون رو بپرسید. پشتیبانی ۲۴ ساعته از طریق همین چت فعاله.",
    "پشتیبانی": "من همینجام! سؤال‌تون رو بپرسید یا فرم سفارش رو پر کنید تا کارشناس انسانی باهاتون تماس بگیره.",

    // About
    "درباره": "سپهر ۳۶۰ یک استارتاپ با رویکرد Lean Startup هست. هدف ما ارائه پکیج کامل خدمات تبلیغاتی و چاپ به کسب‌وکارهای کوچک، رستوران‌ها و استارتاپ‌هاست — همه چیز در یک جا.",
    "سپهر": "سپهر ۳۶۰ پلتفرم یکپارچه طراحی، چاپ و تحویل محصولات تبلیغاتیه. از کارت ویزیت تا بسته‌بندی.",

    // Default
    "default": "متوجه نشدم 😅 می‌تونید واضح‌تر بگید یا از دکمه‌های پیشنهادی استفاده کنید.\n\nمثلاً بپرسید:\n• قیمت کارت ویزیت\n• نحوه سفارش\n• زمان تحویل\n• خدمات شما"
};

// Keywords for fuzzy matching
const keywordMap = [
    { keywords: ["سلام", "درود", "صبح", "عصر", "hello", "hi"], key: "سلام" },
    { keywords: ["قیمت", "هزینه", "چقدر پول", "تعرفه"], key: "قیمت" },
    { keywords: ["کارت ویزیت", "کارت‌ویزیت", "ویزیت"], key: "قیمت کارت ویزیت چقدر است؟" },
    { keywords: ["سفارش", "ثبت", "چطور سفارش", "نحوه سفارش"], key: "چطور سفارش بدم؟" },
    { keywords: ["تحویل", "زمان", "چند روز", "کی میرسه"], key: "زمان تحویل چقدر است؟" },
    { keywords: ["خدمات", "چیکار میکنید", "محصول", "چه کار"], key: "خدمات شما چیست؟" },
    { keywords: ["طراحی", "طراح", "گرافیک"], key: "طراحی" },
    { keywords: ["تماس", "پشتیبانی", "کمک"], key: "تماس" },
    { keywords: ["درباره", "سپهر", "کی هستید"], key: "درباره" },
];

function findResponse(userMsg) {
    const msg = userMsg.trim().toLowerCase();

    // Exact match first
    for (const key in botResponses) {
        if (msg === key.toLowerCase()) {
            return botResponses[key];
        }
    }

    // Keyword matching
    for (const item of keywordMap) {
        for (const kw of item.keywords) {
            if (msg.includes(kw.toLowerCase())) {
                return botResponses[item.key] || botResponses["default"];
            }
        }
    }

    return botResponses["default"];
}

// ===== Chat UI Functions =====
function openChat() {
    const chatbot = document.getElementById("chatbot");
    const toggle = document.getElementById("chatToggle");
    chatbot.classList.add("open");
    toggle.style.display = "none";
    document.getElementById("chatInput").focus();
}

function toggleChat() {
    const chatbot = document.getElementById("chatbot");
    const toggle = document.getElementById("chatToggle");
    if (chatbot.classList.contains("open")) {
        chatbot.classList.remove("open");
        toggle.style.display = "flex";
    } else {
        openChat();
    }
}

function addMessage(text, isUser = false) {
    const container = document.getElementById("chatMessages");
    const div = document.createElement("div");
    div.className = `message ${isUser ? "user" : "bot"}`;
    
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerText = text;
    div.appendChild(bubble);
    
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById("chatInput");
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, true);
    input.value = "";

    // Simulate typing delay
    setTimeout(() => {
        const response = findResponse(text);
        addMessage(response, false);
    }, 600 + Math.random() * 400);
}

function sendQuick(text) {
    addMessage(text, true);
    setTimeout(() => {
        const response = findResponse(text);
        addMessage(response, false);
    }, 500);
}

function handleChatKey(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
}

// ===== Form & Scroll =====
function scrollToOrder() {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
}

function submitOrder(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    
    if (!name || !phone || !service) {
        alert("لطفاً فیلدهای الزامی را پر کنید.");
        return;
    }

    // Hide form, show success
    document.getElementById("orderForm").style.display = "none";
    document.getElementById("formSuccess").style.display = "block";

    // Optional: also notify in chatbot
    setTimeout(() => {
        openChat();
        addMessage(`سفارش جدید ثبت شد!\nنام: ${name}\nتلفن: ${phone}\nخدمت: ${service}\n\nبه زودی با شما تماس می‌گیریم ✅`, false);
    }, 800);
}

// Close chat when clicking outside (optional enhancement)
document.addEventListener("click", function(e) {
    const chatbot = document.getElementById("chatbot");
    const toggle = document.getElementById("chatToggle");
    if (chatbot.classList.contains("open") && 
        !chatbot.contains(e.target) && 
        !toggle.contains(e.target)) {
        // Uncomment if you want click-outside to close:
        // chatbot.classList.remove("open");
        // toggle.style.display = "flex";
    }
});
