import type { SiteCopy } from '../types';
export default {
  meta: { description: '记录开支，规划每月预算，为储蓄留出空间。了解 Vetra：无广告的个人财务应用，可自行选择云端同步。' },
  nav: { features: '了解功能', demo: '试用 Vetra', faq: '常见问题', download: '在 Google Play 查看', language: '语言', theme: '切换主题', skip: '跳至正文' },
  hero: { eyebrow: '更清晰，更安心。', title: '为重要的事留出空间。', text: '你的开支、你的计划，以及下一步。把财务集中在一处，让管理变得简单。', note: '目前通过 Google Play 封闭测试提供。', chips: ['无广告', '按你的节奏', '由你决定'] },
  planning: { eyebrow: '适合你的生活的计划', title: '你的月份，不只是日历。', text: '从这次发薪到下次发薪，为日常开支、账单和储蓄安排各自的位置。清楚知道已预留多少，还能使用多少。', items: ['待付账单', '日常开支', '储蓄'] },
  clarity: { eyebrow: '看清全貌，不被打扰', title: '每一笔都更清楚。', text: '集中查看账户，快速找到交易，了解资金去向。需要时再查看实用的细节。', items: ['账户一览', '清晰的交易', '实用的分析'] },
  demo: { eyebrow: '少一点阅读，多一点体验。', title: '先体验一下 Vetra。', text: '添加一笔开支，预留一些储蓄，看看数字如何变化。此互动示例使用虚构数据，不涉及你的真实账户。', tabs: ['概览', '交易', '计划'], fields: ['金额', '描述', '分类', '账户', '预留', '保存', '重新开始', '关闭'], labels: ['总余额', '已支出', '已预留', '可用'], accounts: ['日常账户', '储蓄账户', '钱包'], categories: ['食品', '交通'], actions: ['添加开支', '预留储蓄', '体验演示'], goal: '应急储备', warning: '演示 · 虚构数据 · 欧元', loading: '正在打开演示…', error: '请检查填写的内容后重试。', success: '已保存在此演示中。' },
  details: { eyebrow: '小细节，真不同。', title: '为真实的生活而设计。', text: '财务不只是每月的总额。Vetra 也为生活中的细节留出空间。', items: [{ title: '每个目标都有位置', text: '在资金分区中分配资金，跟踪你的储蓄目标。' }, { title: '可以共享的账户', text: '共同查看共享账户的交易和余额。' }, { title: '不再遗漏', text: '记录别人欠你的钱，并在收到还款时登记。' }] },
  trust: { eyebrow: '你的钱，你来决定。', title: '让财务管理更安心。', text: '没有广告打扰，不必连接银行。是否使用云端同步，由你决定。', items: [{ title: '离线也能用', text: '完成初始设置后，可以离线管理财务。登录和云端服务需要网络连接。' }, { title: '按需同步', text: '开启云端同步，在多个设备上使用你的账户数据。' }, { title: '保留备份', text: '保存 Vetra 备份以便恢复数据，或导出 PDF 方便查看。' }] },
  faq: { title: '你可能想了解这些。', items: [{ title: '必须连接银行吗？', text: '不需要。交易由你手动记录。Vetra 不是银行，也不会替你付款。' }, { title: '支持哪些货币？', text: '支持 EUR、USD、GBP、CNY、CHF、AUD、CAD 和 BRL。初始设置选择的货币适用于你的财务。目前暂不支持之后更改货币。' }, { title: '必须开启同步吗？', text: '不必。你可以把数据保留在设备上。如果选择这样做，请定期保存备份。' }, { title: '没有网络可以使用吗？', text: '完成初始设置后可以。身份验证和云端服务需要网络连接。' }, { title: '现在可以试用吗？', text: 'Vetra 目前在 Google Play 进行封闭测试。打开应用页面，查看你是否有访问权限。' }] },
  footer: { title: '每天，都更清楚一点。', text: '让下个月的生活轻松一点。', privacy: '隐私政策', contact: '联系我们', deletion: '申请删除账户', rights: '用心打造，没有广告。', images: '探索真实界面' },
} satisfies SiteCopy;
