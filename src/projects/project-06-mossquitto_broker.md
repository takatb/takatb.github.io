---
layout: layout.njk
title: ขั้นตอนการติดตั้ง mosquitto บน Ubuntu WSL2
date: 2026-03-17T00:12:00+07:00
permalink: /projects/006-mosquitto/

tags:
  - projects
  - broker
  - mosquitto

summary: >-
  ขั้นตอนการติดตั้ง mosquitto นน Ubuntu WSL2

# projectType: normal | play | experiment | document | tool | note
projectType: tool
status: finished

featured: true
order: 8

cover: /images/006-mosquitto-img00.png

tools:
  - mqtt
  - mosquitto

links:
  demo: 
  repo: 
  paper:
---



## ติดตั้ง Mosquitto MQTT Broker

**ขั้นตอนพื้นฐาน** - อัปเดตระบบแล้วติดตั้ง Mosquitto ด้วยคำสั่ง:

```bash
sudo apt update
sudo apt install -y mosquitto
```

หลังติดตั้ง Mosquitto จะเริ่มทำงานอัตโนมัติและ start เองทุกครั้งที่บูตเครื่อง. ตรวจสอบสถานะด้วย:

```bash
sudo systemctl status mosquitto
```

**ติดตั้ง Mosquitto Client Tools** - สำหรับทดสอบและใช้งานคำสั่ง `mosquitto_pub` และ `mosquitto_sub`:

```bash
sudo apt install -y mosquitto-clients
```

ตรวจสอบว่าติดตั้งสำเร็จด้วยคำสั่ง:

```bash
mosquitto_pub
```

จะแสดงข้อความช่วยเหลือของคำสั่ง.

## ทดสอบการทำงาน

**ทดสอบแบบพื้นฐาน** - เปิด terminal 2 หน้าต่าง หน้าต่างแรกใช้ subscribe:

```bash
mosquitto_sub -h localhost -t "test"
```

หน้าต่างที่สองใช้ publish:

```bash
mosquitto_pub -h localhost -t "test" -m "Hello MQTT"
```

ข้อความจะปรากฏใน terminal ที่รัน subscriber.

**ตรวจสอบ IP Address** - หากต้องการเชื่อมต่อจากเครื่องอื่น ให้ติดตั้ง net-tools และตรวจสอบ IP:

```bash
sudo apt install net-tools
ifconfig
```

## การตั้งค่า Authentication

**สร้าง Username และ Password** - เพิ่มความปลอดภัยด้วยการกำหนด username/password:

```bash
sudo mosquitto_passwd -c /etc/mosquitto/passwd <username>
```

ระบบจะให้ป้อนรหัสผ่าน 2 ครั้ง. แก้ไขไฟล์ config:

```bash
sudo nano /etc/mosquitto/mosquitto.conf
```

เพิ่มบรรทัดต่อไปนี้:

```
textlistener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
```

รีสตาร์ท Mosquitto:

```bash
sudo systemctl restart mosquitto
```

**ทดสอบด้วย Authentication** - ใช้ option `-u` และ `-P`:

```bash
mosquitto_sub -h localhost -u 'username' -P 'password' -t 'test/#'
mosquitto_pub -h localhost -u 'username' -P 'password' -t 'test/123' -m 'secured message'
```

## เปิดพอร์ตสำหรับเครื่องภายนอก

**ตั้งค่า Firewall** - อนุญาตให้เข้าถึง port 1883:

```bash
sudo ufw allow 1883
```

กฎนี้ทำให้ firewall อนุญาตการเชื่อมต่อผ่าน port 1883 ซึ่งเป็น default port ของ MQTT.

**ทดสอบจากเครื่องอื่น** - ใช้ IP address แทน localhost:

```bash
mosquitto_sub -h 192.168.1.11 -u 'username' -P 'password' -t 'test'
mosquitto_pub -h 192.168.1.11 -u 'username' -P 'password' -t 'test' -m 'remote message'
```
