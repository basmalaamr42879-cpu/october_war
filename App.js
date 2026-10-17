import React, { useState } from 'react';
import './App.css'; 

// بيانات الأقسام والصور (يمكنك استبدال روابط الصور بروابط صورك الحقيقية)
const galleryData = [
{
id: 1,
category: 'planning',
title: 'الرئيس السادات يخطط للحرب',
description: 'غرفة العمليات المشتركة والتخطيط الاستراتيجي لـ "توجيه إستراتيجي" الذي غير مجرى التاريخ.',
imgUrl: 'https://images.unsplash.com/photo-placeholder-sadat-planning.jpg' // استبدليها بصورة السادات وهو يخطط
},
{
id: 2,
category: 'heroes',
title: 'أبطال وجنود حقيقيون',
description: 'الشهيد البطل أحمد منسي ورفاقه من أبطال القوات المسلحة الذين ضربوا أروع أمثلة التضحية.',
imgUrl: 'https://images.unsplash.com/photo-placeholder-mansy.jpg' // استبدليها بصورة المنسي والأبطال
},
{
id: 3,
category: 'crossing',
title: 'العبور العظيم وهدم بارليف',
description: 'لحظة عبور القناة وتدمير خط بارليف المنيع بخراطيم المياه وصيحات "الله أكبر" تزلزل الأرض.',
imgUrl: 'https://images.unsplash.com/photo-placeholder-crossing.jpg' // استبدليها بصور العبور والخط
},
{
id: 4,
category: 'speeches',
title: 'خطاب النصر للرئيس السادات',
description: 'منبر مجلس الشعب يشهد على أعظم خطاب تاريخي يسطر نصر أكتوبر المجيد واستعادة الكرامة.',
imgUrl: 'https://images.unsplash.com/photo-placeholder-speech.jpg' // استبدليها بصورة السادات يلقي الخطاب
},
{
id: 5,
category: 'prisoners',
title: 'الأسرى الإسرائيليين ببيجامات الكستور',
description: 'مشهد انكسار العدو وعودتهم ببيجامات الكستور المصرية المحلة، تجسيداً لانتصار الإرادة المصرية.',
imgUrl: 'https://images.unsplash.com/photo-placeholder-kastor.jpg' // استبدليها بصورة بيجامات الكستور الشهيرة
}
]; 

function App() {
const [filter, setFilter] = useState('all'); 

const filteredGallery = filter === 'all'
? galleryData
: galleryData.filter(item => item.category === filter); 

return ( 

);
} 

export default App;
