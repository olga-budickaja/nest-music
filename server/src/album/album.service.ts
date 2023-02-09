import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Album, AlbumDocument} from "./album.shema";
import {Model} from "mongoose";

@Injectable()
export class AlbumService {

    constructor(@InjectModel(Album.name) private catModel: Model<AlbumDocument>) {}

    async create() {

    }

    async getAll() {

    }

    async getOne() {

    }

    async delete() {

    }
}