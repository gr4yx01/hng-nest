import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export default class TestPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(value)
        return Number(value)
    }
}