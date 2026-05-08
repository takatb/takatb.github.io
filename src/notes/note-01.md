---
layout: layout.njk
title: "คำสั่งเพิ่ม project"
date: 2026-05-09T22:30:00+07:00
permalink: /notes/001-add project/

tags:
  - note
  - Github

summary: >-
  คำสั่งในการเพิ่มเอกสาร บันทึกในระบบนี้ และ commit ไปยัง github
  สำหรับ copy paste อย่างรวดเร็ว

# projectType: normal | play | experiment | document | tool | note
projectType: note
status: 

featured: false
order: 60

cover: 

tools:
  - CMD
  - Github
  - PowerShell

links:
  demo:
  repo:
  paper:
---

## คำสั่งเพิ่ม project

ติดตั้ง dependency:

```bash
npm install
```

รันเว็บสำหรับพัฒนา:

```bash
npm run start
```

จากนั้นเปิดเว็บที่ URL ที่ Eleventy แสดงใน terminal เช่น:

```text
http://localhost:8080/
```

Build เว็บสำหรับเผยแพร่:

```bash
npm run build
```

หมายเหตุสำหรับ Windows: ถ้า PowerShell บล็อก `npm` ให้ใช้ `npm.cmd` แทน เช่น:

```bash
npm.cmd run build
```

## คำสั่งเพิ่ม update github

คำสั่ง commit

```bash
cd C:\\Users\\beelink\\Desktop\\my-lab-site 
git add . 
git commit -m "commit detail" 
git push origin main
```





------

## แสดงรายชื่อ remote ทั้งหมด พร้อม URL 

ในโฟลเดอร์ `my-lab-site` ให้พิมพ์

```cmd
git remote -v
```

คำสั่งนี้จะแสดงรายชื่อ remote ทั้งหมด พร้อม URL สำหรับทั้ง fetch และ push เช่น

```cmd
origin  https://github.com/username/my-lab-site.git (fetch)
origin  https://github.com/username/my-lab-site.git (push)
```

บรรทัดที่ขึ้นต้นด้วย `origin` ก็คือ URL ของ remote ชื่อ origin 

หรือ ``` git remote get-url origin```

