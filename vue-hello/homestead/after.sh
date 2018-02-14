#!/bin/sh

# If you would like to do some extra provisioning you may
# add any commands you wish to this file and they will
# be run after the Homestead machine is provisioned.

cd ~/code

# Laravelのインストール
composer create-project --prefer-dist laravel/laravel main
cd ~/code/main

# Laravel依存パッケージのインストール
# laravel-mixとかがインストールされる
# --no-optional でfseventsのエラー回避
npm install --no-optional

# その他パッケージのインストール
npm install --save-dev vue vuex axios lodash postcss postcss-cssnext cssnano

# 初回ビルド実行
npm run dev
