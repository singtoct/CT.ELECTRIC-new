import React from 'react';
import type { PackingOrder } from './types';

export const DollarSignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v1m0 10v1m0-7h.01M6 12h.01M18 12h.01M6 9h.01M18 9h.01M6 15h.01M18 15h.01" />
  </svg>
);

export const ShoppingCartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export const ClipboardListIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);

export const CubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m0 10l8 4m0-14v10" />
    </svg>
);

export const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 2a1 1 0 00-1 1v1.586l-1.293 1.293a1 1 0 101.414 1.414L5 6.414V8a1 1 0 002 0V6.414l1.293 1.293a1 1 0 101.414-1.414L8 4.586V3a1 1 0 00-2 0V1.586l-1.293-1.293a1 1 0 00-1.414 0L5 2zm5 10a1 1 0 00-1 1v1.586l-1.293 1.293a1 1 0 101.414 1.414L10 16.414V18a1 1 0 002 0v-1.586l1.293 1.293a1 1 0 101.414-1.414L13 14.586V13a1 1 0 00-2 0v-1.586l-1.293-1.293a1 1 0 00-1.414 0L10 12zm-5-5a1 1 0 00-1 1v1.586l-1.293 1.293a1 1 0 101.414 1.414L5 11.414V13a1 1 0 002 0v-1.586l1.293 1.293a1 1 0 101.414-1.414L8 9.586V8a1 1 0 00-2 0V6.586l-1.293-1.293a1 1 0 00-1.414 0L5 7z" clipRule="evenodd" />
    </svg>
);


