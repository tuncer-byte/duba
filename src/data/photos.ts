/* Araç tekniği konu anlatımı görselleri (Wikimedia Commons; lisans/atıf bilgisi src/data/credits.ts içinde). */
import type { ImageSourcePropType } from 'react-native';

export interface Photo { src: ImageSourcePropType; caption: string; author: string; license: string; page: string }

export const PHOTOS: Record<string, Photo> = {
  'motor-4zaman': { src: require('../../assets/photos/motor-4zaman.jpg'), caption: 'Dört zamanlı motorun zamanları (şema; İngilizce etiketler: Intake = emme, Compression = sıkıştırma, Ignition = ateşleme/iş, Exhaust = egzoz)', author: 'Pearson Scott Foresman', license: 'Public domain', page: 'https://commons.wikimedia.org/wiki/File:Stroke_(PSF).png' },
  'motor-piston': { src: require('../../assets/photos/motor-piston.jpg'), caption: 'Kesit alınmış motorda pistonlar ve krank mili', author: 'Mj-bird', license: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Internal_combustion_engine_pistons_of_partial_cross-sectional_view.jpg' },
  'yag-seviye': { src: require('../../assets/photos/yag-seviye.jpg'), caption: 'Yağ seviye çubuğuyla motor yağı seviyesini kontrol etme', author: 'Shixart1985', license: 'CC BY 2.0', page: 'https://commons.wikimedia.org/wiki/File:Person_checking_engine_oil_level_in_a_car_hood_at_home_in_daylight.jpg' },
  'yag-filtre': { src: require('../../assets/photos/yag-filtre.jpg'), caption: 'Motor yağı filtresi', author: 'Petrb', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Old_motorcycle_engine_oil_filter_Hiflo_Filtro.jpg' },
  'sogutma-radyator': { src: require('../../assets/photos/sogutma-radyator.jpg'), caption: 'Radyatör: ince borular sıvının ısısını havaya verir (şema)', author: 'Wilhelm Maybach', license: 'Public domain', page: 'https://commons.wikimedia.org/wiki/File:Tubular_car_radiator_copy_of_patent_drawing.png' },
  'hava-filtre-kutu': { src: require('../../assets/photos/hava-filtre-kutu.jpg'), caption: 'Hava filtresi kutusu', author: 'Enginedesigner', license: 'Public domain', page: 'https://commons.wikimedia.org/wiki/File:Ram_air_cleaner.jpg' },
  'hava-filtre-motor': { src: require('../../assets/photos/hava-filtre-motor.jpg'), caption: 'Motora takılı hava filtresi', author: 'Envy fstop', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Under_the_hood_of_car.jpg' },
  'fren-disk': { src: require('../../assets/photos/fren-disk.jpg'), caption: 'Diskli fren: disk, kaliper ve balatalar', author: 'Riley from Christchurch, New Zealand', license: 'CC BY 2.0', page: 'https://commons.wikimedia.org/wiki/File:Alarm_bells!_(25681917701).jpg' },
  'fren-kampana': { src: require('../../assets/photos/fren-kampana.jpg'), caption: 'Kampanalı (tamburlu) fren (şema; İngilizce etiketler: Brake drum = kampana, Lining = balata, Shoe = pabuç, Wheel cylinder = tekerlek silindiri)', author: 'Pearson Scott Foresman', license: 'Public domain', page: 'https://commons.wikimedia.org/wiki/File:Brake_Drum_(PSF).jpg' },
  'lastik-yapi': { src: require('../../assets/photos/lastik-yapi.jpg'), caption: 'Lastiğin kesit yapısı (çizim)', author: 'Duduk; Alexander', license: 'Public domain', page: 'https://commons.wikimedia.org/wiki/File:Tire_plies.png' },
  'lastik-desen': { src: require('../../assets/photos/lastik-desen.jpg'), caption: 'Lastik diş (sırt) deseni', author: 'TaurusEmerald', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Goodyear_Tire_Tread_Wear.jpg' },
  'aku': { src: require('../../assets/photos/aku.jpg'), caption: 'Akü simgesi', author: 'Quincy Morgan', license: 'CC0', page: 'https://commons.wikimedia.org/wiki/File:Car_battery_Pinhead_icon.svg' },
  'buji': { src: require('../../assets/photos/buji.jpg'), caption: 'Buji', author: 'Wikimedia Commons katkıcısı', license: 'Public domain', page: 'https://commons.wikimedia.org/wiki/File:Spark_plug.jpg' },
  'silecek': { src: require('../../assets/photos/silecek.jpg'), caption: 'Cam sileceği', author: 'Shixart1985', license: 'CC BY 2.0', page: 'https://commons.wikimedia.org/wiki/File:Wipers_clear_rain_from_a_blue_car_as_droplets_cling_to_the_windshield_in_a_green_environment.jpg' },
  'ampul': { src: require('../../assets/photos/ampul.jpg'), caption: 'Far/sinyal ampulü', author: 'Gausanchennai', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Electric_bulbs_for_vehicles.jpg' },
};

/** Konu anlatımı adımlarına görsel eşlemesi: konuId → adım başlığı → görsel anahtarları */
export const STEP_PHOTOS: Record<string, Record<string, string[]>> = {
  'at-motor': {
    'Motorun ana parçaları': ['motor-piston'],
    'Dört zamanlı motor': ['motor-4zaman'],
  },
  'at-yaglama': {
    'Yağlama sisteminin parçaları': ['yag-filtre'],
    'Yağ seviyesini kontrol etme': ['yag-seviye'],
  },
  'at-sogutma': {
    'Sıvı soğutmalı sistemin parçaları': ['sogutma-radyator'],
  },
  'at-yakit': {
    'Hava filtresi': ['hava-filtre-kutu', 'hava-filtre-motor'],
  },
  'at-fren': {
    'Fren türleri': ['fren-disk', 'fren-kampana'],
  },
  'at-lastik': {
    'Lastik neden önemlidir?': ['lastik-yapi'],
    'Diş derinliği': ['lastik-desen'],
  },
  'at-bakim': {
    'Yola çıkmadan günlük kontrol': ['silecek', 'ampul'],
    'Akü ve elektrik sistemi': ['aku'],
    'Periyodik bakım': ['buji'],
  },
};
