import Microservice, { UnaryCall } from "@generic-mmo/grpc";
import {
    CartographerService,
    CartographerClient,
    RetrieveChunkRequest,
    RetrieveChunkResponse
} from "./schema/schema"



@Microservice({
    location: () =>
        process.env.CARTOGRAPHER_API!,
    client: CartographerClient,
    service: CartographerService
})
export default class Cartographer {
    @UnaryCall()
    public async retrieveChunk(request: RetrieveChunkRequest): Promise<RetrieveChunkResponse> {
        return { foobar: "Well done!" + request.id}
    }
}