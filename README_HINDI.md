# GOVIND TRUECALLER — Starter Project

यह Android + Web + Supabase ऑनलाइन बैकएंड का शुरुआती सोर्स प्रोजेक्ट है।

## क्या शामिल है
- Responsive blue/white वेबसाइट (React + Vite)
- Android native starter (Kotlin)
- Supabase SQL schema और Row Level Security
- स्पैम रिपोर्टिंग और नंबर लुकअप के लिए सुरक्षित API skeleton
- अनुमति/प्राइवेसी आधारित फीचर योजना

## जरूरी सच्चाई
यह तैयार/प्रकाशित Truecaller clone या इंस्टॉल करने योग्य APK नहीं है। APK बनाने के लिए Android Studio/SDK से build करना होगा। वेबसाइट चलाने और डेटाबेस जोड़ने के लिए अपना Supabase project बनाकर URL और anon key डालें। किसी नंबर के मालिक की पहचान स्वतः उपलब्ध नहीं होती; नंबर डेटा सहमति, वैध स्रोत और लागू कानूनों के अनुसार ही जोड़ा जा सकता है।

## वेबसाइट चलाएँ
1. Node.js LTS इंस्टॉल करें।
2. `web` फ़ोल्डर में जाएँ।
3. `npm install`
4. `.env.example` को `.env` नाम दें और Supabase URL/anon key भरें।
5. `npm run dev`

## Android
`android` फ़ोल्डर Android Studio में खोलें और Gradle sync करें। फिर Run या Build > Build APK(s) चुनें। Android version और device के अनुसार कॉल/SMS roles और permissions लागू होंगे।

## Backend
Supabase SQL Editor में `backend/schema.sql` चलाएँ। `backend/edge-functions/` में सुरक्षित server-side function का नमूना है। Service-role key कभी ऐप या वेबसाइट के client code में न रखें।

## अभी placeholder/आगे का काम
- वास्तविक caller-ID data provider और consent workflow
- Android default dialer role integration और call-screen UI
- SMS default-handler integration (केवल उपयुक्त अनुमति/role के साथ)
- abuse prevention, moderation, deletion requests, rate limits
- production authentication, monitoring, backups और legal review
