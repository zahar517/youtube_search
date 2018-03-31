# React Native приложение для поиска клипов на youtube.

## Технологии

* expo
* React Native
* React.js
* axios


## Старт проекта

##### Склонируйте репозиторий и перейдите в папку проекта

```
git clone git@github.com:zahar517/youtube_search.git
```

##### Установите модули локально

```
npm install | yarn install
```

##### Установите Expo XDE

```
npm install exp --global
```

Больше информации на https://expo.io/

##### Получите API key для использования google youtube search

Регистрация https://console.cloud.google.com/apis/dashboard
Затем создайте файл ```secret.json``` и поместите этот ключ в формате
```
{
  "API_KEY": "your_api_key"
}
```

##### Запустите сборку проекта

```
exp start
```
