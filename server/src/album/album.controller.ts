import {Controller, Get} from "@nestjs/common";


@Controller('/tracks')
export class AlbumController {
    create() {

    }
    @Get()
    getAll() {
        return 'work'
    }

    getOne() {

    }

    delete() {

    }
}