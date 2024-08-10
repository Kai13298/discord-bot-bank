module.exports = {
    name: 'استثمار',
    description: 'Invest money with risk',
    async execute(message, db, config, args) {
        const userId = message.author.id;
        let currentBalance = await db.get(`balance_${userId}`) || 0;

        if (currentBalance <= 0) {
            return message.reply('ليس لديك رصيد كافي للاستثمار.');
        }

        let investmentType = args[0];
        let investmentAmount;

        switch (investmentType) {
            case 'نص':
                investmentAmount = Math.round(currentBalance / 2);
                break;
            case 'ربع':
                investmentAmount = Math.round(currentBalance / 4);
                break;
            case 'كل':
            default:
                investmentAmount = currentBalance;
                break;
        }

        const isWin = Math.random() < 0.5;
        const multiplier = isWin ? config.investmentMultiplier : 1 - Math.random() * 0.3;
        const resultAmount = Math.round(investmentAmount * multiplier);
        const newBalance = isWin ? currentBalance - investmentAmount + resultAmount : currentBalance - investmentAmount + resultAmount;

        await db.set(`balance_${userId}`, newBalance);

        let messageContent;
        if (isWin) {
            messageContent = `🎉 استثمار ناجح بنسبة ${Math.round((multiplier - 1) * 100)}%\nمبلغ الربح: $${resultAmount.toLocaleString()}\nرصيدك السابق: $${currentBalance.toLocaleString()}\nرصيدك الحالي: $${newBalance.toLocaleString()}`;
        } else {
            messageContent = `😢 القسمة استثمار خاسر بنسبة ${Math.round((1 - multiplier) * 100)}%\nمبلغ الخسارة: $${Math.abs(resultAmount).toLocaleString()}\nرصيدك السابق: $${currentBalance.toLocaleString()}\nرصيدك الحالي: $${newBalance.toLocaleString()}`;
        }

        message.reply({
            content: messageContent,
            allowedMentions: { repliedUser: false }
        });
    }
};

const { isInCooldown, setCooldown } = require('../utils/cooldown.js');
