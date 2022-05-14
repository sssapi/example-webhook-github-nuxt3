# SSSAPI Example | GitHub Actions | Nuxt3

[SSSAPI](https://sssapi.app/ogp.png)のWebhook通知機能を利用して、  
[GitHub Actions](https://github.co.jp/features/actions)と連携するサンプルです。

[Google Forms](https://forms.gle/PGXB4uuqbQDra4mC9)に回答を送信すると、  
数分後に[GitHub Pages](https://sssapi.github.io/example-webhook-github-nuxt3/)が更新されます。

![OGP](https://raw.githubusercontent.com/sssapi/example-webhook-github-nuxt3/main/.images/images.png)

[Google Forms](https://forms.gle/PGXB4uuqbQDra4mC9)に回答が送信されると、  
リンクした[スプレッドシート](https://docs.google.com/spreadsheets/d/1eHkZMWH2Mkd1WLI5VfYWjIxcb72szH8PU26ZYOoiOqo/edit#gid=881105740)に追記されます。

SSSAPIの自動更新機能を利用して、スプレッドシートの変更を検知し、  
スプレッドシートから作成した[JSON API](https://api.sssapi.app/LrBc1kSx12Hq4VCmge0MP)を更新します。

更新が完了すると、[GitHub Actions](https://github.com/sssapi/example-webhook-github-nuxt3/actions)に通知を送り、  
Nuxt3のアプリをビルドし、[GitHub Pages](https://sssapi.github.io/example-webhook-github-nuxt3/)へデプロイします。

## Resources

- [Google Forms](https://forms.gle/PGXB4uuqbQDra4mC9)
- [Google Sheets](https://docs.google.com/spreadsheets/d/1eHkZMWH2Mkd1WLI5VfYWjIxcb72szH8PU26ZYOoiOqo/edit#gid=881105740)
- [GitHub Pages](https://sssapi.github.io/example-webhook-github-nuxt3/)
- [GitHub Repository](https://github.com/sssapi/example-webhook-github-nuxt3)

## About

GoogleスプレッドシートのJSON API化サービス  
SaaS for Simple Spread Sheet API  
[SSSAPI](https://sssapi.app)

- Web Site: [https://sssapi.app](https://sssapi.app)
- Twitter: [@sssapi_app](https://twitter.com/sssapi_app)