export const MOCK_PACKING_ORDERS: PackingOrder[] = [
    {
      "id": "0ca4f17c-eced-4217-abd7-2db801f0d908",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "name": "ฝาหน้ากาก CT A-101",
      "quantity": 21120,
      "color": "สีขาว",
      "stock": 0,
      "dueDate": "2025-07-21",
      "salePrice": 3.77
    },
    {
      "id": "3166d972-599d-470c-b4e5-0796a9825715",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "name": "ฝาหน้ากาก CT A-102",
      "salePrice": 3.7,
      "stock": 0,
      "dueDate": "2025-07-21",
      "color": "สีขาว",
      "quantity": 4800
    },
    {
      "id": "334ae6a2-4657-4726-b812-50606dcfd533",
      "quantity": 4800,
      "dueDate": "2025-07-21",
      "color": "สีขาว",
      "name": "ฝาตะแกรง 1022",
      "salePrice": 0
    },
    {
      "id": "4f74dd86-0df1-4077-aada-fe9529d046c6",
      "quantity": 87500,
      "name": "CPS-113 ชุดขาล็อคฝาครอบ",
      "salePrice": 0.48,
      "dueDate": "2025-07-21",
      "color": "สีขาว"
    },
    {
      "id": "86e0d4b0-9125-4c33-a904-0482797747da",
      "salePrice": 14.87,
      "stock": 0,
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "name": "CTU ฝา NEW 4 PC",
      "color": "สีขาว",
      "dueDate": "2025-07-21",
      "quantity": 5000
    },
    {
      "id": "afb40d73-c920-44e0-b23e-d3f644fe91f2",
      "stock": 0,
      "quantity": 24000,
      "salePrice": 3.7,
      "name": "ฝาหน้ากาก CT A-102",
      "color": "สีขาว",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "dueDate": "2025-07-21"
    },
    {
      "id": "c126433c-c13c-4c00-abde-9c423f036ae2",
      "quantity": 8600,
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "color": "สีขาว",
      "stock": 0,
      "dueDate": "2025-07-21",
      "salePrice": 5.08,
      "name": "บล็อคลอย CT 4x4"
    },
    {
      "id": "cff080c8-dfb9-4009-bdfc-cf4ceccaa2e9",
      "name": "CTU ฝา NEW 4 PC",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "quantity": 7000,
      "dueDate": "2025-07-21",
      "stock": 0,
      "color": "ดำใส",
      "salePrice": 5.97
    },
    {
      "id": "BrLHa2KvzUjdkMV8Msmd",
      "quantity": 1000,
      "salePrice": 7.4,
      "lotNumber": "PO-100768",
      "status": "Completed",
      "dueDate": "2025-07-25",
      "quantityDelivered": 1000,
      "color": "ดำใส",
      "name": "CTU ฝา NEW 8 PC"
    },
    {
      "id": "hLQYewQ4x2SCpJH4BqGM",
      "status": "Open",
      "quantityDelivered": 10800,
      "lotNumber": "PO-220768",
      "color": "สีขาว",
      "dueDate": "2025-07-25",
      "name": "ฝาหน้ากาก CT A-1022",
      "salePrice": 3.92,
      "quantity": 16800
    },
    {
      "id": "wTd9N3SsYc4P8oyxHHLt",
      "quantityDelivered": 1000,
      "dueDate": "2025-07-25",
      "lotNumber": "PO-100768",
      "color": "ดำใส",
      "name": "CTU ฝา NEW 8 PC",
      "quantity": 1000,
      "status": "Completed",
      "salePrice": 7.4
    },
    {
      "id": "048593f3-7aaa-4b5a-8a4f-78b85ab3f3f3",
      "dueDate": "2025-07-28",
      "color": "สีดำ",
      "quantity": 16900,
      "name": "บล็อคลอย CT 2x4B",
      "salePrice": 3.7
    },
    {
      "id": "057e06d6-6b15-482b-baa5-5babeb051b9e",
      "salePrice": 4.74,
      "color": "ดำใส",
      "name": "CTU ฝา NEW 2 PC",
      "quantity": 10000,
      "dueDate": "2025-07-28"
    },
    {
      "id": "09886110-57f7-4d39-bc4c-52a3c4818822",
      "quantity": 1000,
      "salePrice": 7.4,
      "dueDate": "2025-07-28",
      "color": "ดำใส",
      "name": "CTU ฝา NEW 8 PC"
    },
    {
      "id": "0e420746-2905-4df5-90b2-0796561117f7",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "salePrice": 3.57,
      "stock": 0,
      "dueDate": "2025-07-28",
      "name": "ฝาหน้ากาก CT A-103",
      "color": "สีขาว",
      "quantity": 29040
    },
    {
      "id": "296a35ec-d396-49f7-87ca-34b4d152a5a1",
      "color": "สีขาว",
      "salePrice": 17.96,
      "dueDate": "2025-07-28",
      "name": "CTU ฝา NEW 8 PC",
      "quantity": 1000
    },
    {
      "id": "2dbe802a-084f-4213-8fdc-7a7b79069387",
      "name": "CTU ฝา NEW 6 PC",
      "salePrice": 16.7,
      "color": "สีขาว",
      "quantity": 5000,
      "dueDate": "2025-07-28"
    },
    {
      "id": "7178e754-2018-4bb8-85e8-30eeb499442a",
      "salePrice": 3.35,
      "name": "ฝาหน้ากาก CT A-103B",
      "dueDate": "2025-07-28",
      "stock": 0,
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "quantity": 21840,
      "color": "สีดำ"
    },
    {
      "id": "731eb72f-f431-4024-aa31-1ac8c9380793",
      "salePrice": 6.54,
      "quantity": 5000,
      "color": "ดำใส",
      "dueDate": "2025-07-28",
      "name": "CTU ฝา NEW 6 PC"
    },
    {
      "id": "bc3f7a86-3c87-47af-80ad-60bc5f2db3b4",
      "salePrice": 1.01,
      "color": "สีครีม",
      "quantity": 20000,
      "name": "ฐานรองขั้วต่อสาย J1",
      "dueDate": "2025-07-28"
    },
    {
      "id": "d6c82233-6683-419d-b735-5e7ec3bf2731",
      "quantity": 10000,
      "salePrice": 8.8,
      "dueDate": "2025-07-28",
      "name": "CTU ฝา NEW 2 PC",
      "color": "สีขาว"
    },
    {
      "id": "1cd69405-1477-4a0c-b80c-6b1755df1573",
      "salePrice": 0,
      "dueDate": "2025-07-31",
      "quantity": 20000,
      "color": "สีดำ",
      "name": "บล็อคฝัง 2x4"
    },
    {
      "id": "4eda0e0a-af32-49fd-8478-62210dba3f90",
      "name": "CTU ฝา NEW 10 PC",
      "quantity": 1000,
      "salePrice": 10,
      "color": "ดำใส",
      "dueDate": "2025-07-31"
    },
    {
      "id": "540f1a73-9d34-4913-96cf-52eb6e6ca46c",
      "salePrice": 0,
      "name": "บล็อคฝัง 2x4",
      "quantity": 20000,
      "color": "สีส้ม",
      "dueDate": "2025-07-31"
    },
    {
      "id": "7c7e70de-c095-4273-bf83-8d629caa4294",
      "stock": 0,
      "salePrice": 3.83,
      "name": "บล็อคลอย CT 2x4",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "quantity": 59900,
      "color": "สีขาว",
      "dueDate": "2025-07-31"
    },
    {
      "id": "82259225-7cf8-4d90-b361-5eb5981f4ef4",
      "quantity": 20000,
      "color": "สีเขียว",
      "salePrice": 0.78,
      "name": "CWS-121 ฝาครอบด้านหลัง",
      "dueDate": "2025-07-31"
    },
    {
      "id": "95d245e9-a8d8-455d-b6ea-b145ad4649c7",
      "quantity": 10000,
      "dueDate": "2025-07-31",
      "salePrice": 0,
      "color": "สีส้ม",
      "name": "บล็อคฝัง 4x4"
    },
    {
      "id": "bfd092bd-59c5-4fd0-b585-c644cde7754c",
      "color": "สีขาว",
      "dueDate": "2025-07-31",
      "quantity": 20000,
      "salePrice": 0.49,
      "name": "CWS-121 ฝาครอบด้านหน้า"
    },
    {
      "id": "cded21ec-0adf-4ffa-a738-0c503af23af5",
      "dueDate": "2025-07-31",
      "salePrice": 0.3,
      "quantity": 10000,
      "color": "สีขาว",
      "name": "CWS-121 รองฝาเปิด-ปิดด้านในเล็ก"
    },
    {
      "id": "ead5bb92-42fd-4540-8b43-be92918b034d",
      "dueDate": "2025-07-31",
      "salePrice": 0.3,
      "name": "CWS-121 รองฝาเปิด-ปิดด้านในใหญ่",
      "color": "สีขาว",
      "quantity": 10000
    },
    {
      "id": "f386fe1b-1d6a-4502-bcd7-afc04ad535a4",
      "salePrice": 0,
      "quantity": 20000,
      "color": "สีดำ",
      "name": "บล็อคฝัง 4x4",
      "dueDate": "2025-07-31"
    },
    {
      "id": "f42ccb1d-5ae1-4641-96aa-512805046ac2",
      "name": "CTU ฝา NEW 10 PC",
      "quantity": 1000,
      "salePrice": 23.53,
      "color": "สีขาว",
      "dueDate": "2025-07-31"
    },
    {
      "id": "A3nkGogRROFVd0gMjPjt",
      "color": "สีขาว",
      "dueDate": "2025-08-03",
      "salePrice": 3.7,
      "name": "ฝาหน้ากาก CT A-102",
      "status": "Completed",
      "quantity": 4800,
      "quantityDelivered": 4800,
      "lotNumber": "PO-070568"
    },
    {
      "id": "be16392d-8959-46fc-9416-2db5293419d2",
      "name": "อุปกร์ฝาใส่ตู้",
      "quantity": 30000,
      "salePrice": 0.44,
      "color": "สีใส",
      "dueDate": "2025-08-04"
    },
    {
      "id": "O0TQZ87SGxZhrY57yh1x",
      "name": "ฝา CHONG-8 PC",
      "color": "เทาใส",
      "dueDate": "2025-08-07",
      "quantityDelivered": 330,
      "status": "Completed",
      "quantity": 330,
      "lotNumber": "PO-220768",
      "salePrice": 10.58
    },
    {
      "id": "jEA5ffF5LVSEX9lEQ80K",
      "name": "ฝา CHONG-8 ABS",
      "color": "สีขาว",
      "status": "Completed",
      "dueDate": "2025-08-07",
      "lotNumber": "PO-220768",
      "quantityDelivered": 600,
      "salePrice": 13.04,
      "quantity": 600
    },
    {
      "id": "11c8fd65-d7df-4f4c-9d57-6d10560d5be3",
      "dueDate": "2025-08-09",
      "salePrice": 0.3,
      "color": "สีขาว",
      "name": "CWS-121 รองฝาเปิด-ปิดด้านในเล็ก",
      "quantity": 15000
    },
    {
      "id": "2615fc95-e3cf-4c5c-a466-8f21466029f6",
      "color": "สีขาว",
      "dueDate": "2025-08-09",
      "salePrice": 0.77,
      "name": "ชุดฐานล็อคเลือนเลื่อนเปิด-ปิด K2",
      "quantity": 1000
    },
    {
      "id": "7dab8030-6a1c-4398-9c50-e9e2d7f3976f",
      "dueDate": "2025-08-09",
      "quantity": 15000,
      "name": "CWS-121 รองฝาเปิด-ปิดด้านในใหญ่",
      "salePrice": 0.3,
      "color": "สีขาว"
    },
    {
      "id": "bfab831e-287c-46a8-80db-a24642bb6ca1",
      "color": "สีขาว",
      "salePrice": 0.97,
      "dueDate": "2025-08-09",
      "quantity": 30000,
      "name": "CPS-113 ฝาครอบด้านหน้า"
    },
    {
      "id": "ee6b6aec-2595-4b9f-82cc-2b9f51587a8c",
      "dueDate": "2025-08-09",
      "color": "สีขาว",
      "salePrice": 0.49,
      "name": "CWS-121 ฝาครอบด้านหน้า",
      "quantity": 10000
    },
    {
      "id": "qrEs14z4MaqvmSsVIWKX",
      "quantity": 5000,
      "salePrice": 5.97,
      "color": "ดำใส",
      "name": "CTU ฝา NEW 4 PC",
      "dueDate": "2025-08-09",
      "lotNumber": "PO-220768"
    },
    {
      "id": "5hsJeJUXC6qGLd52V9Yu",
      "color": "สีขาว",
      "lotNumber": "PO-220768",
      "salePrice": 14.87,
      "quantity": 5000,
      "dueDate": "2025-08-10",
      "name": "CTU ฝา NEW 4 PC"
    },
    {
      "id": "DHOyi1OczpvK2C5T8Qw2",
      "dueDate": "2025-08-10",
      "salePrice": 9.6,
      "quantity": 500,
      "color": "ใส",
      "lotNumber": "PO-220768",
      "name": "ฝา M 8"
    },
    {
      "id": "DKa0cij04vugx2AV0G7K",
      "color": "สีขาว",
      "quantity": 51840,
      "salePrice": 3.57,
      "name": "ฝาหน้ากาก CT A-103",
      "status": "Completed",
      "dueDate": "2025-08-10",
      "lotNumber": "PO-100668"
    },
    {
      "id": "HoYTK7eWEfuSSuNS6oK8",
      "dueDate": "2025-08-10",
      "status": "Completed",
      "name": "CPS-113 ชุดขาล็อคฝาครอบ",
      "quantity": 87500,
      "color": "สีขาว",
      "quantityDelivered": 87500,
      "salePrice": 0.48,
      "lotNumber": "PO-031267"
    },
    {
      "id": "Ot33n7boytBCaet0Ohdl",
      "dueDate": "2025-08-10",
      "name": "ฝา CHONG-8 ABS",
      "quantity": 600,
      "color": "สีขาว",
      "lotNumber": "PO-220768",
      "salePrice": 13.04
    },
    {
      "id": "OuCKyXxEdqsQq7TE6WlK",
      "quantity": 330,
      "dueDate": "2025-08-10",
      "color": "เทาใส",
      "salePrice": 10.58,
      "lotNumber": "PO-220768",
      "name": "ฝา CHONG-8 PC"
    },
    {
      "id": "Qekl0xEUfO7qPJeYSeeV",
      "color": "สีขาว",
      "salePrice": 5.08,
      "quantity": 8600,
      "status": "Completed",
      "name": "บล็อคลอย CT 4x4",
      "quantityDelivered": 8600,
      "lotNumber": "PO-260568",
      "dueDate": "2025-08-10"
    },
    {
      "id": "m1mCkmmDMw88kV2ukSi2",
      "dueDate": "2025-08-10",
      "lotNumber": "PO-100668",
      "name": "ฝาตะแกรง 101-103",
      "color": "สีขาว",
      "status": "Completed",
      "quantity": 51840,
      "salePrice": 0
    },
    {
      "id": "m7VwPPWcwUMFBbSTWO2x",
      "color": "สีขาว",
      "quantityDelivered": 1000,
      "dueDate": "2025-08-10",
      "status": "Completed",
      "quantity": 1000,
      "salePrice": 0.77,
      "lotNumber": "PO-100768",
      "name": "ชุดฐานล็อคเลือนเลื่อนเปิด-ปิด K2"
    },
    {
      "id": "xBzfip6NpB5oVjeou4LG",
      "color": "ดำใส",
      "lotNumber": "PO-220768",
      "name": "CTU ฝา NEW 4 PC",
      "dueDate": "2025-08-10",
      "quantity": 5000,
      "salePrice": 5.97
    },
    {
      "id": "4PAF5UWu5xWwCnfo2qU7",
      "status": "Completed",
      "salePrice": 3.57,
      "color": "สีขาว",
      "quantity": 72000,
      "lotNumber": "PO-170668",
      "dueDate": "2025-08-14",
      "name": "ฝาหน้ากาก CT A-103",
      "quantityDelivered": 72000,
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891"
    },
    {
      "id": "1ihbaNIoFlJ5x0BHiU5Y",
      "salePrice": 3.83,
      "dueDate": "2025-08-15",
      "name": "บล็อคลอย CT 2x4",
      "color": "สีขาว",
      "quantity": 50000,
      "lotNumber": "PO-220768"
    },
    {
      "id": "giFVnRNo6Ofro2z2leRV",
      "lotNumber": "PO-220768",
      "dueDate": "2025-08-15",
      "name": "ฐานรองเบรคย่อย T1",
      "color": "สีดำ",
      "quantity": 2000,
      "salePrice": 1.97
    },
    {
      "id": "lUk8QwU0o0O7EjMyFFSY",
      "lotNumber": "PO-220768",
      "status": "Completed",
      "name": "ฝา M 8",
      "quantityDelivered": 500,
      "color": "ใส",
      "salePrice": 9.6,
      "quantity": 500,
      "dueDate": "2025-08-15"
    },
    {
      "id": "qU5Q4Ht8hVVv4H8uhMqB",
      "quantity": 2000,
      "name": "ฐานรองเบรคย่อย T1",
      "lotNumber": "PO-220768",
      "salePrice": 1.97,
      "status": "Completed",
      "dueDate": "2025-08-15",
      "color": "สีดำ",
      "quantityDelivered": 2000
    },
    {
      "id": "2WYK17d76dIA3jdzxaJU",
      "status": "Completed",
      "quantity": 77900,
      "quantityDelivered": 77900,
      "dueDate": "2025-08-17",
      "lotNumber": "PO-260568",
      "color": "สีขาว",
      "name": "บล็อคลอย CT 2x4",
      "salePrice": 3.83
    },
    {
      "id": "4kwzFbboR7LlTeYKjHY8",
      "salePrice": 3.7,
      "lotNumber": "PO-280668",
      "quantity": 18000,
      "color": "สีดำ",
      "dueDate": "2025-08-17",
      "status": "Completed",
      "name": "บล็อคลอย CT 2x4B"
    },
    {
      "id": "5IDPO6hyIHufJ5o0rpKl",
      "status": "Completed",
      "salePrice": 0,
      "color": "สีดำ",
      "dueDate": "2025-08-17",
      "lotNumber": "PO-160468",
      "quantityDelivered": 20000,
      "quantity": 20000,
      "name": "บล็อคฝัง 4x4"
    },
    {
      "id": "C0rcrXIxXq152ASa6FeM",
      "dueDate": "2025-08-17",
      "name": "CTU ฝา NEW 2 PC",
      "quantityDelivered": 10000,
      "status": "Completed",
      "salePrice": 8.8,
      "quantity": 10000,
      "color": "สีขาว",
      "lotNumber": "PO-170668"
    },
    {
      "id": "CbBwuRPQOldnk4SuiiP8",
      "lotNumber": "PO-010768",
      "dueDate": "2025-08-17",
      "quantityDelivered": 5000,
      "status": "Completed",
      "salePrice": 6.54,
      "color": "ดำใส",
      "name": "CTU ฝา NEW 6 PC",
      "quantity": 5000
    },
    {
      "id": "Cm5iRue82qHHNn0nROZX",
      "quantity": 12000,
      "color": "สีขาว",
      "salePrice": 5.02,
      "lotNumber": "PO-220768",
      "dueDate": "2025-08-17",
      "name": "ฝาหน้ากาก CT A-106"
    },
    {
      "id": "DJjG1DE0u8xbMbZ01Mqq",
      "name": "ฝาตะแกรง 1022",
      "quantity": 16800,
      "color": "สีขาว",
      "lotNumber": "PO-220768",
      "salePrice": 0,
      "dueDate": "2025-08-17"
    },
    {
      "id": "EWtycH32b2IBFXNabkhk",
      "quantity": 24000,
      "name": "ฝาหน้ากาก CT A-102",
      "lotNumber": "PO-280668",
      "salePrice": 3.7,
      "status": "Open",
      "dueDate": "2025-08-17",
      "quantityDelivered": 22728,
      "color": "สีขาว"
    },
    {
      "id": "GrqhcysWYEd5mFVkqLuy",
      "dueDate": "2025-08-17",
      "status": "Completed",
      "salePrice": 1.01,
      "lotNumber": "PO-010768",
      "quantity": 20000,
      "quantityDelivered": 20000,
      "color": "สีครีม",
      "name": "ฐานรองขั้วต่อสาย J1"
    },
    {
      "id": "HFaLyC2DWM0DWzOxnTOY",
      "dueDate": "2025-08-17",
      "status": "Completed",
      "quantity": 7000,
      "salePrice": 14.87,
      "name": "CTU ฝา NEW 4 PC",
      "lotNumber": "PO-170668",
      "color": "สีขาว"
    },
    {
      "id": "Ip0XnCuLRo9C0wZ9b2Qz",
      "lotNumber": "PO-170668",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "dueDate": "2025-08-17",
      "name": "CTU ฝา NEW 4 PC",
      "status": "Completed",
      "color": "ดำใส",
      "salePrice": 5.97,
      "quantity": 10000,
      "quantityDelivered": 10000
    },
    {
      "id": "J7aQD3vqrQo2X1r3CDCe",
      "quantityDelivered": 20000,
      "status": "Completed",
      "dueDate": "2025-08-17",
      "salePrice": 0,
      "name": "บล็อคฝัง 4x4",
      "lotNumber": "PO-160468",
      "quantity": 20000,
      "color": "สีส้ม"
    },
    {
      "id": "JCuRP6qtetTGzcje3vy8",
      "quantity": 6000,
      "lotNumber": "PO-280668",
      "status": "Completed",
      "quantityDelivered": 6000,
      "salePrice": 3.92,
      "color": "สีขาว",
      "name": "ฝาหน้ากาก CT A-1022",
      "dueDate": "2025-08-17"
    },
    {
      "id": "K9hVkEypb9ZLQNv7Cgt1",
      "color": "สีดำ",
      "status": "Open",
      "name": "ฝาหน้ากาก CT A-103B",
      "lotNumber": "PO-110668",
      "quantityDelivered": 20904,
      "salePrice": 3.35,
      "dueDate": "2025-08-17",
      "quantity": 24000
    },
    {
      "id": "Kj8NwOoQau0cWXh7E4Hb",
      "color": "สีขาว",
      "dueDate": "2025-08-17",
      "salePrice": 23.53,
      "status": "Completed",
      "quantityDelivered": 1000,
      "name": "CTU ฝา NEW 10 PC",
      "quantity": 1000,
      "lotNumber": "PO-170668"
    },
    {
      "id": "MuWTcmDs74VeyUTc9Ysn",
      "lotNumber": "PO-160468",
      "dueDate": "2025-08-17",
      "status": "Completed",
      "name": "บล็อคฝัง 2x4",
      "quantity": 20000,
      "color": "สีดำ",
      "salePrice": 0
    },
    {
      "id": "RZglVF8Ky8rCh3Nk6mh3",
      "status": "Completed",
      "quantity": 10000,
      "salePrice": 0.3,
      "name": "CWS-121 รองฝาเปิด-ปิดด้านในใหญ่",
      "dueDate": "2025-08-17",
      "lotNumber": "PO-080768",
      "quantityDelivered": 10000,
      "color": "สีขาว"
    },
    {
      "id": "Sbhl3g8ChJayErNCOTqb",
      "color": "สีขาว",
      "lotNumber": "PO-280668",
      "quantityDelivered": 28080,
      "dueDate": "2025-08-17",
      "quantity": 28080,
      "name": "ฝาหน้ากาก CT A-101",
      "salePrice": 3.77,
      "status": "Completed"
    },
    {
      "id": "T620LxagytwrNRvtajeS",
      "quantityDelivered": 20000,
      "status": "Completed",
      "color": "สีเขียว",
      "name": "CWS-121 ฝาครอบด้านหลัง",
      "salePrice": 0.78,
      "dueDate": "2025-08-17",
      "lotNumber": "PO-080768",
      "quantity": 20000
    },
    {
      "id": "U3z3jaCCIXIpmgjOPmHf",
      "color": "สีขาว",
      "quantity": 30000,
      "dueDate": "2025-08-17",
      "salePrice": 0.97,
      "status": "Open",
      "lotNumber": "PO-170668",
      "name": "CPS-113 ฝาครอบด้านหน้า"
    },
    {
      "id": "Y6eZqRjZ4x8qcBgYbLVE",
      "quantityDelivered": 10000,
      "lotNumber": "PO-080768",
      "color": "สีขาว",
      "salePrice": 0.3,
      "status": "Completed",
      "quantity": 10000,
      "name": "CWS-121 รองฝาเปิด-ปิดด้านในเล็ก",
      "dueDate": "2025-08-17"
    },
    {
      "id": "dcQh2r8gEvxQo8geofUK",
      "color": "สีขาว",
      "quantityDelivered": 10000,
      "salePrice": 0.49,
      "quantity": 10000,
      "dueDate": "2025-08-17",
      "status": "Completed",
      "name": "CWS-121 ฝาครอบด้านหน้า",
      "lotNumber": "PO-170668"
    },
    {
      "id": "gBEhD9vUptqh4IpiKDW3",
      "status": "Completed",
      "dueDate": "2025-08-17",
      "salePrice": 16.7,
      "quantityDelivered": 5000,
      "lotNumber": "PO-010768",
      "quantity": 5000,
      "color": "สีขาว",
      "name": "CTU ฝา NEW 6 PC"
    },
    {
      "id": "pYH5ewevtwx1qeKcnNvx",
      "color": "ดำใส",
      "lotNumber": "PO-170668",
      "name": "CTU ฝา NEW 10 PC",
      "quantityDelivered": 960,
      "status": "Completed",
      "quantity": 1000,
      "dueDate": "2025-08-17",
      "salePrice": 10
    },
    {
      "id": "rJtY41EfBNNdTNXWZEJx",
      "quantity": 30000,
      "salePrice": 0.44,
      "dueDate": "2025-08-17",
      "name": "อุปกร์ฝาใส่ตู้",
      "color": "สีใส",
      "status": "Completed",
      "lotNumber": "PO-170668"
    },
    {
      "id": "tXFZk22xM8T1RYodfGmJ",
      "lotNumber": "PO-080768",
      "name": "CWS-121 ฝาครอบด้านหน้า",
      "color": "สีขาว",
      "status": "Completed",
      "dueDate": "2025-08-17",
      "quantity": 20000,
      "salePrice": 0.49
    },
    {
      "id": "vbSvVqUpKeJciSc9VGgV",
      "color": "ดำใส",
      "salePrice": 4.74,
      "quantity": 10000,
      "status": "Completed",
      "name": "CTU ฝา NEW 2 PC",
      "lotNumber": "PO-170668",
      "quantityDelivered": 10000,
      "dueDate": "2025-08-17"
    },
    {
      "id": "xBMk6cjpbT8lXB2chVvi",
      "name": "บล็อคฝัง 2x4",
      "quantity": 20000,
      "dueDate": "2025-08-17",
      "quantityDelivered": 20000,
      "status": "Completed",
      "color": "สีส้ม",
      "salePrice": 0,
      "lotNumber": "PO-160468"
    },
    {
      "id": "8sjmHLfd2XkzaqxvpnRb",
      "name": "ฝาหน้ากาก CT A-106",
      "salePrice": 5.02,
      "quantityDelivered": 12000,
      "quantity": 12000,
      "status": "Completed",
      "lotNumber": "PO-220768",
      "color": "สีขาว",
      "dueDate": "2025-08-21"
    },
    {
      "id": "y1f3d4gCqXkwWAOKZgJG",
      "color": "สีดำ",
      "status": "Open",
      "name": "ฝาหน้ากาก CT A-103B",
      "lotNumber": "PO-220768",
      "quantityDelivered": 1680,
      "salePrice": 3.35,
      "dueDate": "2025-08-22",
      "quantity": 12000
    },
    {
      "id": "Bb7TL9dCS03joCtCp3H8",
      "dueDate": "2025-08-23",
      "name": "CTU ฝา NEW 4 PC",
      "color": "สีขาว",
      "lotNumber": "PO-220768",
      "salePrice": 14.87,
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "quantity": 10000,
      "quantityDelivered": 7764,
      "status": "Open"
    },
    {
      "id": "0MohpqoyQGlGfBjCX9qD",
      "dueDate": "2025-08-29",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "name": "CTU ฝา NEW 4 PC",
      "color": "สีขาว",
      "quantityDelivered": 10000,
      "quantity": 10000,
      "salePrice": 14.87,
      "status": "Completed",
      "lotNumber": "PO-170668"
    },
    {
      "id": "1qeF9IfvSfe82jvBhywY",
      "name": "CTU ฝา NEW 4 PC",
      "salePrice": 5.97,
      "dueDate": "2025-08-29",
      "quantity": 10000,
      "status": "Open",
      "color": "ดำใส",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "quantityDelivered": 7764,
      "lotNumber": "PO-220768"
    },
    {
      "id": "j5NYEiivSJg6t4jtRVa8",
      "salePrice": 7.4,
      "lotNumber": "PO-100768",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "dueDate": "2025-08-29",
      "color": "ดำใส",
      "status": "Completed",
      "quantity": 1000,
      "name": "CTU ฝา NEW 8 PC"
    },
    {
      "id": "mISkvull5kSUsCjmo5A1",
      "color": "สีขาว",
      "lotNumber": "PO-220768",
      "quantity": 17000,
      "salePrice": 0,
      "dueDate": "2025-08-29",
      "name": "ฝาตะแกรง 1022",
      "status": "Completed",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891"
    },
    {
      "id": "tE3ZLif3smkJrx4JAfPL",
      "status": "Completed",
      "quantity": 1000,
      "dueDate": "2025-08-29",
      "lotNumber": "PO-100768",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "salePrice": 17.96,
      "color": "สีขาว",
      "name": "CTU ฝา NEW 8 PC"
    },
    {
      "id": "Tw6YHrH2XgJRExR3dg0y",
      "lotNumber": "PO-220768",
      "quantityDelivered": 50160,
      "name": "ฝาหน้ากาก CT A-103",
      "dueDate": "2025-08-30",
      "status": "Completed",
      "quantity": 50160,
      "salePrice": 3.57,
      "color": "สีขาว"
    },
    {
      "id": "cLvrmxHfzXxsYktz2yGe",
      "name": "บล็อคลอย CT 2x4",
      "dueDate": "2025-08-30",
      "color": "สีขาว",
      "status": "Open",
      "quantityDelivered": 42400,
      "quantity": 50000,
      "lotNumber": "PO-220768",
      "salePrice": 3.83
    },
    {
      "id": "oePK9ubdX0dlZlncF3Aq",
      "name": "CTU ฝา NEW 4 PC",
      "quantityDelivered": 10000,
      "lotNumber": "PO-220768",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "color": "ดำใส",
      "dueDate": "2025-08-30",
      "quantity": 10000,
      "salePrice": 5.97,
      "status": "Completed"
    },
    {
      "id": "QXxOOubdiMkPfflAGNnd",
      "color": "สีครีม",
      "quantity": 5000,
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "salePrice": 1.63,
      "lotNumber": "PO-050968",
      "status": "Cancelled",
      "dueDate": "2025-09-05",
      "name": "ฐานรองขั้วต่อสาย J2"
    },
    {
      "id": "223gaAx7uToU9kzJI0VT",
      "color": "สีครีม",
      "status": "Completed",
      "salePrice": 1.63,
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "dueDate": "2025-09-12",
      "quantityDelivered": 5000,
      "name": "ฐานรองขั้วต่อสาย J2",
      "quantity": 5000,
      "lotNumber": "PO-050968"
    },
    {
      "id": "LKWw0onxlLM2QDwIoDIU",
      "quantity": 50160,
      "dueDate": "2025-09-14",
      "name": "ฝาหน้ากาก CT A-103",
      "lotNumber": "PO-220768",
      "color": "สีขาว",
      "salePrice": 3.57
    },
    {
      "id": "ZQha5qPiqlNZUPlmLAcT",
      "name": "ฝาหน้ากาก CT A-103B",
      "quantity": 12000,
      "salePrice": 3.35,
      "dueDate": "2025-09-14",
      "color": "สีดำ",
      "lotNumber": "PO-220768"
    },
    {
      "id": "C4hIfIf4Gpk7UpUzRJbk",
      "quantity": 5000,
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "salePrice": 8.8,
      "color": "สีขาว",
      "name": "CTU ฝา NEW 2 PC",
      "lotNumber": "PO-130868",
      "dueDate": "2025-09-15",
      "status": "Open"
    },
    {
      "id": "M1XZmf2UwCAerHBfmcjH",
      "lotNumber": "PO-130868",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "name": "CTU ฝา NEW 6 PC",
      "salePrice": 16.7,
      "status": "Open",
      "dueDate": "2025-09-15",
      "quantity": 5000,
      "color": "สีขาว"
    },
    {
      "id": "OC3cH6RosvmT2Z1ANqfZ",
      "quantity": 2000,
      "salePrice": 17.96,
      "lotNumber": "PO-130868",
      "status": "Open",
      "dueDate": "2025-09-15",
      "color": "สีขาว",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "name": "CTU ฝา NEW 8 PC"
    },
    {
      "id": "U2eZtiATF7Xd6IH1Q35B",
      "name": "CTU ฝา NEW 2 PC",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "salePrice": 4.74,
      "quantity": 5000,
      "color": "ดำใส",
      "status": "Open",
      "dueDate": "2025-09-15",
      "lotNumber": "PO-130868"
    },
    {
      "id": "X5uPrFbHip1QNF8wgx2x",
      "status": "Open",
      "quantity": 5000,
      "lotNumber": "PO-130868",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "name": "CTU ฝา NEW 6 PC",
      "dueDate": "2025-09-15",
      "salePrice": 6.54,
      "color": "ดำใส"
    },
    {
      "id": "skV7pLpwSceJPej8m9ju",
      "name": "CTU ฝา NEW 8 PC",
      "salePrice": 7.4,
      "lotNumber": "PO-130868",
      "dueDate": "2025-09-15",
      "status": "Open",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "quantity": 2000,
      "color": "ดำใส"
    },
    {
      "id": "7yqzMlPx6h4dtfHvnCnQ",
      "dueDate": "2025-09-19",
      "name": "ฝาตะแกรง 104-106",
      "status": "Open",
      "salePrice": 1.5,
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "quantity": 12000,
      "color": "สีขาว",
      "lotNumber": "PO-220768"
    },
    {
      "id": "H0uxqugqeC4TyEzlbIm9",
      "quantity": 15000,
      "color": "เขียว",
      "status": "Open",
      "salePrice": 1.5,
      "name": "ฝาครอบด้านหลัง ELECKTA-113",
      "dueDate": "2025-09-24",
      "lotNumber": "PO-110968",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559"
    },
    {
      "id": "4GXObOkTDiVtZSDMJa5j",
      "color": "สีขาว",
      "quantity": 20160,
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "salePrice": 3.77,
      "lotNumber": "PO-080968",
      "status": "Open",
      "dueDate": "2025-09-30",
      "name": "ฝาหน้ากาก CT A-101",
      "quantityDelivered": 7680
    },
    {
      "id": "CmfaKzTdUpDrA2QiSCg9",
      "lotNumber": "PO-080968",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "status": "Completed",
      "color": "สีเขียว",
      "quantity": 10000,
      "name": "CWS-121 ฝาครอบด้านหลัง",
      "salePrice": 0.78,
      "dueDate": "2025-09-30",
      "quantityDelivered": 10000
    },
    {
      "id": "FBniqZkMxUZIL1WRvCas",
      "lotNumber": "PO-080968",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "status": "Completed",
      "name": "ชุดขาล็อคขาเสียบสาย N",
      "quantityDelivered": 10000,
      "color": "สีขาว",
      "salePrice": 0.3,
      "quantity": 10000,
      "dueDate": "2025-09-30"
    },
    {
      "id": "I2Y0XJTdC4Rj1akc423R",
      "dueDate": "2025-09-30",
      "color": "สีเขียว",
      "status": "Open",
      "name": "CPS-113 ฝาครอบด้านหลัง",
      "lotNumber": "PO-080968",
      "quantity": 30000,
      "salePrice": 1.02,
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559"
    },
    {
      "id": "Rmsiap4AWnvqkSNmvitg",
      "salePrice": 0.3,
      "color": "สีขาว",
      "status": "Open",
      "quantity": 20000,
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "dueDate": "2025-09-30",
      "lotNumber": "PO-080968",
      "name": "CWS-121 ชุดขาล็อคฝาครอบ"
    },
    {
      "id": "S45RAk0WgZUN61wSB31D",
      "quantity": 8000,
      "name": "พุก",
      "salePrice": 0,
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "lotNumber": "PO-080968",
      "dueDate": "2025-09-30",
      "color": "สีขาว",
      "status": "Open"
    },
    {
      "id": "ZOleMHtdsv0UHsPtTMBP",
      "salePrice": 1,
      "color": "สีขาว",
      "status": "Open",
      "quantity": 50160,
      "dueDate": "2025-09-30",
      "lotNumber": "PO-080968",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "name": "ฝาตะแกรง 101-103"
    },
    {
      "id": "cIVORn1gzBjMoWFOBFB1",
      "dueDate": "2025-09-30",
      "status": "Open",
      "name": "ฝาตะแกรง 1022B",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "salePrice": 0.6,
      "lotNumber": "PO-230968",
      "quantity": 2400,
      "color": "สีดำ"
    },
    {
      "id": "jVX03tkq5a8PMzAbgLQc",
      "salePrice": 5.2,
      "quantity": 4000,
      "lotNumber": "PO-080968",
      "dueDate": "2025-09-30",
      "color": "สีดำ",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "status": "Open",
      "name": "บล็อคลอย CT 4x4B"
    },
    {
      "id": "oPkBQTOSV6ftbUJtheaq",
      "salePrice": 0.49,
      "status": "Completed",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "quantity": 20000,
      "quantityDelivered": 20000,
      "color": "สีขาว",
      "name": "CWS-121 ฝาครอบด้านหน้า",
      "lotNumber": "PO-080768",
      "dueDate": "2025-09-30"
    },
    {
      "id": "qsullr615ogwQtEXV1A8",
      "quantityDelivered": 10000,
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "dueDate": "2025-09-30",
      "lotNumber": "PO-080968",
      "quantity": 10000,
      "salePrice": 0.3,
      "name": "CWS-121 รองฝาเปิด-ปิดด้านในใหญ่",
      "status": "Completed",
      "color": "สีขาว"
    },
    {
      "id": "rybKecf7iFs9J21zD77M",
      "name": "ฝาหน้ากาก CT A-103",
      "quantityDelivered": 6588,
      "color": "สีขาว",
      "quantity": 50160,
      "status": "Open",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "dueDate": "2025-09-30",
      "salePrice": 3.57,
      "lotNumber": "PO-080968"
    },
    {
      "id": "s5IZS2m1RnJdjqy3ag6V",
      "quantity": 20160,
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "salePrice": 1,
      "color": "สีขาว",
      "lotNumber": "PO-080968",
      "name": "ฝาตะแกรง 101-103",
      "dueDate": "2025-09-30",
      "status": "Open"
    },
    {
      "id": "tGqqndh8t27D5LyPbSob",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "quantity": 10000,
      "dueDate": "2025-09-30",
      "salePrice": 0.3,
      "lotNumber": "PO-080968",
      "quantityDelivered": 10000,
      "status": "Completed",
      "color": "สีขาว",
      "name": "ชุดขาล็อคขาเสียบสาย L"
    },
    {
      "id": "thRfNtR5VHvj3Tfo7BAS",
      "quantityDelivered": 10000,
      "dueDate": "2025-09-30",
      "lotNumber": "PO-080968",
      "name": "CWS-121 รองฝาเปิด-ปิดด้านในเล็ก",
      "color": "สีขาว",
      "quantity": 10000,
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "status": "Completed",
      "salePrice": 0.3
    },
    {
      "id": "s2JR3yA9FFa9UEAB5QzE",
      "status": "Open",
      "dueDate": "2025-10-09",
      "quantity": 3500,
      "salePrice": 2.13,
      "color": "สีดำ",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "lotNumber": "PO-091068",
      "name": "CPS-116B ฝาครอบด้านหน้า"
    },
    {
      "id": "7sabigScXEX3xgKClQct",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "color": "สีขาว",
      "salePrice": 0.77,
      "lotNumber": "PO-130968",
      "name": "ชุดฐานล็อคเลือนเลื่อนเปิด-ปิด K2",
      "dueDate": "2025-10-11",
      "quantity": 3000,
      "status": "Open"
    },
    {
      "id": "FgRo3W0el59QdfZvMYKo",
      "lotNumber": "PO-130968",
      "name": "ขาพับเปิด-ปิดฝา S2",
      "dueDate": "2025-10-11",
      "status": "Open",
      "quantity": 3000,
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "color": "สีขาว",
      "salePrice": 0.35
    },
    {
      "id": "Y3pHkqSR2tZUWPcFbUFV",
      "status": "Open",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "name": "ฐานรองเบเกอร์ 4 ช่อง C1",
      "lotNumber": "PO-130968",
      "dueDate": "2025-10-11",
      "salePrice": 3.65,
      "quantity": 2000,
      "color": "สีดำ"
    },
    {
      "id": "q05R9nduPiNLrgR5b2vm",
      "salePrice": 1.97,
      "color": "สีดำ",
      "quantityDelivered": 3000,
      "dueDate": "2025-10-11",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "quantity": 3000,
      "name": "ฐานรองเบรคย่อย T1",
      "status": "Completed",
      "lotNumber": "PO-130968"
    },
    {
      "id": "uYR4ogsJrFXBANfv0Q42",
      "color": "สีขาว",
      "dueDate": "2025-10-11",
      "status": "Open",
      "customerId": "a6a2a826-3c22-4721-98de-0b31fac86559",
      "salePrice": 0.58,
      "quantity": 3000,
      "name": "ชุดล็อคเลือนเลื่อนเปิด-ปิด K1",
      "lotNumber": "PO-130968"
    },
    {
      "id": "6v0HIFyOo0goLe9jpbiI",
      "status": "Open",
      "name": "พุก",
      "lotNumber": "PO-080968",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "dueDate": "2025-10-19",
      "salePrice": 0,
      "color": "สีขาว",
      "quantity": 76400
    },
    {
      "id": "pdY8eFbV6RQauiqTe3g2",
      "status": "Open",
      "lotNumber": "PO-080968",
      "salePrice": 5.08,
      "name": "บล็อคลอย CT 4x4",
      "quantity": 19100,
      "dueDate": "2025-10-19",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "color": "สีขาว"
    },
    {
      "id": "46ihZSmuLF0JokTbrPmz",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "color": "สีดำ",
      "lotNumber": "PO-230968",
      "name": "ฝาหน้ากาก CT A-1022B",
      "status": "Open",
      "quantity": 2400,
      "dueDate": "2025-10-25",
      "salePrice": 3.66
    },
    {
      "id": "4cGxcDwxBZvwcyjm1ssg",
      "name": "บล็อคลอย CT 2x4B",
      "dueDate": "2025-10-25",
      "quantity": 18000,
      "lotNumber": "PO-230968",
      "salePrice": 3.7,
      "color": "สีดำ",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "status": "Open"
    },
    {
      "id": "A52BCgzrkhc8mJ0Fr8Hq",
      "lotNumber": "PO-230968",
      "dueDate": "2025-10-25",
      "color": "สีขาว",
      "quantity": 50000,
      "salePrice": 3.83,
      "status": "Open",
      "name": "บล็อคลอย CT 2x4",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891"
    },
    {
      "id": "CEHrjgWhj47Vf8yPnpBs",
      "status": "Open",
      "quantity": 12000,
      "salePrice": 1,
      "name": "ฝาตะแกรง 101-103",
      "lotNumber": "PO-230968",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "dueDate": "2025-10-25",
      "color": "สีขาว"
    },
    {
      "id": "HaBmv9K387MmqSjdLDmR",
      "name": "ฝาหน้ากาก CT A-106",
      "quantityDelivered": 480,
      "color": "สีขาว",
      "quantity": 12000,
      "status": "Open",
      "dueDate": "2025-10-25",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "salePrice": 5.02,
      "lotNumber": "PO-230968"
    },
    {
      "id": "SMjyxTXH8PIrcXhUSfPa",
      "status": "Open",
      "quantity": 100000,
      "dueDate": "2025-10-25",
      "lotNumber": "PO-230968",
      "name": "พุก",
      "color": "สีขาว",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "salePrice": 0
    },
    {
      "id": "Yss1yaD3FBCTe30xgNET",
      "dueDate": "2025-10-25",
      "quantity": 12000,
      "color": "สีขาว",
      "status": "Open",
      "salePrice": 3.7,
      "lotNumber": "PO-230968",
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "name": "ฝาหน้ากาก CT A-102"
    },
    {
      "id": "lHYiCO3h7SvF6Q5sPl9V",
      "color": "สีขาว",
      "status": "Open",
      "salePrice": 1.5,
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891",
      "quantity": 12000,
      "name": "ฝาตะแกรง 104-106",
      "lotNumber": "PO-230968",
      "dueDate": "2025-10-25"
    },
    {
      "id": "xfnn9Zy8dxv1hrThBlgE",
      "status": "Open",
      "name": "พุก",
      "lotNumber": "PO-230968",
      "salePrice": 0,
      "dueDate": "2025-10-25",
      "color": "สีขาว",
      "quantity": 36000,
      "customerId": "4c9db0db-1cf2-40f7-9dc9-f445a87e6891"
    }
  ];
