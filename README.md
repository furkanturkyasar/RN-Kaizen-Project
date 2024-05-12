# React Native Promosyon Uygulaması

Bu proje, React Native kullanılarak geliştirilmiş bir mobil uygulamadır. Uygulama, kullanıcılara çeşitli promosyonları gösterir ve kullanıcıların bu promosyonların detaylarını incelemesine olanak tanır.

## Başlarken

Bu bölüm, projeyi klonlamak ve yerelde çalıştırmak için gereken adımları içerir.

### Önkoşullar

Bu projeyi çalıştırmadan önce sisteminizde aşağıdaki araçların kurulu olması gerekmektedir:

- Node.js (v14.0 veya üstü)
- npm (Node.js ile birlikte gelir)
- React Native CLI
- Xcode veya Android Studio (iOS veya Android emülatörü/simülatörü için)

### Kurulum

Projeyi yerel makinenize klonlamak ve bağımlılıkları kurmak için aşağıdaki adımları takip edin:

1. Projeyi GitHub'dan klonlayın:
    ```bash
    git clone https://github.com/furkanturkyasar/RN-Kaizen-Project.git
    ```
2. Proje dizinine gidin:
    ```bash
    cd RN-Kaizen-Project
    ```
3. Çevre Değişkenleri:
   Projeyi çalıştırmadan önce, kök dizinde bir `.env` dosyası oluşturmanız gerekmektedir. Bu dosyada aşağıdaki değişkenler bulunmalıdır:
    ```plaintext
    BASE_API_URL="https://api.extrazone.com/"
    ```
4. Gerekli npm paketlerini yükleyin:
    ```bash
    npm install
    ```
5. iOS için gerekli pod'ları kurun (iOS geliştirme yapıyorsanız):
    ```bash
    cd ios && pod install && cd ..
    ```
6. Uygulamayı başlatın:
    ```bash
    npm start
    ```
7. Ayrı bir terminalde uygulamayı iOS veya Android simülatöründe çalıştırın:
    ```bash
    npx react-native run-ios
    # veya
    npx react-native run-android
    ```

## Kullanım

Uygulama çalıştırıldığında, ana sayfada çeşitli promosyonlar listelenir. Kullanıcılar, alt kısımdaki navigasyon bar kullanarak farklı ekranlar arasında geçiş yapabilir ve promosyonların detaylarını görüntüleyebilir.

## Katkıda Bulunma

Projeye katkıda bulunmak isteyenler, GitHub üzerinden "Fork" ve "Pull request" gönderebilirler.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## İletişim

Proje sahibi - Furkan Türkyaşar
E-posta: [turkyasarfurkan@gmail.com](mailto:turkyasarfurkan@gmail.com)
