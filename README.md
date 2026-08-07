# BAYAN ART - موقع أتيليه الحناء

موقع ثابت (Static Website) لـ BAYAN ART - أتيليه الحناء في مصر.

## 🚀 النشر على GitHub Pages

1. أنشئ مستودع جديد على GitHub باسم `bayan-art-static`
2. ارفع جميع ملفات المجلد (ماعدا ملف README هذا إن أردت)
3. اذهب إلى **Settings > Pages**
4. اختر **Source: Deploy from a branch**
5. اختر فرع `main` والمجلد `/ (root)`
6. اضغط **Save**
7. بعد دقيقه ستكون الموقع متاح على:
   `https://<username>.github.io/bayan-art-static/`

## 📁 هيكل الملفات

```
bayan-art-static/
├── index.html      # الصفحه الرئيسيه
├── style.css       # ملف التنسيق
├── script.js       # التفاعلات والجافاسكريبت
├── .nojekyll       # ملف ضروري لـ GitHub Pages
├── images/         # مجلد الصور
│   ├── logo_a4e7bf47.png
│   ├── hero_0c9f33e7.png
│   ├── about_9bce3cc3.png
│   ├── service-bridal_afb6bd53.png
│   ├── service-party_723864e6.png
│   ├── service-kids_a1be5b98.png
│   ├── gallery-1_f57697d0.png
│   ├── gallery-2_68216282.png
│   ├── gallery-3_dad420c6.png
│   ├── gallery-4_b058de2f.png
│   └── gallery-5_25ec77f6.png
└── README.md
```

## 📝 ملاحظات

- لا يحتاج أي build tools أو npm أو Node.js
- يعمل مباشره على أي سيرفر ويب ثابت
- RTL عربي بالكامل
- متجاوب مع جميع الشاشات
- خطوط Google Fonts: Cairo + Tajawal
- الألوان: ذهبي #C9A86A مع كريمي وأبيض

## 📸 الصور

الموقع يستخدم صور بمسارات مثل `images/logo_a4e7bf47.png`. تأكدي من وضع الصور في مجلد `images/` قبل النشر.

يمكنك استخدام صورك الخاصه وعدّل المسارات في `index.html` حسب الحاجه.
