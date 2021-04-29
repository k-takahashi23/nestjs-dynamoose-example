import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DynamooseModule.forRoot({
      // TODO: 環境変数などで情報を渡して実行出来るように制御する。
      // TODO: AWS アカウント周りの設定をどこで持つか検討。

      // ローカルデバッグ時に下記のコメントアウトを外す。
      // aws: {
      //   region: 'ap-northeast-1',
      // },
      // local: true,
    }),
    CatsModule,
    UsersModule,
  ],
})
export class AppModule {}