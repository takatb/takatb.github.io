# TODO: Eleventy Personal Lab Portfolio Website

เอกสารนี้เป็นแผนงานแบบลำดับขั้นสำหรับพัฒนาเว็บห้องทดลองส่วนตัวให้ขยายไปเป็นเว็บรวม portfolio ด้วย Eleventy โดยอ้างอิงแนวทางของ Eleventy เรื่อง collections, deployment, assets และการเสริม Tailwind CSS เพื่อจัดการสไตล์และองค์ประกอบหน้าเว็บได้ยืดหยุ่นขึ้น [cite:160][cite:176][cite:202][cite:189]

## เป้าหมายหลัก

- ให้เว็บเป็นทั้ง **personal lab** และ **portfolio archive** ในที่เดียวกัน [cite:199][cite:196]
- เพิ่มโปรเจกต์ใหม่ได้โดยไม่ต้องแก้หน้าแรกด้วยมือ โดยใช้ collections ของ Eleventy [cite:160][cite:170]
- ปรับหน้าตาให้ดูเป็น portfolio ที่อ่านง่าย สะอาด และพร้อมเผยแพร่ โดยอาจใช้ Tailwind CSS ร่วมกับ CSS ปกติ [cite:189][cite:190]
- ทำให้ workflow การพัฒนาในเครื่องและ deployment อัตโนมัติใช้งานจริงได้ในระยะยาว [cite:176][cite:143]

## Phase 1: โครงหลักให้ใช้งานได้

| สถานะ | งาน | รายละเอียด | หมายเหตุ |
|---|---|---|---|
| [ ] | จัดโครงสร้างโปรเจกต์ | จัดให้มี `src/`, `src/_includes/`, `src/projects/`, `src/images/`, `.eleventy.js`, `package.json` | ให้ไฟล์อยู่ใน input directory อย่างชัดเจน [cite:178] |
| [ ] | ทำ layout กลาง | สร้าง `layout.njk` สำหรับ header, nav, footer และ meta พื้นฐาน | ช่วยลดการเขียน HTML ซ้ำ [cite:164][cite:178] |
| [ ] | กำหนด metadata มาตรฐาน | ใช้ front matter เช่น `title`, `date`, `summary`, `tags`, `featured`, `cover`, `projectType`, `tools` | ใช้ data cascade และดึงข้อมูลร่วมกันได้ [cite:131][cite:133] |
| [ ] | สร้าง collection ของ projects | ให้ทุกไฟล์โปรเจกต์มี `tags: projects` | เพื่อรวมรายการงานทั้งหมดอัตโนมัติ [cite:160][cite:170] |
| [ ] | ทำหน้ารวมผลงาน | สร้าง `/projects/` ให้แสดงรายการโปรเจกต์ทั้งหมดเรียงตามวันที่ | เป็น archive page หลักของเว็บ [cite:160] |
| [ ] | ทำหน้าแรกอัตโนมัติ | ให้หน้าแรกแสดง 3 งานล่าสุดหรือเฉพาะ `featured` จาก collection | ลดการแก้หน้าแรกด้วยมือ [cite:160][cite:170] |
| [ ] | ตั้ง passthrough copy สำหรับรูป | เพิ่ม `addPassthroughCopy("src/images")` ใน `.eleventy.js` | ทำให้รูปถูก copy ไป `_site` [cite:150][cite:159] |
| [ ] | สร้าง template โปรเจกต์ใหม่ | เตรียมไฟล์ Markdown ต้นแบบสำหรับคัดลอกทุกครั้งที่เพิ่มงาน | ลดขั้นตอนเวลาเพิ่มโปรเจกต์ [cite:131][cite:180] |

## Phase 2: เพิ่มความสวยงามให้เป็น portfolio

