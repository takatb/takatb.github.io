---
layout: layout.njk
title: ติดตั้ง Ubuntu บน WSL2
date: 2026-03-17T00:00:00+07:00
permalink: /projects/ubuntuwsl2/

tags:
  - ubuntu
  - wsl2
  - virtual
  - linux

summary: >-
  ขั้นตอนการติดตั้ง Ubuntu บน Windows11 ผ่าน WSL2

# projectType: normal | play | experiment | document | tool | note
projectType: tool
status: finished

featured: true
order: 8

cover: /images/004-ubuntuwsl2-img00.png

tools:
  - WSL2
  - Ubuntu
  - Linux

links:
  demo: 
  repo: 
  paper:
---

สำหรับ Windows 11 การติดตั้ง WSL2 ง่ายที่สุดคือใช้คำสั่ง `wsl --install` ใน PowerShell แบบ Administrator ซึ่งจะเปิดฟีเจอร์ที่จำเป็น ติดตั้ง Linux kernel และดิสโทรพื้นฐาน (เช่น Ubuntu) ให้โดยอัตโนมัติเป็น WSL2 เลย

# ขั้นตอนการติดตั้ง

Windows + R แล้วพิมพ์ `winver` เพื่อตรวจสอบเวอร์ชันและ OS Build
ใน BIOS/UEFI ต้องเปิดฟีเจอร์ Virtualization (VT‑x/AMD‑V) ให้เป็น Enabled ซึ่งดูได้จาก Task Manager > Performance > CPU ตรงบรรทัด Virtualization

เปิด PowerShell หรือ Windows Terminal แบบ Run as administrator
รันคำสั่งนี้เพื่อเปิดฟีเจอร์ WSL ติดตั้ง Linux kernel และดิสโทรเริ่มต้น (มักเป็น Ubuntu) เป็น WSL2:

```powershell
powershell
wsl --install
```

ระบบจะติดตั้ง component ที่จำเป็น แล้วอาจขอให้รีสตาร์ตเครื่อง เมื่อบูตเสร็จจะเปิดหน้าต่างตั้งค่า Linux (ให้ใส่ชื่อผู้ใช้และรหัสผ่านสำหรับระบบ Linux)
โดยดีฟอลต์ ดิสโทรที่ติดตั้งด้วย `wsl --install` จะเป็น WSL2 อยู่แล้ว แต่คุณสามารถตั้งค่าให้แน่ใจด้วยคำสั่ง:

```powershell
powershell
wsl --set-default-version 2
```

หากต้องการเลือกดิสโทรเอง เช่น Ubuntu‑24.04 สามารถดูรายชื่อดิสโทรที่มีให้ติดตั้งด้วย:

```powershell
powershell
wsl --list --online
```

แล้วติดตั้งตัวที่ต้องการ เช่น:

```powershell
powershell
wsl --install -d Ubuntu-24.04
```

