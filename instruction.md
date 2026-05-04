# Instruction: เริ่มต้นทำงานกับ My Lab Site

เอกสารนี้สรุปวิธีเริ่มต้นพัฒนาเว็บ `my-lab-site` ซึ่งเป็นเว็บ personal lab / portfolio ที่สร้างด้วย Eleventy

## ภาพรวมโครงสร้าง

- `src/` คือไฟล์ต้นทางของเว็บ
- `src/index.njk` คือหน้าแรก
- `src/projects.njk` คือหน้ารวมผลงาน
- `src/projects/` คือไฟล์ Markdown ของโปรเจกต์และโน้ต
- `src/_includes/layout.njk` คือ layout หลักที่ทุกหน้าใช้ร่วมกัน
- `src/images/` คือรูปภาพที่ต้องการให้ copy ไปยังเว็บที่ build แล้ว
- `template/` คือไฟล์ต้นแบบสำหรับสร้างเนื้อหาใหม่
- `_site/` คือผลลัพธ์หลัง build ไม่ควรแก้ไฟล์ในนี้โดยตรง

## คำสั่งพื้นฐาน

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

## วิธีเพิ่มโปรเจกต์ใหม่

1. คัดลอกไฟล์ต้นแบบจาก `template/` เช่น `template_experiment.md`
2. วางไฟล์ใหม่ใน `src/projects/`
3. ตั้งชื่อไฟล์ให้อ่านง่าย เช่น `beam-vibration-experiment.md`
4. แก้ front matter ด้านบนของไฟล์ให้ครบ

ตัวอย่าง front matter:

```yaml
---
layout: layout.njk
title: ชื่อโปรเจกต์
date: 2026-05-04T00:00:00+07:00
permalink: /projects/project-slug/

tags:
  - projects
  - experiment

summary: คำอธิบายสั้น ๆ ของโปรเจกต์

projectType: experiment
status: in-progress
featured: false
order: 10

cover: /images/example-cover.jpg

tools:
  - Python
  - Arduino

links:
  demo:
  repo:
  paper:
---
```

5. ใส่เนื้อหา Markdown ใต้ front matter
6. ถ้ามีรูป ให้เก็บไว้ใน `src/images/` และอ้าง path เป็น `/images/ชื่อไฟล์`
7. รัน `npm run build` เพื่อตรวจว่าเว็บสร้างได้ปกติ

## วิธีเพิ่มโน้ตใหม่

ตอนนี้โน้ตยังอยู่ใน `src/projects/` เช่นเดียวกับโปรเจกต์ หากเพิ่ม note ให้ตั้ง `projectType: note` และใช้ permalink ใต้ `/notes/`

ตัวอย่าง:

```yaml
permalink: /notes/pid-tuning-test-rig/
projectType: note
tags:
  - note
  - control
```

ข้อแนะนำ: ในอนาคตควรแยก notes ออกจาก projects ให้ชัดเจน เช่นสร้าง `src/notes/` และ collection แยกต่างหาก

## สิ่งที่ควรระวัง

- อย่าแก้ไฟล์ใน `_site/` โดยตรง เพราะจะถูกเขียนทับเมื่อ build ใหม่
- ถ้าใช้ `cover` ใน front matter ต้องมีไฟล์รูปจริงใน `src/images/`
- ตอนนี้ layout เรียก `/css/main.css` แต่ยังไม่มีระบบ CSS ที่สมบูรณ์ ควรเพิ่มไฟล์ CSS หรือ setup Tailwind ให้ครบ
- เมนูมีลิงก์ `/notes/` และ `/about/` แต่ควรตรวจว่ามีหน้าต้นทางจริงก่อนเผยแพร่
- ถ้าเปลี่ยน permalink แล้ว build ใหม่ อาจมีไฟล์เก่าใน `_site/` ค้างอยู่ ควรล้าง `_site/` ก่อน deploy

## งานเริ่มต้นที่แนะนำ

1. แก้ CSS ให้ทำงานจริง
2. เติมรูป cover ที่ถูกอ้างใน front matter
3. สร้างหน้า About
4. สร้างหน้า Notes
5. แยก collection ของ projects และ notes
6. เพิ่ม clean build script
7. เพิ่ม README สำหรับเผยแพร่หรือส่งต่อโปรเจกต์

## Workflow แนะนำ

ทุกครั้งที่เริ่มทำงาน:

1. เปิดโปรเจกต์ที่โฟลเดอร์นี้
2. รัน `npm install` ถ้ายังไม่เคยติดตั้ง
3. รัน `npm run start`
4. แก้ไฟล์ใน `src/`
5. ตรวจเว็บใน browser
6. รัน `npm run build`
7. ตรวจว่าไม่มีรูปหาย ลิงก์เสีย หรือเนื้อหาหาย

แนวคิดหลักของโปรเจกต์นี้คือ: เพิ่มงานใหม่ด้วย Markdown ให้มากที่สุด และให้ Eleventy จัดการสร้างหน้าเว็บให้อัตโนมัติ
