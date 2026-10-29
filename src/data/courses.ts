import type { Course, Topic } from './types';

// B sınıfı yazılı sınav (e-Sınav) ders dağılımı: 23 + 12 + 9 + 6 = 50 soru
export const COURSES: Course[] = [
  { id: 'tc', name: 'Trafik ve Çevre', short: 'TÇ', examQuestions: 23 },
  { id: 'iy', name: 'İlk Yardım', short: 'İY', examQuestions: 12 },
  { id: 'at', name: 'Araç Tekniği', short: 'AT', examQuestions: 9 },
  { id: 'ta', name: 'Trafik Adabı', short: 'TA', examQuestions: 6 },
];

export const courseById = (id: string) => COURSES.find((c) => c.id === id)!;

const t = (id: string, courseId: Topic['courseId'], title: string, minutes: number, hasLesson = true): Topic => ({
  id, courseId, title, minutes, hasLesson,
});

// Tasarımdaki konu sayıları: TÇ 14, İY 8, AT 7, TA 4
export const TOPICS: Topic[] = [
  t('tc-isaretler', 'tc', 'Trafik işaretleri', 8, true),
  t('tc-kavsak', 'tc', 'Kavşaklarda geçiş hakkı', 6, true),
  t('tc-hiz', 'tc', 'Hız sınırları ve takip mesafesi', 6, true),
  t('tc-park', 'tc', 'Park ve duraklama', 5, true),
  t('tc-sollama', 'tc', 'Öndeki aracı geçme (sollama)', 6),
  t('tc-serit', 'tc', 'Şerit kullanımı ve dönüşler', 6),
  t('tc-isikli', 'tc', 'Işıklı işaretler ve trafik görevlisi', 5, true),
  t('tc-yaya', 'tc', 'Yaya ve okul geçitleri', 4),
  t('tc-demiryolu', 'tc', 'Demiryolu geçitleri', 4),
  t('tc-tunel', 'tc', 'Tünel ve köprüler', 4),
  t('tc-geri', 'tc', 'Geri gitme ve U dönüşü', 4),
  t('tc-alkol', 'tc', 'Alkol ve ceza puanları', 5),
  t('tc-cevre', 'tc', 'Trafik ve çevre', 5),
  t('tc-kaza', 'tc', 'Trafik kazası ve tutanak', 6),

  t('iy-ilkeler', 'iy', 'İlk yardımın temel ilkeleri', 6),
  t('iy-degerlendirme', 'iy', 'Kazazedeyi değerlendirme', 6),
  t('iy-bys', 'iy', 'Temel yaşam desteği', 8, true),
  t('iy-kanama', 'iy', 'Kanamalar ve şok', 7, true),
  t('iy-yanik', 'iy', 'Yanıklar', 5),
  t('iy-kirik', 'iy', 'Kırık, çıkık ve burkulma', 6),
  t('iy-zehir', 'iy', 'Zehirlenmeler', 5),
  t('iy-tasima', 'iy', 'Kazazedeyi taşıma', 4),

  t('at-motor', 'at', 'Motor ve çalışma ilkesi', 7),
  t('at-yaglama', 'at', 'Yağlama sistemi', 5),
  t('at-sogutma', 'at', 'Soğutma sistemi', 5),
  t('at-yakit', 'at', 'Yakıt ve hava sistemi', 5),
  t('at-fren', 'at', 'Fren sistemi', 6, true),
  t('at-lastik', 'at', 'Lastikler ve direksiyon', 5),
  t('at-bakim', 'at', 'Bakım ve gösterge ışıkları', 5),

  t('ta-saygi', 'ta', 'Trafik adabı ve saygı', 4),
  t('ta-yaya', 'ta', 'Yaya ve sürücü davranışı', 4),
  t('ta-ofke', 'ta', 'Öfke ve dikkat yönetimi', 4),
  t('ta-hassas', 'ta', 'Engelli, yaşlı ve çocuklara saygı', 4),
];

export const topicsByCourse = (courseId: string) => TOPICS.filter((x) => x.courseId === courseId);
export const topicById = (id: string) => TOPICS.find((x) => x.id === id);
