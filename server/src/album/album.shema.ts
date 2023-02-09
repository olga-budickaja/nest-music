import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import {Track} from "../track/schemas/track.schema";

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album {
    @Prop()
    name: string;
    @Prop()
    author: string;
    @Prop()
    picture: string;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Track'})
    track: Track;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);