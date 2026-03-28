# Todo-App-Context with Context API

Aplikasi manajemen tugas (Todo List) yang dibangun menggunakan React Native dan Expo. Proyek ini berfokus pada implementasi State Management menggunakan Context API, penyimpanan data lokal, dan fitur interaktif *drag-and-drop* yang mulus.

## 📦 Hal yang Perlu Di-install (Instalasi Dependensi)

Untuk menjalankan proyek ini secara lokal, pastikan telah menginstal daftar dependensi berikut. Jalankan perintah ini di terminal proyek:

**1. Penyimpanan Lokal (AsyncStorage)**
`
npx expo install @react-native-async-storage/async-storage
`

**2. Safe Area Context**
`
npx expo install react-native-safe-area-context
`

**3. Animasi & Gesture (Reanimated & Gesture Handler)**
`
npx expo install react-native-reanimated
npx expo install react-native-gesture-handler
`

**4. Fitur Drag and Drop List**
`
npx expo install react-native-draggable-flatlist
`

**5. Babel Preset (Jika terjadi error kompilasi)**
`
npm install --save-dev babel-preset-expo
`

*(Catatan: Pastikan untuk menambahkan plugin reanimated di dalam `babel.config.js` dan restart server Expo dengan `npx expo start -c` setelah instalasi).*

---

## 🛠️ Library & Komponen yang Dipakai

Proyek ini memanfaatkan berbagai pustaka dan komponen inti untuk menyusun antarmuka dan logika aplikasi:

- **Status Bar:** Menggunakan `expo-status-bar` untuk mengelola tampilan bar indikator baterai/sinyal di bagian atas layar.
- **SafeAreaProvider:** Menggunakan `react-native-safe-area-context` untuk memastikan konten aplikasi tidak tertutup oleh *notch* atau bezel layar HP modern.
- **GestureHandlerRootView:** Menggunakan `react-native-gesture-handler` sebagai pembungkus (*wrapper*) utama aplikasi agar seluruh layar dapat mendeteksi sensor sentuhan/geseran jari secara optimal.
- **AsyncStorage:** Menggunakan `@react-native-async-storage/async-storage` untuk menyimpan data todo secara permanen di memori HP, sehingga data tidak hilang saat aplikasi ditutup.
- **Core Components React Native:** Menggunakan komponen bawaan seperti:
  - `View` (sebagai kontainer/pembungkus elemen)
  - `Text` (untuk menampilkan tulisan)
  - `StyleSheet` (untuk memberikan *styling*/desain)
  - `TouchableOpacity` (untuk membuat elemen dan tombol yang bisa ditekan dengan efek transparan)

---

## 🚀 Cara Menjalankan Aplikasi

1. *Clone* repository ini ke komputer.
2. Buka terminal di dalam folder proyek.
3. Jalankan `npm install` untuk mengunduh semua *package*.
4. Jalankan `npx expo start -c` untuk memulai server pengembangan.
