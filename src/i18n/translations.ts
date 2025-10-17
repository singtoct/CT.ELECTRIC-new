export type Language = 'en' | 'th' | 'zh';

export const translations = {
  en: {
    // Sidebar & Page Titles
    dashboard_title: 'Dashboard',
    productionSchedule: 'Production Schedule',
    reports: 'Reports',
    productManagement: 'Product Management',

    // Dashboard Page
    aiProductionForecast: 'AI Production Forecast',
    qcTasks: 'QC Tasks',
    latest7DaysQuantity: 'Production Quantity Last 7 Days',
    upcomingOrders: 'Upcoming Production Orders',

    // Production Schedule Page
    allProductionOrders: 'All Production Orders',
    searchByProductName: 'Search by product name...',
    
    // Shared Table Headers
    productName: 'Product Name',
    quantity: 'Quantity',
    dueDate: 'Due Date',
    status: 'Status',
    lotNumber: 'Lot Number',
    
    // Order Detail Panel
    orderDetails: 'Order Details',
    salePrice: 'Sale Price',
    quantityDelivered: 'Quantity Delivered',
    color: 'Color',
    stock: 'Stock',
    id: 'Order ID',
    customerId: 'Customer ID',
    
    // Placeholders
    pageUnderConstruction: 'Page Under Construction',
    search: 'Search...',
  },
  th: {
    // Sidebar & Page Titles
    dashboard_title: 'ภาพรวมระบบ',
    productionSchedule: 'ตารางการผลิต',
    reports: 'รายงาน',
    productManagement: 'จัดการสินค้า',
    
    // Dashboard Page
    aiProductionForecast: 'AI พยากรณ์แผนการผลิต',
    qcTasks: 'งานตรวจสอบ (QC)',
    latest7DaysQuantity: 'สรุปปริมาณสินค้า 7 วันล่าสุด',
    upcomingOrders: 'การผลิตที่ออกคำสั่งล่วงหน้า',
    
    // Production Schedule Page
    allProductionOrders: 'รายการคำสั่งผลิตทั้งหมด',
    searchByProductName: 'ค้นหาด้วยชื่อสินค้า...',

    // Shared Table Headers
    productName: 'ชื่อสินค้า',
    quantity: 'จำนวน',
    dueDate: 'กำหนดส่ง',
    status: 'สถานะ',
    lotNumber: 'ล็อตนัมเบอร์',

    // Order Detail Panel
    orderDetails: 'รายละเอียดคำสั่งผลิต',
    salePrice: 'ราคาขาย',
    quantityDelivered: 'จำนวนที่ส่งแล้ว',
    color: 'สี',
    stock: 'สต็อก',
    id: 'รหัสคำสั่งผลิต',
    customerId: 'รหัสลูกค้า',

    // Placeholders
    pageUnderConstruction: 'หน้านี้อยู่ระหว่างการพัฒนา',
    search: 'ค้นหา...',
  },
  zh: {
    // Sidebar & Page Titles
    dashboard_title: '仪表板',
    productionSchedule: '生产计划',
    reports: '报告',
    productManagement: '产品管理',

    // Dashboard Page
    aiProductionForecast: 'AI 生产预测',
    qcTasks: '质检任务',
    latest7DaysQuantity: '最近7天产量总结',
    upcomingOrders: '即将开始的生产订单',

    // Production Schedule Page
    allProductionOrders: '所有生产订单',
    searchByProductName: '按产品名称搜索...',

    // Shared Table Headers
    productName: '产品名称',
    quantity: '数量',
    dueDate: '交货日期',
    status: '状态',
    lotNumber: '批号',

    // Order Detail Panel
    orderDetails: '订单详情',
    salePrice: '售价',
    quantityDelivered: '已交货数量',
    color: '颜色',
    stock: '库存',
    id: '订单ID',
    customerId: '客户ID',

    // Placeholders
    pageUnderConstruction: '页面正在建设中',
    search: '搜索...',
  },
};

export type TranslationKey = keyof typeof translations.en;
