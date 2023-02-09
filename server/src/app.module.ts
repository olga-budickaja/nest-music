import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {AlbumModule} from "./album/album.module";
import * as dotenv from 'dotenv';
import * as process from "process";
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import  * as path from 'path';

dotenv.config();
const MONGO_URL = process.env.MONGO_URL

@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        MongooseModule.forRoot(MONGO_URL),
        TrackModule,
        AlbumModule,
        FileModule
    ]
})
export class AppModule {

}