| สถานะ | งาน | รายละเอียด | หมายเหตุ |
|---|---|---|---|
| [ ] | วาง art direction ของเว็บ | กำหนดโทนเว็บว่าเป็น minimal, technical, editorial หรือ maker portfolio | ช่วยให้การเลือกสี ฟอนต์ และ layout ไปในทางเดียวกัน [cite:196][cite:199] |
| [ ] | ออกแบบโครงหน้าแรกแบบ portfolio | วางส่วน Hero, Featured Projects, Latest Notes, About, Contact/GitHub | หน้าแรกควรพาผู้ชมไปยังงานเด่นได้ทันที [cite:196][cite:199] |
| [ ] | ออกแบบการ์ดโปรเจกต์ | ให้การ์ดมีรูปปก ชื่อ คำอธิบายสั้น แท็ก และลิงก์เข้ารายละเอียด | เหมาะกับหน้า archive แบบ portfolio [cite:193][cite:196] |
| [ ] | ปรับ typography | กำหนดขนาดหัวข้อ เนื้อหา spacing และ max-width ให้อ่านง่าย | เป็นพื้นฐานของเว็บ portfolio ที่ดูดี [cite:183][cite:202] |
| [ ] | ปรับสีและ spacing | เลือกสีหลัก สีพื้น และระยะห่างที่คงที่ทั้งเว็บ | ทำให้เว็บดูเป็นระบบมากขึ้น [cite:190][cite:196] |
| [ ] | เพิ่มภาพหน้าปกให้แต่ละโปรเจกต์ | ใช้ field `cover` ใน front matter และแสดงบนการ์ด/หน้า detail | ช่วยให้ portfolio ดูมีน้ำหนักทางภาพ [cite:193][cite:196] |
| [ ] | ทำ featured section | แยกงานเด่นจากงานล่าสุด | ใช้ `featured: true` เพื่อควบคุมสิ่งที่ขึ้นหน้าแรก [cite:131] |
| [ ] | ทำ about block แบบ portfolio | สรุปว่าคุณทำอะไร สนใจอะไร และเว็บนี้มีไว้ทำอะไร | ช่วยให้คนเข้าใจตัวตนเจ้าของเว็บเร็วขึ้น [cite:196][cite:199] |

## Phase 3: นำ Tailwind CSS เข้ามาร่วมด้วย

| สถานะ | งาน | รายละเอียด | หมายเหตุ |
|---|---|---|---|
| [ ] | ตัดสินใจรูปแบบการใช้ Tailwind | เลือกว่าจะใช้ Tailwind ทั้งเว็บ หรือใช้ร่วมกับ CSS เดิมเฉพาะ layout/components | Tailwind ไม่จำเป็นต้องแทน CSS เดิมทั้งหมด [cite:189] |
| [ ] | ติดตั้ง Tailwind | ติดตั้ง `tailwindcss` และเครื่องมือที่จำเป็นตาม workflow ที่เลือก | เป็นขั้นเริ่มต้นของการใช้ utility classes [cite:189][cite:191] |
| [ ] | สร้างไฟล์ input CSS | เช่น `src/assets/css/tailwind.css` หรือ `src/styles/index.css` | เป็นไฟล์รวม `@tailwind base`, `components`, `utilities` [cite:189][cite:190] |
| [ ] | สร้าง tailwind config | กำหนด `content` ให้ครอบคลุมไฟล์ template เช่น `src/**/*.njk`, `src/**/*.md`, `src/**/*.html` | เพื่อให้ purge/scan class ถูกต้อง [cite:190][cite:195] |
| [ ] | ตั้ง build script สำหรับ CSS | เพิ่ม script build/watch ให้ Tailwind compile ไฟล์ CSS ออกมาใช้งาน | แนวทางทั่วไปคือ compile CSS คู่กับ Eleventy [cite:189][cite:190] |
| [ ] | ผูก CSS เข้ากับ layout | เพิ่ม `<link>` ไปยังไฟล์ CSS ที่ compile แล้วใน `layout.njk` | ทำให้ทุกหน้ารับสไตล์ใหม่ [cite:189][cite:202] |
| [ ] | ทดสอบ watch mode | ให้ `npm run start` หรือ script dev รัน Eleventy และ Tailwind พร้อมกัน | เพื่อให้แก้หน้าเว็บแล้วเห็นผลทันที [cite:189][cite:143] |
| [ ] | ทำชุด utility classes กลาง | สร้าง class pattern สำหรับ container, section, card, button, tag | ช่วยให้ใช้ Tailwind แบบมีระบบ ไม่กระจัดกระจาย [cite:190][cite:196] |
| [ ] | ตัดสินใจเรื่อง component library | ถ้าต้องการ อาจพิจารณา daisyUI หรือ plugin ที่เข้ากับ Eleventy | ใช้เมื่ออยากได้ component สำเร็จรูปเร็วขึ้น [cite:198][cite:201] |

