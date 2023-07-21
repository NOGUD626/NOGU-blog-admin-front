# ベースとなるDockerイメージ指定
FROM node:19.8.1

# 作業ディレクトリの設定
WORKDIR /app

# プロジェクトファイルをコピー
COPY ./src/package*.json ./src/tsconfig*.json ./src/vite.config.ts ./

# 依存関係のインストール
RUN npm install

# ソースコードのコピー
COPY ./src/ .

# ビルドコマンドの実行
RUN npm run build

# コンテナ起動時の実行コマンド
CMD ["npm", "run", "dev"]
