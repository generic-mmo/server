import Microservice from "@generic-mmo/grpc";
import {
    CartographerService,
    CartographerClient, RetrieveChunkResponse
} from "./schema/schema"



@Microservice({
    location: () =>
        process.env.CARTOGRAPHER_API!,
    client: CartographerClient,
    service: CartographerService
})
export default class Cartographer {
    public retrieveChunk = (call: unknown, callback: Function) => {
        const response: RetrieveChunkResponse = { foobar: "Well done!"}
        callback(null, response)
    }
}