## Phase 4: ทำให้เว็บใช้งานดีขึ้น

| สถานะ | งาน | รายละเอียด | หมายเหตุ |
|---|---|---|---|
| [ ] | เพิ่มหน้า About | สร้างหน้าอธิบายว่าเว็บนี้คืออะไร เจ้าของเว็บทำอะไร และสนใจเรื่องไหน | ช่วยให้เว็บมีบริบทมากขึ้น [cite:164] |
| [ ] | เพิ่มหน้า Notes | แยกบันทึกสั้นหรือไอเดียทดลองออกจากหน้า projects | เหมาะกับเว็บแนวห้องทดลองส่วนตัว [cite:178] |
| [ ] | ปรับ navigation | ใส่เมนู Home, Projects, Notes, About ให้ครบทุกหน้า | ช่วยให้ใช้งานลื่นขึ้น [cite:164][cite:184] |
| [ ] | ปรับหน้า detail ของโปรเจกต์ | แสดง cover image, summary, เครื่องมือที่ใช้, เนื้อหา และลิงก์ที่เกี่ยวข้อง | ทำให้แต่ละงานดูเป็น case study มากขึ้น [cite:196][cite:193] |
| [ ] | ทำระบบแท็ก | ใช้ `tags` เช่น `robotics`, `teaching`, `arduino`, `digital-twin` | ช่วยจัดกลุ่มงานจำนวนมาก [cite:167] |
| [ ] | ทำหน้า tag archive | ทำหน้ารวมโปรเจกต์ตามแท็ก | ใช้ต่อยอดจาก collections [cite:167][cite:145] |
| [ ] | เพิ่ม project filter บนหน้า portfolio | อาจเพิ่มปุ่มกรองงานตามประเภทหรือแท็ก | มีตัวอย่างแนวคิดใน portfolio ที่ใช้ tag/filter [cite:193] |

## Phase 5: workflow และการดูแลระยะยาว

| สถานะ | งาน | รายละเอียด | หมายเหตุ |
|---|---|---|---|
| [ ] | เพิ่ม npm scripts | ตั้ง `start`, `build` และถ้าใช้ Tailwind ให้เพิ่ม script สำหรับ CSS watch/build | ใช้งานสะดวกขึ้นระหว่างพัฒนา [cite:143][cite:189] |
| [ ] | ทดสอบ local build | ตรวจว่า `npm run start` และ `npm run build` ทำงานปกติ | เช็ก route, รูป, ลิงก์ และ output ใน `_site` [cite:143] |
| [ ] | ตั้ง deploy อัตโนมัติ | เชื่อม Git กับ static hosting เช่น GitHub Pages หรือบริการอื่น | ให้เว็บอัปเดตเมื่อ push [cite:176][cite:177] |
| [ ] | ตั้ง pathPrefix ถ้าจำเป็น | ถ้า deploy แบบ subfolder เช่น GitHub Pages project site ให้ตั้ง path ให้ตรง | ป้องกันลิงก์และรูปพัง [cite:176] |
| [ ] | เขียน workflow การเพิ่มงานใหม่ | กำหนดขั้นตอนมาตรฐาน เช่น สร้างไฟล์ใหม่ ใส่รูป ใส่ metadata แล้ว push | ทำให้ดูแลง่ายในระยะยาว [cite:176][cite:178] |

