# achievement-receive-bot

## About me

> これはなに？

FFXIVの新規拡張となる `DAWNTRAIL` に向けた、Discordサーバーでのネタバレ回避のためのbotです

This is avoid to spoiler bot for the FinalFantasy XIV new expansion called `DAWNTRAIL`

## How to contribution

> 開発のしかた

> 注意: ある程度ターミナル ( `/bin/bash` や `pwsh.exe` など ) の知識が要求されます

### exec on local

> ローカルの実行方法

> [!NOTE]
> `docker-compose` を利用する必要が発生しており、この節の記述内容は `Windows` の利用とデータベースの構築について言及していません
> this section is not include `Windows` and `database` setup because of using `docker-compose` probably

> JA

1. `node.js` を用意します
    1. debian系linux: `sudo apt install -y nodejs npm`
    2. RHEL系linux: `sudo yum install -y nodejs npm`
2. このリポジトリを `git clone` でローカルに持ってきます
3. ローカルに `clone` してきたら、このディレクトリの中に入ります
    1. `cd metazoabot`
4. `npm install` をします
    1. `npm i`
5. `.env` を作成し、次のような内容を入力します
    ```.env
    DISCORD_BOT_TOKEN = XXXXXXXXXXXXXXXXXXX
    CLIENT_ID = XXXXXXXXXXXXXXXXXXX
    ```
    > 入力する内容はそれぞれ、 [`discord developer portal`](https://discord.com/developers/applications) より取得できます
5. botを起動させます
    1. `npm run start`

> EN

1. you should install `node.js` your environment please
    1. Debian-based linux: `sudo apt install -y nodejs npm`
    2. RHEL-basedlinux: `sudo yum install -y nodejs npm`
2. you should download to your local environment by `git clone` command please
3. enter the cloned directory after you downloaded ( `git clone` has been finished )
    1. `cd achivement-receive-bot`
4. you should exec `npm install` command
    1. `npm i`
5. please make `.env` file and write the following contents (or you can choose to copy `.env.default` to `.env`)
    ```.env
    DISCORD_BOT_TOKEN = XXXXXXXXXXXXXXXXXXX
    CLIENT_ID = XXXXXXXXXXXXXXXXXXX
    ```
    > you can get to values from [`discord developer portal`](https://discord.com/developers/applications)
5. please boot the bot by the following command
    1. `npm run start`

### deploy

github actionにて自動デプロイを作成していますので、そこから実行してください

デプロイ先は `@cocoalix` が管理していますので、何かがあればそちらまでお願いします

I have created an automatic deployment in github action, so please run it from there

The deployment destination is managed by `@cocoalix`, so please contact me if you have any questions

### reference for develop/contribution

> 開発のしかたの参考資料

- [documentation - discord.js](https://discord.js.org/docs/packages/discord.js/14.14.1)
- [【基本】discord.js v14 でボット作成 #1 ～ボットの作成と初起動～ - Qiita](https://qiita.com/hitori_yuu/items/619de9786ffc9288c1d6#%E3%83%9C%E3%83%83%E3%83%88%E3%81%AE%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E4%BD%9C%E6%88%90)
