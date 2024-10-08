/*
            ██╗    ██╗██╗ ██████╗██╗  ██╗    ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ 
            ██║    ██║██║██╔════╝██║ ██╔╝    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
            ██║ █╗ ██║██║██║     █████╔╝     ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
            ██║███╗██║██║██║     ██╔═██╗     ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
            ╚███╔███╔╝██║╚██████╗██║  ██╗    ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
             ╚══╝╚══╝ ╚═╝ ╚═════╝╚═╝  ╚═╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ 
             Wick® Studio | discord.gg/wicks
*/


const ms = require('ms');

module.exports = {
  token: '', // التوكن
  allowedChannelId: '', // ايدي روم خاص للبنك

  // اوقات التجميد لكل امر
  cooldowns: {
    راتب: ms('1d'), // زيادة المهلة للحصول على الراتب
    حظ: ms('2h'), // زيادة المهلة لأمر الحظ
    استثمار: ms('4h'), // زيادة المهلة للاستثمار
    تداول: ms('4h'), // زيادة المهلة للتداول
    قرض: ms('2h'), // زيادة المهلة لأخذ قرض جديد
    توب: ms('30s'), // زيادة المهلة لقائمة الأغنياء
    نرد: ms('4h'), // زيادة المهلة للعبة النرد
    قمار: ms('4h'), // زيادة المهلة لأمر القمار
    نهب: ms('4h'), // زيادة المهلة لأمر النهب
    حماية: ms('4h'), // زيادة المهلة لتفعيل الحماية
    يومي: ms('2d'), // زيادة المهلة للأمر اليومي
    شراء: ms('1m'), // زيادة المهلة لأمر الشراء
    منازل: ms('1m'), // زيادة المهلة لأمر المنازل
    شركات: ms('1m'), // زيادة المهلة لأمر الشركات
    شراء_شركة: ms('1m'), // زيادة المهلة لشراء شركة
    بيع_شركة: ms('1m'), // زيادة المهلة لبيع شركة
  },

  startingSalary: 500, // تقليل الراتب الابتدائي
  investmentMultiplier: 1.1, // تقليل مضاعف الاستثمار لجعل الربح أصعب
  transferTaxRate: 0.20, // زيادة نسبة الضريبة على التحويلات المالية
  gambleMultiplier: 1.5, // تقليل مضاعف القمار لجعل الربح أقل
  rentInterval: ms('1h'), // تسديد القرض التلقائي

  // إعدادات قائمة الأوامر
  commandsListTitle: '📜 قائمة الأوامر الخاصة بالبوت 📜',
  commandsListDescription: 'هذه هي جميع الأوامر المتاحة في البوت:',
  embedColor: '#00AAFF',

  // إعدادات قائمة أغنى الأشخاص بالسيرفر
  topPlayersLimit: 6,
  topPlayersTitle: '🏆 قائمة أغنى الأشخاص بالسرفر 🏆',
  topPlayersDescription: 'هؤلاء هم أغنى الأشخاص بالسرفر حسب رصيدهم الحالي:',
  topPlayersEmbedColor: '#FFD700',

  // إعدادات الحظ
  luckMinAmount: 500, // تقليل أقل مبلغ يمكن الحصول عليه بالحظ
  luckMaxAmount: 2500, // تقليل أكبر مبلغ يمكن الحصول عليه بالحظ

  // إعدادات الحماية
  shieldMaxHours: 3, // تقليل أقصى عدد ساعات للحماية
  shieldCostPerHour: 500000, // زيادة تكلفة كل ساعة من الحماية

  // الوظائف
  jobTitles: [
    { name: 'ملك', cost: 50000, salary: 5000 },
    { name: 'امير', cost: 45000, salary: 4500 },
    { name: 'طيار', cost: 40000, salary: 4000 },
    { name: 'قاضي', cost: 35000, salary: 3500 },
    { name: 'مبرمج', cost: 30000, salary: 3000 },
    { name: 'دكتور', cost: 30000, salary: 3000 },
    { name: 'مهندس', cost: 25000, salary: 2500 },
    { name: 'معلم', cost: 20000, salary: 2000 },
    { name: 'جندي', cost: 15000, salary: 1500 },
    { name: 'طباخ', cost: 10000, salary: 1000 },
    { name: 'رسام', cost: 8000, salary: 800 },
    // تقدر تضيف وظائف هنا بنفس النمط
],

  pointsPerWin: 5,
  pointsPerLoss: -2,
  baseSalary: 10000, // الراتب الاساسي

  // قائمة المنازل المتاحة
  houses: [
    { price: 1000000, income: 200000, ownerId: null }, // زيادة سعر المنازل وتقليل الدخل
    { price: 1000000, income: 200000, ownerId: null },
    { price: 1000000, income: 200000, ownerId: null },
    { price: 1000000, income: 200000, ownerId: null },
    { price: 1000000, income: 200000, ownerId: null },
  ],
};