## Phase 6: ความพร้อมสำหรับการเผยแพร่

| สถานะ | งาน | รายละเอียด | หมายเหตุ |
|---|---|---|---|
| [ ] | เพิ่ม sitemap | สร้าง `sitemap.xml` สำหรับทุกหน้าและโปรเจกต์ | ช่วยเรื่อง indexing [cite:173][cite:184] |
| [ ] | เพิ่ม RSS | ใช้ RSS plugin ของ Eleventy สำหรับ feed ของ notes หรือ projects | ช่วยติดตามอัปเดตใหม่ [cite:174][cite:168] |
| [ ] | ตรวจ SEO พื้นฐาน | เพิ่ม title, description, og tags, canonical ให้แต่ละหน้า | ทำให้แชร์ลิงก์และค้นหาได้ดีขึ้น [cite:172][cite:183] |
| [ ] | ตรวจ accessibility | เช็ก alt text, heading hierarchy, contrast, keyboard navigation | เป็นแนวปฏิบัติที่ดีสำหรับเว็บสมัยใหม่ [cite:175] |
| [ ] | ตรวจ performance | ลดขนาดรูป, ใช้ lazy loading, เช็กความเร็ว build และหน้าเว็บ | สำคัญสำหรับเว็บ static ที่เน้นความเบา [cite:183][cite:202] |

## งานประจำทุกครั้งที่เพิ่มโปรเจกต์ใหม่

| สถานะ | ขั้นตอน | รายละเอียด |
|---|---|---|
| [ ] | สร้างไฟล์ Markdown ใหม่ | คัดลอกจาก template เดิม |
| [ ] | ใส่ front matter | กรอก `title`, `date`, `summary`, `tags`, `cover`, `featured`, `projectType`, `tools` |
| [ ] | ใส่รูปประกอบ | เก็บรูปไว้ใน `src/images/` และอ้าง path เป็น `/images/...` [cite:150][cite:157] |
| [ ] | ตรวจหน้า local | เปิดดูว่าโปรเจกต์ขึ้นในหน้าแรก หน้า `/projects/` และการ์ด portfolio ถูกต้อง |
| [ ] | ตรวจ layout บนมือถือ | เช็กว่าการ์ด รูป และข้อความยังอ่านง่าย | สำคัญมากเมื่อใช้ Tailwind utility classes จำนวนมาก [cite:190][cite:196] |
| [ ] | commit และ push | ให้ระบบ deploy อัปเดตเว็บอัตโนมัติ [cite:176] |

## ลำดับแนะนำแบบเร็ว

1. ทำ Phase 1 ให้ครบก่อน เพราะเป็นแกนหลักของระบบ collection และหน้าแรกอัตโนมัติ [cite:160][cite:170]
2. จากนั้นทำ Phase 2 เพื่อให้เว็บเริ่มมีหน้าตาเป็น portfolio จริง [cite:196][cite:199]
3. ถ้าต้องการคุมสไตล์เร็วและยืดหยุ่น ให้เริ่ม Phase 3 ด้วย Tailwind แต่ใช้ร่วมกับ CSS เดิมอย่างค่อยเป็นค่อยไป [cite:189][cite:190]
4. เมื่อโครงและหน้าตานิ่งแล้วค่อยทำ deploy, sitemap, RSS และ SEO ใน Phase 5-6 [cite:176][cite:174][cite:173]

## ชุดที่ควรทำก่อนถ้าอยากเห็นผลเร็ว

- ปรับหน้าแรกให้เป็น portfolio landing
- ทำการ์ดโปรเจกต์ให้ดูดี
- เพิ่มภาพปกทุกโปรเจกต์
- นำ Tailwind เข้ามาช่วยจัด layout และ spacing
- ปรับหน้า `/projects/` ให้เป็นหน้า archive แบบ portfolio
- ตั้ง workflow เพิ่มโปรเจกต์ใหม่ให้เหลือแค่แก้ Markdown + รูป + push [cite:193][cite:189][cite:176]
